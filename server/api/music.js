import { baseUrl } from "~/utils/constants.js";
import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient(event)
	const {musicTitle, cursor} = getQuery(event)
	const result = await $fetch(baseUrl, {
		params: {
			musicTitle,
			cursor,
			sortBy: 'date',
			legacySearch: true
		}
	});
	const {itemList} = result;
	const tiktoks = itemList.map(tiktok => {
		const {_tik, metadata} = tiktok;
		const video_url = _tik.video;
		const id = _tik.id;
		const {desc, create_time, statistics, author} = metadata;
		const {comment_count, play_count, digg_count, share_count} = statistics;
		return {id, created_at: create_time, desc, digg_count, comment_count, play_count, share_count, video_url, username: author.unique_id}
	});
	await client.from("tiktoks").upsert(tiktoks)
	return result
})