/*
	Transitive by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/


function myFunction() {
    
    	document.getElementById("demo").innerHTML = Date();
    
}

function addTwoNumber() {
    var a = document.getElementById("demo_0").value;
    var b = document.getElementById("demo_1").value;
    var x = Number(a) + Number(b);
/*
    document.getElementById("demo").innerHTML = "Add Value: " + x;
*/

    if (a > b) {
        y = "Number 1 is greater than number 2";
    } else if (a == b) {
        y = "Number 1 is equal to number 2";
    } else {
        y = "Number 1 is less than number 2";
    }
/*
    document.getElementById("demo1").innerHTML = "This is true: " + y;
*/
}

function frequency() {
    var a = document.getElementById("demo_0").value;
    var b = document.getElementById("demo_1").value;
    var x = Number(a) + Number(b);
/*
    document.getElementById("demo").innerHTML = "Add Value: " + x;
*/

    if (a >= 45) {
        freq = true;
    } else if (b >= 15) {
        freq = true;
    } else {
        freq = false;
    }

/*
    document.getElementById("demo2").innerHTML = "Meets Criteria: " + freq;
*/
}

function senslight() {
    var a3 = document.getElementById("Radio4").checked;
    var b3 = document.getElementById("Radio5").checked;
    var c3 = document.getElementById("Radio6").checked;
    var d3 = document.getElementById("Radio7").checked;

    if (d3 == true || c3 == true) {
        q3 = true;
    } else {
        q3 = false;
    }

    /*
    	document.getElementById("demo3").innerHTML = "Meets Criteria: " + q3;	
    */
}

function senssound() {
    var a4 = document.getElementById("Radio8").checked;
    var b4 = document.getElementById("Radio9").checked;
    var c4 = document.getElementById("Radio10").checked;
    var d4 = document.getElementById("Radio11").checked;

    if (d4 == true || c4 == true) {
        q4 = true;
    } else {
        q4 = false;
    }

    /*
    	document.getElementById("demo4").innerHTML = "Meets Criteria: " + q4;	
    */
}

function painmodsev() {
    var a5 = document.getElementById("Radio12").checked;
    var b5 = document.getElementById("Radio13").checked;
    var c5 = document.getElementById("Radio14").checked;
    var d5 = document.getElementById("Radio15").checked;

    if (d5 == true || c5 == true) {
        q5 = true;
    } else {
        q5 = false;
    }

    /*
    	document.getElementById("demo5").innerHTML = "Meets Criteria: " + q5;	
    */
}

function nausea() {
    var a6 = document.getElementById("Radio16").checked;
    var b6 = document.getElementById("Radio17").checked;
    var c6 = document.getElementById("Radio18").checked;
    var d6 = document.getElementById("Radio19").checked;

    if (d6 == true || c6 == true) {
        q6 = true;
    } else {
        q6 = false;
    }

    /*
    	document.getElementById("demo6").innerHTML = "Meets Criteria: " + q6;	
    */
}

function symptoms() {
    senslight()
    senssound()
    painmodsev()
    nausea()
    if (q3 == true && q4 == true && q5 == true) {
        sympt = true
    } else if (q5 == true && q6 == true) {
        sympt = true
    } else {
        sympt = false
    }
}

function medications() {
    var a = document.getElementById("demo_3").value;
    var b = document.getElementById("demo_4").value;

    if (a >= 10) {
        meds = true;
    } else if (b >= 10) {
        meds = true;
    } else {
        meds = false;
    }

    /*
    	document.getElementById("demo7").innerHTML = "Meets Criteria: " + meds;	
    */
}

function activities() {
    var a = document.getElementById("demo_5").value;
    var b = document.getElementById("demo_6").value;

    if (a >= 10) {
        act = true;
    } else if (b >= 10) {
        act = true;
    } else {
        act = false;
    }

    /*
    	document.getElementById("demo8").innerHTML = "Meets Criteria: " + act;	
    */
}

function plans1() {
    var a7 = document.getElementById("Radio20").checked;
    var b7 = document.getElementById("Radio21").checked;
    var c7 = document.getElementById("Radio22").checked;
    var d7 = document.getElementById("Radio23").checked;

    if (d7 == true) {
        q7 = true;
    } else {
        q7 = false;
    }

    /*
    	document.getElementById("demo9").innerHTML = "Meets Criteria: " + q7;	
    */
}

