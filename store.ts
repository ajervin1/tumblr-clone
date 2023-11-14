// @ts-nocheck
import { defineStore } from "pinia";
const baseUrl = "https://api.tik.fail/v2/search"
const useStore = defineStore('state', {
	state: () => ({
		term: "iamoliviaponton",
		data: null,
		tiktoks: [],
		tiktok: null,
		cursor: 0,
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
		async initFunction(){
			const {data} = await useFetch("https://api.tik.fail/v2/search?usernames=avajustin&cursor=8&sortBy=date&legacySearch=true", {
				server: true
			});
			console.log(data.value);
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
			// If user wants to load more items
			if (cursor > 0){
				this.data = data.value;
				this.tiktoks = [...this.tiktoks, ...data.value.itemList];
			} else {
				// Initial Load
				this.data = data.value;
				this.tiktoks = data.value.itemList;
			}
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
			// If user wants to load more items
			if (cursor > 0){
				this.data = data.value;
				this.tiktoks = [...this.tiktoks, ...data.value.itemList];
			} else {
				// Initial Load
				this.data = data.value;
				this.tiktoks = data.value.itemList;
			}
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
			// If user wants to load more items
			if (cursor > 0){
				this.data = data.value;
				this.tiktoks = [...this.tiktoks, ...data.value.itemList];
			} else {
				// Initial Load
				this.data = data.value;
				this.tiktoks = data.value.itemList;
			}
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