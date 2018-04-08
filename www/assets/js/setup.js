
 // http://github.com/muicss/loadjs/issues/56

 // https://jsfiddle.net/muicss/4791kt3w
 function require(bundleIds, callbackFn) {
	bundleIds.forEach(function(bundleId) {
		if (!loadjs.isDefined(bundleId)) loadjs(bundles[bundleId], bundleId)
	})
	loadjs.ready(bundleIds, callbackFn)
}

// polyfills
if (!window.Promise) {
	/* load bundle 'promise' */
	loadjs(['//cdn.jsdelivr.net/es6-promise-polyfill/1.2.0/promise.min.js'], 'promise', {
		async: false //required due to loadjs bug with bundles
	})
}
else loadjs.done('promise') /* we already have it */

if (!window.fetch) {
	loadjs(['//cdn.jsdelivr.net/fetch/2.0.1/fetch.min.js'], 'fetch', {
		async: false //required due to loadjs bug with bundles
	})
}
else loadjs.done('fetch')

///////////////////////////////////////////////////////////////////////////////////
// ready = "when done with bundle(s)"
loadjs.ready(['promise','fetch'], function () {
	/* load bundle 'core' */
	loadjs([
		'//cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js'
		,'//cdn.jsdelivr.net/npm/signals@1.0.0/dist/signals.min.js'
		,'//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
		, '//cdn.jsdelivr.net/npm/riot@3.9.1/riot.js'
	], 'core' /* bundle ID */, {
		async: false //required due to loadjs bug with bundles
	})
})

WebFontConfig = {
	google: { families: ['Open Sans:300'] }
	, active: function() {
		loadjs.done('font') // font is active
	}
}

loadjs.ready(['core'], function () {
	WebFont.load( WebFontConfig )
	//window['SITE'] = new signals.Signal() //site events
	loadjs([ '//cdn.jsdelivr.net/npm/semantic-ui@2.3.0/dist/semantic.js'
	], 'cssJs', {
		async: false //required due to loadjs bug with bundles
	})

	loadjs.done('site') // "done with bundle 'site'", need this because we're not loading js here
})

function cssLoaded() {// called by the style sheet in layout
	console.log('css done')
	loadjs.done('css')
}

loadjs.ready(['css', 'cssJs', 'font'], function () {
	loadjs.done('style')
})

// usage: ////////////////////////////////////////////////////////////////////
loadjs.ready(['core'], function () {// load data
	console.log('core done')
})
loadjs.ready(['site'], function () {// do nav, signal is ready, but not style
	console.log('site done')
})
loadjs.ready(['style'], function () {// 'show' page, ex: unhide
	console.log('style done')
})

