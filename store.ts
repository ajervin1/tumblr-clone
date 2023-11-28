
import {defineStore} from "pinia";

const baseUrl = "https://api.tik.fail/v2/search"
const useStore = defineStore('state', {
	state: () => ({
		term: "iamoliviaponton",
		data: null,
		tiktoks: [],
		tiktok: null,
		cursor: 0,
		count: 0
	}),
	getters: {
		pagination: (state) => {
			if (state.data) {
				return state.data.lookup.pagination
			}
			
		},
		total(state) {
			if (state.data) {
				return state.data.total
			}
			
		},
		itemList(state) {
			if (state.data) {
				return state.data.itemList;
			}
		}
	},
	actions: {
		async initial(hashtagName = "foryou", cursor = 0){
			const {data:res, error} = await useAsyncData('tiktoks', () => {
				// This code runs on server
				
				this.count += 1;
				return $fetch('/api/hashtag', {
					params: {
						hashtagName,
						cursor,
					}
				});
			});

			this.data = res.value;
		},
		async searchByHashtag(hashtagName = 'foryou', cursor = 0) {
			console.log("Hashtag function running")
			
			const {data} = await useFetch('/api/hashtag', {
				params: {
					hashtagName,
					cursor,
				}
			});
			console.log(this.count)
			this.count = this.count + 1;
			
			// If user wants to load more items
			if (cursor > 0) {
				this.data = data.value;
				this.tiktoks = [...this.tiktoks, ...data.value.itemList];
			} else {
				// Initial Load
				this.data = data.value;
				this.tiktoks = data.value.itemList;
			}
		},
		async searchByUsername(username = 'avajustin', cursor = 0) {
			const {data} = await useFetch('/api/users', {
				params: {
					username,
					cursor,
				}
				
			})
			
			// If user wants to load more items
			if (cursor > 0) {
				this.data = data.value;
				this.tiktoks = [...this.tiktoks, ...data.value.itemList];
			} else {
				// Initial Load
				this.data = data.value;
				this.tiktoks = data.value.itemList;
			}
		},
		async searchByMusicTitle(musicTitle = 'akon', cursor = 0) {
			const {data} = await useFetch('/api/music', {
				params: {
					musicTitle,
					cursor,
				}
			})
			
			// If user wants to load more items
			if (cursor > 0) {
				this.data = data.value;
				this.tiktoks = [...this.tiktoks, ...data.value.itemList];
			} else {
				// Initial Load
				this.data = data.value;
				this.tiktoks = data.value.itemList;
			}
		},
		async fetchTikTokById(videoId = '7300945885695954206',) {
			const {data} = await useFetch(`/api/tiktoks/${videoId}`, {})
			if (data.value) {
				this.tiktok = data.value
			}
		},

		
	},
});
export default useStore;