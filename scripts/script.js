$(document).ready(function () {

    const pic = $('.picture');
    const name = $('#name');
    const jedi = $('.jedi');
    const sith = $('.dark-side');
    const keywords = $('.keywords');
    const shadow = $('.shadow');
    const force = $('.force');
    const linkBox = $('.link-button');
    let stateCounter = 1;
    let interval;

    const sithKeywords = ['back-end', 'darker', 'Node, Express, ...'];
    const jediKeywords = ['front-end', 'lighter', 'jQuery, React, ...'];

    pic.on('mouseenter', checkState);
    linkBox.on('mouseover', boxHovering);
    linkBox.on('mouseleave', boxLeave);
    linkBox.on('click', manageClick);

    function checkState() {
        stateCounter++;
        clearInterval(interval);
        setRotation();

        if (stateCounter % 2 === 0) {
            darkSide();
        }
        else
            lightSide();
    }

    function darkSide() {
        name.text('Darth Veka');
        pic.addClass('active');
        linkBox.addClass('dark-link');
        jedi.css('color', 'rgba(217, 212, 212, 0.5)');
        sith.css('color', '#000000');

        for (i = 0; i < keywords.length; i++) {
            keywords[i].firstChild.nodeValue = sithKeywords[i];
        }

        force.css('color', '#a7a1a1');
        shadow.css('text-shadow', '-75px 21px 1px #601919');
    };

    function lightSide() {
        name.text('Vedran Ivisic');
        pic.removeClass('active');
        linkBox.removeClass('dark-link');

        jedi.css('color', '#000000');
        sith.css('color', 'rgba(217, 212, 212, 0.5)');

        for (i = 0; i < keywords.length; i++) {
            keywords[i].firstChild.nodeValue = jediKeywords[i];
        }

        force.css('color', '#a7a1a1');
        shadow.css('text-shadow', '-75px 21px 1px #269b7a');

    };

    function boxHovering() {
        linkBox.css('box-shadow', '0px 0px 0px 5px rgb(88, 87, 87)');
    };

    function boxLeave() {
        linkBox.css('box-shadow', '0 0 0 5px rgba(217, 212, 212, 0.8)');
    };

    function manageClick() {
        window.location.href = 'http://www.google.com/';
    }

    var setRotation = function () {
        interval = setInterval(function () {
            checkState();
        }, 5000);
    };

    setRotation();
});