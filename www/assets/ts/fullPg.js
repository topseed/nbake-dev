//load full page after routes
loadjs.ready('PRELoadB', function () {
    console.log('loading full page');
    loadjs([
        '//cdn.jsdelivr.net/npm/fullpage.js@2.9.6/dist/jquery.fullpage.css',
        '//gitcdn.xyz/repo/alvarotrigo/fullPage.js/dev/vendors/scrolloverflow.js',
        '//cdn.jsdelivr.net/npm/fullpage.js@2.9.6/dist/jquery.fullpage.js'
    ], 'fullPage', {
        async: false
    });
});
loadjs.ready('fullPage', function () {
    console.log('onFullPage');
    $('#fullpage').fullpage({
        v0erticalCentered: false,
        a0nchors: ['first', 'second', 'thirdP'],
        scrollOverflow: true,
        s0crollOverflowReset: true,
        bigSectionsDestination: top
        //paddingTop: '0em'
    });
}); //()
