function resetSlides() {
  if ($(window).width() < 560) {
    $(".mySlide").removeClass('slide');
  }
}

window.addEventListener("resize", resetSlides());


function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(document).ready(function() {

  /*highligh headings on scroll*/
  $(window).scroll(function() {
    $('mark').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('highlighted')
      }
    });
  });

  resetSlides();

  //cones(ctxt);
  // run function when browser resizes
  //$(window).resize(respondCanvas);
  //$(window).resize(respondSlides);
  //}

  $('#fullpage').fullpage({
    //Navigation
    menu: '#ul-menu',
    lockAnchors: false,
    /*Determines whether anchors in the URL will have any effect at all in the plugin*/
    anchors: ['home', 'about', 'experience', 'abilities', 'portfolio', 'contact'],
    navigation: false,
    navigationPosition: 'left',
    //navigationTooltips: ['', 'About me', 'My work', 'Contact'],
    slidesNavigation: true,
    slidesNavPosition: 'bottom',

    //Scrolling
    css3: true,
    scrollingSpeed: 1500,
    /*scrolling speed in ms*/
    autoScrolling: true,
    fitToSection: true,
    /*fit to viewport*/
    fitToSectionDelay: 1000,
    scrollBar: true,
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    /*Defines whether scrolling up in the first section should scroll to the last one or not*/
    loopHorizontal: true,
    /*slides looping*/
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: '#header',
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    bigSectionsDestination: null,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    /*arrows change slides*/
    verticalCentered: true,
    /*centering content*/
    sectionsColor: ['#fff'],
    /*colors of sections*/
    paddingTop: '3em',
    paddingBottom: '10px',
    fixedElements: '#header',
    responsiveWidth: 900,
    responsiveHeight: 900,
    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    //events
    onLeave: function(index, nextIndex, direction) {},
    afterLoad: function(anchorLink, index) {},
    afterRender: function() {},
    afterResize: function() {},
    afterResponsive: function(isResponsive) {},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {},
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {}
  });

  $('mark').first().addClass('highlighted');
});
