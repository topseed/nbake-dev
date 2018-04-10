//load full page: this is why async: false in setup
loadjs.ready('site', function () {
	console.log('loading full page')
	loadjs([
		'//cdn.jsdelivr.net/npm/fullpage.js@2.9.6/dist/jquery.fullpage.css',
		'//gitcdn.xyz/repo/alvarotrigo/fullPage.js/dev/vendors/scrolloverflow.js',
		'//cdn.jsdelivr.net/npm/fullpage.js@2.9.6/dist/jquery.fullpage.js'
	], 'fullPage', {
		async: false
	})
})

loadjs.ready('fullPage', function () {
	console.log('onFullPage')
	$('#fullPage').fullpage({
		scrollOverflow: true,
		bigSectionsDestination: top
	 })
})//()
