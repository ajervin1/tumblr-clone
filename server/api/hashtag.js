import { baseUrl } from "~/utils/constants.js";


export default defineEventHandler(async (event) => {
	const {hashtagName, cursor} = getQuery(event)
	const result = await $fetch(baseUrl, {
		params: {
			hashtagName,
			cursor,
			sortBy: "date",
			legacySearch: true
		}
	});
	console.log(result)
	return result
})