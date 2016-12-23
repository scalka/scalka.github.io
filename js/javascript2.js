$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#ul-menu',
        lockAnchors: false, /*Determines whether anchors in the URL will have any effect at all in the plugin*/
        anchors:['home', 'about', 'portfolio', 'contact'],
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['', 'About me', 'My work', 'Contact'],
        showActiveTooltip: true,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 1500, /*scrolling speed in ms*/
        autoScrolling: true,
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
        dragAndMove: false,
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
        sectionsColor : ['#ccc', '#fff'], /*colors of sections*/
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

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