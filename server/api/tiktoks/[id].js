export default defineEventHandler((event) => {
	const id = getRouterParam(event, 'id')

	return `Hello, ${id}!`
})