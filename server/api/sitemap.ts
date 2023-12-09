import { serverSupabaseClient } from "#supabase/server";
// @ts-nocheck
export default defineSitemapEventHandler(async (event) => {
	const client = await serverSupabaseClient(event);
	
	let { data: tiktoks, error } = await client
		.from('tiktoks')
		.select('*');
	
	let routes = []
	tiktoks.forEach(tiktok => {
		routes.push( {
			// @ts-ignore
			loc: `/tiktoks/${tiktok.desc}-${tiktok.id}`,
			lastmod: new Date()
		})
	});
	let usernames = tiktoks.map(tiktok => tiktok.username);
	const usernameSet = new Set(usernames);
	usernameSet.forEach(username => {
		routes.push({
			loc: `/tiktoks/user/${username}}`,
			lastmod: new Date()
		})
	})
	return routes;
});
