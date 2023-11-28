import { baseUrl } from "~/utils/constants.js";
export default defineEventHandler(async (event) => {
	const {username, cursor} = getQuery(event)
	const result = await $fetch(baseUrl, {
		params: {
			usernames: username,
			cursor,
			sortBy: 'date',
			legacySearch: true
		}
	});
	console.log(result)
	return result
})
