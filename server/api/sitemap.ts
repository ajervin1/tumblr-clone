import { serverSupabaseClient } from "#supabase/server";

export default defineSitemapEventHandler(async (event) => {
	const client = await serverSupabaseClient(event);
	
	let { data: tiktoks, error } = await client
		.from('tiktoks')
		.select('*');
	console.log(tiktoks)
	const routes = tiktoks.map(tiktok => {
		// @ts-nocheck
		return {
			loc: `/tiktoks/${tiktok.id}`,
			lastmod: new Date()
		}
	});
	return routes;
});
