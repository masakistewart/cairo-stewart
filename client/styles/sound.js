SC.initialize({
	client_id: "6f251164bbcbfb93404828369e8c2e2b"
})

SC.oEmbed("https://soundcloud.com/cairo-stewart/likes", {
	element: document.getElementById('target')
}).then(function(embed) {
	console.log(embed)
})