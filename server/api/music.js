import { baseUrl } from "~/utils/constants.js";

export default defineEventHandler(async (event) => {
	const {musicTitle, cursor} = getQuery(event)
	const result = await $fetch(baseUrl, {
		params: {
			musicTitle,
			cursor,
			sortBy: 'date',
			legacySearch: true
		}
	});
	return result
})