function plans2() {
    var a8 = document.getElementById("Radio24").checked;
    var b8 = document.getElementById("Radio25").checked;
    var c8 = document.getElementById("Radio26").checked;
    var d8 = document.getElementById("Radio27").checked;

    if (d8 == true) {
        q8 = true;
    } else {
        q8 = false;
    }

    /*
    	document.getElementById("demo10").innerHTML = "Meets Criteria: " + q8;	
    */
}

function plans() {
    plans1()
    plans2()
    if (q7 == true || q8 == true) {
        plan = true
    } else {
        plan = false
    }
}

function calculate() {

    frequency()
    symptoms()
    medications()
    activities()
    plans()

    document.getElementById("demofreq").innerHTML = "Frequency Meets Criteria: " + freq;
    document.getElementById("demosympt").innerHTML = "Symptoms Meet Criteria: " + sympt;
    document.getElementById("demomed").innerHTML = "Medications Meet Criteria: " + meds;
    document.getElementById("demoact").innerHTML = "Activities Meet Criteria: " + act;
    document.getElementById("demoplan").innerHTML = "Plans Meet Criteria: " + plan;


    if (freq == true && sympt == true) {
        cm = "may"
    } else if (meds == true && act == true && plan == true) {
        cm = "may"
    } else {
        cm = "may not"
    }
    document.getElementById("demo11").innerHTML = "You " + cm + " have Chronic Migraine.";
}

(function ($) {

    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    $(function () {

        var $window = $(window),
            $body = $('body'),
            $header = $('#header'),
            $banner = $('#banner');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function () {
            window.setTimeout(function () {
                $body.removeClass('is-loading');
            }, 100);
        });

        // Prioritize "important" elements on medium.
        skel.on('+medium -medium', function () {
            $.prioritize(
                '.important\\28 medium\\29',
                skel.breakpoint('medium').active
            );
        });

        // Fix: Placeholder polyfill.
        $('form').placeholder();

        // Header.
        if (skel.vars.IEVersion < 9)
            $header.removeClass('alt');

        if ($banner.length > 0 &&
            $header.hasClass('alt')) {

            $window.on('resize', function () {
                $window.trigger('scroll');
            });

            $banner.scrollex({
                bottom: $header.outerHeight(),
                terminate: function () {
                    $header.removeClass('alt');
                },
                enter: function () {
                    $header.addClass('alt');
                },
                leave: function () {
                    $header.removeClass('alt');
                    $header.addClass('reveal');
                }
            });

        }

        // Banner.

        if ($banner.length > 0) {

            // IE fix.
            if (skel.vars.IEVersion < 12) {

                $window.on('resize', function () {

                    var wh = $window.height() * 0.60,
                        bh = $banner.height();

                    $banner.css('height', 'auto');

                    window.setTimeout(function () {

                        if (bh < wh)
                            $banner.css('height', wh + 'px');

                    }, 0);

                });

                $window.on('load', function () {
                    $window.triggerHandler('resize');
                });

            }

            // Video check.
            var video = $banner.data('video');

            if (video)
                $window.on('load.banner', function () {

                    // Disable banner load event (so it doesn't fire again).
                    $window.off('load.banner');

                    // Append video if supported.
                    if (!skel.vars.mobile &&
                        !skel.breakpoint('large').active &&
                        skel.vars.IEVersion > 9)
                        $banner.append('<video autoplay loop><source src="' + video + '.mp4" type="video/mp4" /><source src="' + video + '.webm" type="video/webm" /></video>');

                });

            // More button.
            $banner.find('.more')
                .addClass('scrolly');

        }

        // Scrolly.
        if ($(".scrolly").length) {

            var $height = $('#header').height() * 0.95;

            $('.scrolly').scrolly({
                offset: $height
            });
        }

        // Menu.
        $('#menu')
            .append('<a href="#menu" class="close"></a>')
            .appendTo($body)
            .panel({
                delay: 500,
                hideOnClick: true,
                hideOnSwipe: true,
                resetScroll: true,
                resetForms: true,
                side: 'right'
            });

    });

})(jQuery);
