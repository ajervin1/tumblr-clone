// @ts-nocheck
import { defineStore } from "pinia";
const baseUrl = "https://api.tik.fail/v2/search"
const useStore = defineStore('state', {
	state: () => ({
		term: "avajustin",
		data: null,
		tiktoks: [],
		tiktok: null,
	}),
	getters: {
		pagination: (state) => {
			if (state.data){
				return state.data.lookup.pagination
			}
		
		},
		total(state){
			if (state.data){
				return state.data.total
			}
		
		},
		itemList(state){
			if (state.data){
				return state.data.itemList;
			}
		}
	},
	actions: {
		setTerm(newTerm){
			this.term = newTerm;
		},
		async searchByUsername(username = 'avajustin', cursor = 0){
			const {data} = await useAsyncData('user-result', () => {
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
		async searchByHashtag(hashtagName = 'foryou', cursor = 0){
			const {data} = await useAsyncData('hashtag-result', () => {
				return $fetch(baseUrl, {
					params: {
						hashtagName,
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
		async searchByMusicTitle(musicTitle = 'akon', cursor = 0){
			const {data} = await useAsyncData('music-result', () => {
				return $fetch(baseUrl, {
					params: {
						musicTitle,
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
		async fetchTikTokById(videoId = "7300945885695954206",){
			const {data} = await useAsyncData('single-tiktok', () => {
				return $fetch(baseUrl, {
					params: {
						videoID: videoId,
						legacySearch: true,
					},
				})
			});
			if ( data.value ){
				this.tiktok = data.value
			}
		},
		
	},
});
export default useStore