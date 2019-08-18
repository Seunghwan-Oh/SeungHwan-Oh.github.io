$(document.body).ready(() => {
    new WOW().init();

    // $("#menu li").click(function() {
    //     var offset = $($(this).attr('data-target')).offset();
    //     $("html, body").animate({
    //           scrollTop: offset.top
    //     }, 1000);
    // });

    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        anchors: ['firstPage', 'secondPage', 'thirdPage'],
        menu: '#menu',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Profile?', 'Personal Training', 'Program'],
        scrollingSpeed: 1000,
        autoScrolling: true,
        fadingEffect: true,
        scrollOverflow: true,
        scrollOverflowReset: true,
        afterLoad: function(origin, destination, direction) {

        },
        onLeave: function(origin, destination, direction) {

        }
    });
});

$('#moreOhora').click((e) => {
    e.preventDefault();
    location.href = "ohora.html";
});

$('#moreCaps').click((e) => {
    e.preventDefault();
    location.href = "ddockdi.html";
});

$('#moreEtc').click((e) => {
    e.preventDefault();
    location.href = "etc.html";
})

