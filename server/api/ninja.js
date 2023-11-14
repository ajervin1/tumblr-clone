export default defineEventHandler(async (event) => {

	const data = await $fetch("https://api.tik.fail/v2/search?videoID=7297030588538686751");

	return {
		...data
	}
})