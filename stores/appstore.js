import { defineStore } from "pinia";

const useAppStore = defineStore('app', () => {
	// State
	// Needed For Search Form
	const term = ref('iamoliviaponton');
	// Result of TikTok Api call
	const result = ref(null);
	const tiktoks = ref([]);
	const cursor = ref(0);
	const total = ref(0);
	const pagination = ref(null);
	// Single TikTok API Call
	const tiktok = ref(null);

	// Computed Properties
	const nextCursor = computed(() => pagination.value.nextCursor);
	const lastCursor = computed(() => pagination.value.lastCursor);

	// Methods
	async function searchByHashTag( hashtagName = 'fyp', newCursor = 0 ) {
		const { data, error } = await useAsyncData('hashtag', () => {
				cursor.value = cursor.value + 9;
				return $fetch("/api/hashtag", {
					params: {
						hashtagName,
						cursor: newCursor,
					}
				})
			}
		);
		const { itemList, lookup } = data.value;
		// First Call
		if ( lookup.pagination.cursor === 0 ) {
			total.value = data.value.total;
			result.value = data.value;
			tiktoks.value = itemList;
			pagination.value = lookup.pagination;
		} else {
			result.value = data.value;
			tiktoks.value = [ ...tiktoks.value, ...itemList ];
			pagination.value = lookup.pagination
		}
	}

	async function searchByUsername( username = 'avajustin', newCursor = 0 ) {
		const { data, error } = await useAsyncData('username', () => {
				return $fetch("/api/users", {
					params: {
						username,
						cursor: newCursor,
					},


				})
			}
		);
		const { itemList, lookup } = data.value;
		// First Call
		if ( lookup.pagination.cursor === 0 ) {
			total.value = data.value.total;
			result.value = data.value;
			tiktoks.value = itemList;
			pagination.value = lookup.pagination;
		} else {
			result.value = data.value;
			tiktoks.value = [ ...tiktoks.value, ...itemList ];
			pagination.value = lookup.pagination
		}
	}

	async function searchByMusicTitle( musicTitle = 'akon', newCursor = 0 ) {
		const { data, error } = await useAsyncData('music', () => {
				cursor.value = cursor.value + 9;
				return $fetch("/api/music", {
					params: {
						musicTitle,
						cursor: newCursor,
					}
				})
			}
		);
		const { itemList, lookup } = data.value;
		// First Call
		if ( lookup.pagination.cursor === 0 ) {
			total.value = data.value.total;
			result.value = data.value;
			tiktoks.value = itemList;
			pagination.value = lookup.pagination;
		} else {
			result.value = data.value;
			tiktoks.value = [ ...tiktoks.value, ...itemList ];
			pagination.value = lookup.pagination
		}
	}

	async function fetchTikTokById( videoId = "7300945885695954206" ) {
		const { data, error } = await useAsyncData('tiktok', () => {
				return $fetch(`/api/tiktoks/${ videoId }`,)
			}
		);
		// First Call
		tiktok.value = data.value;
	}


	return {
		// State variables
		result,
		lastCursor,
		term,
		total,
		pagination,
		tiktoks,
		nextCursor,
		tiktok,
		cursor,
		// Functions or actions
		searchByHashTag,
		searchByUsername,
		searchByMusicTitle,
		fetchTikTokById,
	}
})

if ( import.meta.hot ) {
	import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
export default useAppStore;