function upper(strings,...values) {
	let result = "";
	for(let i = 0; i < strings.length; i++){
		if(i > 0){
			result += String(values[i-1]).toUpperCase();
		}
		result += strings[i];
	}
	return result;
}

var name = "kyle",
	twitter = "getify",
	topic = "JS Recent Parts";

console.log(
	upper`Hello ${name} (@${twitter}), welcome to ${topic}!` ===
	"Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
);

// String array will always have one more value in it than the value array would have.