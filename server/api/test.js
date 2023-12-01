
export default defineEventHandler(async (event) => {
	const result = await $fetch("https://kick.com/api/v2/clips?cursor=0&sort=view&time=week");
	console.log(result)
	return result
})