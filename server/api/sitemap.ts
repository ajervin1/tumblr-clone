import { serverSupabaseClient } from "#supabase/server";
// @ts-nocheck
export default defineSitemapEventHandler(async (event) => {
	const client = await serverSupabaseClient(event);
	
	let { data: tiktoks, error } = await client
		.from('tiktoks')
		.select('*');
	
	let routes = []
	tiktoks.forEach(tiktok => {
		
		let regexp = /#\S+/g;
		let description = tiktok.desc;
		description = description.replace(regexp, '').trim();
		description = description.replace(/ /g, "-");
		routes.push( {
			// @ts-ignore
			loc: `/tiktoks/${description}-${tiktok.id}`,
			lastmod: new Date()
		})
	});
	let usernames = tiktoks.map(tiktok => tiktok.username);
	const usernameSet = new Set(usernames);
	usernameSet.forEach(username => {
		routes.push({
			loc: `/user/${username}`,
			lastmod: new Date()
		})
	})
	return routes;
});
