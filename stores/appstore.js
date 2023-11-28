import { defineStore } from "pinia";

const useAppStore = defineStore('app', () => {
	const count = ref(0)
	const data = ref(null);
	const doubleCount = computed(() => count.value * 2)

	async function getHashTag(  ) {
		const { data:res, pending, error, refresh } = await useAsyncData(
			'tiktoks',
			() => {
				count.value += 1;
				return $fetch("/api/hashtag", {
					params: {
						hashtagName: "fyp",
						cursor: 0
					}
				})
			}
		);
		data.value = res.value
	}
	function increment() {
		count.value+= 1;
	}

	function setData( newData ) {
		data.value = newData;
	}

	return { data, count, increment, setData, getHashTag }
})
//
// if (import.meta.hot) {
// 	import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
// }
export default useAppStore;