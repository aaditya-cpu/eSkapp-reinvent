// $("p").on("mouseover", function() {
//     $(this).css("color", "red");
// });


$(document).ready(function() {
    console.log('triggered!')
    if (screen.width > 500) {
        var screenSize = window.innerWidth;
        screenSized = -(screenSize / 2);
        console.log('triggeresd!' + screenSize + "Value: " + screenSized);
        anime({
            targets: '.cloudone',
            translateX: function() { return [screenSized + '%', anime.random(40, 75) + '%']; },
            direction: 'alternate',
            easing: 'easeInOutQuad',
            duration: 3000,
            delay: anime.stagger(dice),
            loop: true
        });
        anime({
            targets: '.cloudtwo',

            translateX: function() { return [screenSized + '%', anime.random(45, -(screenSized)) + '%']; },
            duration: 5000,
            delay: anime.stagger(dice),
            easing: 'easeInOutQuad',
            direction: 'alternate',
            loop: true
        });
        anime({
            targets: '.cloudthree',

            translateX: function() { return [screenSized + '%', anime.random(40, 80) + '%']; },
            duration: 5000,
            delay: anime.stagger(dice),
            easing: 'easeInOutQuad',
            direction: 'alternate',
            loop: true
        });
        anime({
            targets: '.cloudfour',

            translateX: function() { return [screenSized + '%', anime.random(40, 75) + '%']; },
            duration: 5000,
            delay: anime.stagger(dice),
            easing: 'easeInOutQuad',
            direction: 'alternate',
            loop: true
        });
        anime({
            targets: '.cloudfive',

            translateX: function() { return [screenSized + '%', anime.random(10, 65) + '%']; },
            duration: 5000,
            delay: anime.stagger(dice),
            easing: 'easeInOutQuad',
            direction: 'alternate',
            loop: true
        });
    } else {
        anime({
            targets: '.cloudskyone',
            translateX: ['-100', '80'],
            direction: 'alternate',
            easing: 'easeInOutQuad',
            duration: 3000,
            delay: anime.stagger(dice),
            loop: true
        });
        anime({
            targets: '.cloudskytwo',
            translateX: ['-30', '50'],
            duration: 5000,
            delay: anime.stagger(dice),
            easing: 'easeInOutQuad',
            direction: 'alternate',
            loop: true
        });
    }
});

// function checkScreen() {

// }

function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
var dice = randomIntBetween(1, 90);
var dura = randomIntBetween(5, 10) * 100;
var animeeffect = randomIntBetween(1, 3);
let direct = 'normal';

function settypedirect(animeeffect) {
    if (animeeffect == 2) {
        direct = 'reverse';
    } else if (animeeffect < 2) {
        direct = 'alternate';
    }
}
anime({
    targets: '.slide1btn',
    translateX: 250,
    direction: 'alternate'

});
anime({
    targets: '.headlogo',
    translateY: 300,
    duration: 4000
})

anime({
    targets: '.downArrow',
    translateY: -350,
    duration: 4000
})


// ----Logic for the One page scrolling

$('.headerbox1').hide();
$('.headerbox2').hide();
$('.headerbox3').hide();
$('.headerbox4').hide();


$('.downArrow').click(function() {

    $('.introduction').hide('slow');
    $('.headerbox1').show(500);
})
$('.arro-holder-left-1').click(function() {

    $('.introduction').show(500);
    $('.headerbox1').css("display", "none");
})
$('.arro-holder-right-1').click(function() {

    $('.headerbox2').show(500);
    $('.headerbox1').css("display", "none");
})
$('.arro-holder-left-2').click(function() {

    $('.headerbox1').show(500);
    $('.headerbox2').css("display", "none");
})
$('.arro-holder-right-2').click(function() {

    $('.headerbox3').show(500);
    $('.headerbox2').css("display", "none");
})
$('.arro-holder-left-3').click(function() {

    $('.headerbox2').show(500);
    $('.headerbox3').css("display", "none");
})
$('.arro-holder-right-3').click(function() {

    $('.headerbox4').show(500);
    $('.headerbox3').css("display", "none");
})
$('.arro-holder-left-4').click(function() {

    $('.headerbox3').show(500);
    $('.headerbox4').css("display", "none");
})
$('.arro-holder-right-4').click(function() {

    $('.introduction').show(500);
    $('.headerbox4').css("display", "none");
})

// ___/nav ends////