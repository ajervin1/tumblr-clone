import { defineStore } from "pinia";

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		count: 0
	}),
	actions: {
		increase(){
			this.count += 1;
		}
	}
});
export default useStore;