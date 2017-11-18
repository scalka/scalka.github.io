function resetSlides() {
    if ($(window).width() < 560){
        $(".mySlide").removeClass('slide');
    }
    console.log("rese");
}

window.addEventListener("resize", resetSlides());


$(document).ready(function() {
    resetSlides();
    // cones
    /*var canvas = document.getElementById("canvas");
	var ctxt = canvas.getContext("2d");
	var container = $(canvas).parent();*/
	var canvas = $('#canvas');
	var ctxt = canvas.get(0).getContext("2d");
	var container = $('#home-section');
    var name_border = $('#name-border');
    
	respondCanvas();
	//cones(ctxt);
	// run function when browser resizes
	$(window).resize(respondCanvas);
    //$(window).resize(respondSlides);

	function respondCanvas(){
        var contW = container.width() ;
        var nameW = name_border.width();
        var canvasW = contW - nameW;
        if (nameW > 260){
            canvas.attr('width', $(container).width()); // max width
            canvas.attr('height', canvasW );// max height   
        } else if ( nameW <= 260) {
            canvas.attr('width', $(container).width()); // max width
            canvas.attr('height', 500 );// max height   
        } 
    }

    $('#fullpage').fullpage({
        //Navigation
        menu: '#ul-menu',
        lockAnchors: false, /*Determines whether anchors in the URL will have any effect at all in the plugin*/
        anchors:['home', 'about', 'experience', 'abilities', 'portfolio', 'contact'],
        navigation: false,
        navigationPosition: 'left',
        //navigationTooltips: ['', 'About me', 'My work', 'Contact'],
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 1500, /*scrolling speed in ms*/
        autoScrolling: false,
        fitToSection: true, /*fit to viewport*/
        fitToSectionDelay: 1000,
        scrollBar: false,
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false, /*Defines whether scrolling up in the first section should scroll to the last one or not*/
        loopHorizontal: true, /*slides looping*/
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#header',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true, /*arrows change slides*/
        verticalCentered: true, /*centering content*/
        sectionsColor : ['#fff'], /*colors of sections*/
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 900,
        responsiveHeight: 900,
        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });

});
