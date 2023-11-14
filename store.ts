// @ts-nocheck
import { defineStore } from "pinia";
const baseUrl = "https://api.tik.fail/v2/search"
const useStore = defineStore('todos', {
	state: () => ({
		data: null,
		tiktoks: [],
		tiktok: null,
	}),
	getters: {
		pagination: (state) => {
			return state.data.lookup.pagination
		},
		total(state){
			return state.data.total
		},
		itemList(state){
			return state.data.itemList;
		}
	},
	actions: {
		async fetchTodos() {
			const { data } = await useFetch('https://jsonplaceholder.typicode.com/todos');
			console.log(data)
			if (data.value) {
			
				this.todos = data.value;
			}
		},
		async searchByUsername(username = 'avajustin', cursor = 0){
			const {data} = await useAsyncData('search-result', () => {
				return $fetch(baseUrl, {
					params: {
						usernames: username,
						cursor,
						sortBy: "date",
						legacySearch: true,
					}
				})
			});
			
			if ( data.value ){
				this.data = data.value
			}
			return data;
		},
		async fetchByHashtag(hashtagID = 'foryou', cursor = 0){
			const {data} = await useAsyncData('search-result', () => {
				return $fetch(baseUrl, {
					params: {
						hashtagId: username,
						cursor,
						sortBy: "date",
						legacySearch: true,
					}
				})
			});
			
			if ( data.value ){
				this.data = data.value
			}
			return data;
		},
		async fetchByMusicId(musicID = "7300945885695954206", cursor = 0){
			const {data} = await useAsyncData('single-tiktok', () => {
				return $fetch(baseUrl, {
					params: {
						musicID,
						cursor,
						sortBy: "date",
						legacySearch: true
					}
				})
			});
			if ( data.value ){
				this.tiktok = data.value
			}
			return data;
		},
		async fetchTikTokById(videoId = "7300945885695954206", cursor = 0){
			const {data} = await useAsyncData('single-tiktok', () => {
				return $fetch(baseUrl, {
					params: {
						videoID: videoId,
					},
				})
			});
			if ( data.value ){
				this.tiktok = data.value
			}
			return data;
		},

		
	},
});
export default useStore