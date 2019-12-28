function upper(strings,...values) {}

var name = "kyle",
	twitter = "getify",
	topic = "JS Recent Parts";

console.log(
	`Hello ${name.toUpperCase()} (@${twitter.toUpperCase()}), welcome to ${topic.toUpperCase()}!` ===
	"Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
);
