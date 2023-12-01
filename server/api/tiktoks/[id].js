import { baseUrl } from "~/utils/constants.js";
export default defineEventHandler(async (event) => {
	const {id : videoID} = event.context.params;
	console.log(event.context)
	const result = await $fetch(baseUrl, {
		params: {
			videoID,
			legacySearch: true
		}
	});

	return result
})