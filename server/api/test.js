import { getUserVideos } from "~/utils/backend_tiktok.js";

export default defineEventHandler(async (event) => {

	const result = await getUserVideos("MS4wLjABAAAAL4SwMC2HkCB1V8GUN9EVHnye1-IMQwbte0msHk8lSSQ");
	console.log(result)
	return result
})