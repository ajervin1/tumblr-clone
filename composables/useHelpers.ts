export const useHelpers = () => {
	function sayHello(msg) {
		alert(msg)
	}
	return {
		sayHello,
	}
}