var xMouse;
var yMouse;
var ax = 0;
var ay = 0;
var vx = 0;
var vy = 0;
var force= 0.01;
var angle;

$(document).ready(function() {
	
    // cones
    /*var canvas = document.getElementById("canvas");
	var ctxt = canvas.getContext("2d");
	var container = $(canvas).parent();*/
	var canvas = $('#canvas');
	var ctxt = canvas.get(0).getContext("2d");
	var container = $('#home-section');
    var name_border = $('#name-border');
	respondCanvas();
	cones(ctxt);
	// run function when browser resizes
	$(window).resize(respondCanvas);
		function respondCanvas(){
			canvas.attr('width', $(container).width()); // max width
			//canvas.attr('height', ($(container).height())-($(name_border).height) );// max height	
			cones(ctxt);
		}

    $('#fullpage').fullpage({
        //Navigation
        menu: '#ul-menu',
        lockAnchors: false, /*Determines whether anchors in the URL will have any effect at all in the plugin*/
        anchors:['home', 'about', 'portfolio', 'contact'],
        navigation: true,
        navigationPosition: 'left',
        //navigationTooltips: ['', 'About me', 'My work', 'Contact'],
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
        sectionsColor : ['#312783', '#39b477', '#fff', '#e1465d'], /*colors of sections*/
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 900,
        responsiveHeight: 900,
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

function cones(ctxt) {

	var canvasWidth = canvas.width;
	var canvasHeight = canvas.height;
	var canvesquarter = canvasWidth/6 + 0;

	var cone1 = new Cone();
		cone1.x = canvesquarter;
		cone1.y = canvasHeight/2 + 30;
	var cone2 = new Cone();
		cone2.x = canvesquarter*2;
		cone2.y = canvasHeight/2 + 30;

	var cone3 = new Cone();
		cone3.x = canvesquarter*3;
		cone3.y = canvasHeight/2 + 30;

	var cone4 = new Cone();
		cone4.x = canvesquarter*4 ;
		cone4.y = canvasHeight/2 + 30;			

		cone1.draw(ctxt);
		cone2.draw(ctxt);
		cone3.draw(ctxt);
		cone4.draw(ctxt);

	window.onmousemove = function (){
		// clear canvas each onmousemove
			ctxt.clearRect(0, 0, canvasWidth, canvasHeight);
			// mouse coordinates relative to the top left corner of the browser window’s client area
			xMouse = event.clientX;
			yMouse = event.clientY;
			// dx dy - difference between x,y of arrow and x,y of mouse 
			var dx = xMouse - cone1.x ;
			var dy = yMouse - cone1.y ;
			angle =  Math.atan2(dy, dx);
			cone1.rotation = angle;
			cone1.draw(ctxt);

			var dx = xMouse - cone2.x ;
			var dy = yMouse - cone2.y ;
			angle =  Math.atan2(dy, dx);
			cone2.rotation = angle;
			cone2.draw(ctxt);


			var dx = xMouse - cone3.x ;
			var dy = yMouse - cone3.y ;
			angle =  Math.atan2(dy, dx);
			cone3.rotation = angle;
			cone3.draw(ctxt);

			var dx = xMouse - cone4.x ;
			var dy = yMouse - cone4.y ;
			angle =  Math.atan2(dy, dx);
			cone4.rotation = angle;
			cone4.draw(ctxt);
		}	
}

