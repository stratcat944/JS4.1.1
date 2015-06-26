$(document).on('ready', function(){
// 	$("button").on("click", function() {
// 	console.log("This a message that will be printed to the console.");
// });

$(".msg-text").on("click", function() {
	$("body").append('<p>This is a message that will be printed in the body.</p>')
	$("body").append('<p>Holy shit I did it!</p>')
});

$(".h1-msg-text").on("click", function() {
	$("body").append('<h1>This is "some text to the body element".</h1>')
});




})

