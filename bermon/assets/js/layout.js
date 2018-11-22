$(function () {

    var Photo = (function () {

        // list of thumbs
        var $list = $('#pe-thumbs'),
            // the images
            $elems = $list.find('img'),
            // maxScale : maximum scale value the image will have
            // minOpacity / maxOpacity : minimum (set in the CSS) and maximum values for the image's opacity
            settings = {
                maxScale: 1.4,
                maxOpacity: 0.9,
                minOpacity: Number($elems.css('opacity'))
            },
            init = function () {

                // minScale will be set in the CSS
                settings.minScale = _getScaleVal() || 1;
                _initEvents();

            },
            // Get Value of CSS Scale through JavaScript:
            // http://css-tricks.com/get-value-of-css-rotation-through-javascript/
            _getScaleVal = function () {

                var st = window.getComputedStyle($elems.get(0), null),
                    tr = st.getPropertyValue("-webkit-transform") ||
                        st.getPropertyValue("-moz-transform") ||
                        st.getPropertyValue("-ms-transform") ||
                        st.getPropertyValue("-o-transform") ||
                        st.getPropertyValue("transform") ||
                        "fail...";

                if (tr !== 'none') {

                    var values = tr.split('(')[1].split(')')[0].split(','),
                        a = values[0],
                        b = values[1],
                        c = values[2],
                        d = values[3];

                    return Math.sqrt(a * a + b * b);

                }

            },
            _initEvents = function () {

                // the proximity event
                $elems.on('proximity.Photo', { max: 80, throttle: 10, fireOutOfBounds: true }, function (event, proximity, distance) {

                    var $el = $(this),
                        $li = $el.closest('li'),
                        scaleVal = proximity * (settings.maxScale - settings.minScale) + settings.minScale,
                        scaleExp = 'scale(' + scaleVal + ')';

                    // change the z-index of the element once it reaches the maximum scale value
                    (scaleVal === settings.maxScale) ? $li.css('z-index', 1000) : $li.css('z-index', 1);

                    $el.css({
                        '-webkit-transform': scaleExp,
                        '-moz-transform': scaleExp,
                        '-o-transform': scaleExp,
                        '-ms-transform': scaleExp,
                        'transform': scaleExp,
                        'opacity': (proximity * (settings.maxOpacity - settings.minOpacity) + settings.minOpacity)
                    });

                });

            }

        return {
            init: init
        };

    })();

    Photo.init();

});