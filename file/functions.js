

// // variables
// var $win = $(window);
// var clientWidth = $win.width();
// var clientHeight = $win.height();

// $(window).resize(function() {
//     var newWidth = $win.width();
//     var newHeight = $win.height();
//     if (newWidth != clientWidth && newHeight != clientHeight) {
//         location.replace(location);
//     }
// });

// (function($) {
//     $.fn.typewriter = function() {
//         this.each(function() {
//             var $ele = $(this), str = $ele.html(), progress = 0;
//             $ele.html('');
//             var timer = setInterval(function() {
//                 var current = str.substr(progress, 1);
//                 if (current == '<') {
//                     progress = str.indexOf('>', progress) + 1;
//                 } else {
//                     progress++;
//                 }
//                 $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
//                 if (progress >= str.length) {
//                     clearInterval(timer);
//                 }
//             }, 75);
//         });
//         return this;
//     };
// })(jQuery);

// // ✅ UPDATED → countdown instead of elapsed time
// function timeElapse(targetDate){
//     var now = new Date();
//     var seconds = (Date.parse(targetDate) - Date.parse(now)) / 1000;

//     if (seconds <= 0) {
//         seconds = 0;
//     }

//     var days = Math.floor(seconds / (3600 * 24));
//     seconds = seconds % (3600 * 24);

//     var hours = Math.floor(seconds / 3600);
//     if (hours < 10) hours = "0" + hours;

//     seconds = seconds % 3600;

//     var minutes = Math.floor(seconds / 60);
//     if (minutes < 10) minutes = "0" + minutes;

//     var result = days + " days " + hours + " hours " + minutes + " minutes";
//     $("#clock").html(result);
// }


function timeElapse(targetDate){
    var now = new Date();
    var seconds = (Date.parse(targetDate) - Date.parse(now)) / 1000;

    if (seconds <= 0) {
        seconds = 0;
    }

    var days = Math.floor(seconds / (3600 * 24));
    seconds = seconds % (3600 * 24);

    var hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;

    var minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);

    // format
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    var result = 
        "<span class='num'>" + days + "</span> <span class='label'>days</span> " +
        "<span class='num'>" + hours + "</span> <span class='label'>hours</span> " +
        "<span class='num'>" + minutes + "</span> <span class='label'>minutes</span> " +
        "<span class='num'>" + seconds + "</span> <span class='label'>seconds</span>";

    $("#clock").html(result);
}

(function ($) {
    $.fn.typewriter = function () {
        this.each(function () {
            var $el = $(this);
            var html = $el.html();
            var i = 0;
            var result = "";

            $el.html("");

            var timer = setInterval(function () {
                var char = html.charAt(i);

                if (char === "<") {
                    // copy full HTML tag at once
                    var tagEnd = html.indexOf(">", i);
                    result += html.substring(i, tagEnd + 1);
                    i = tagEnd + 1;
                } else {
                    result += char;
                    i++;
                }

                $el.html(result + (i % 2 === 0 ? "_" : "")); // blinking cursor

                if (i >= html.length) {
                    clearInterval(timer);
                    $el.html(result); // remove cursor at end
                }
            }, 80); // smooth speed
        });
        return this;
    };
})(jQuery);