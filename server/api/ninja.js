export default defineEventHandler(async (event) => {

	const data = await $fetch("https://jsonplaceholder.typicode.com/todos/2");

	return {
		...data
	}
})