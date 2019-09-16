$(() => { //start of onload

// ====================
//      PROJECT 1
// ====================
const hideText1 = () => {
    $('#project1text').css('display', 'none');
}
const showText1 = () => {
    $('#project1text').css({'display': 'flex', 'flex-direction': 'column', 'align-items': 'center', 'justify-content': 'center'});
}
$('.project1').mouseenter(hideText1);
$('.project1').mouseleave(showText1);
// ====================
//      PROJECT 2
// ====================
const hideText2 = () => {
    $('#project2text').css('display', 'none');
}
const showText2 = () => {
    $('#project2text').css({'display': 'flex', 'flex-direction': 'column', 'align-items': 'center', 'justify-content': 'center'});
}
$('.project2').mouseenter(hideText2);
$('.project2').mouseleave(showText2);
// ====================
//      PROJECT 3
// ====================
const hideText3 = () => {
    $('#project3text').css('display', 'none');
}
const showText3 = () => {
    $('#project3text').css({'display': 'flex', 'flex-direction': 'column', 'align-items': 'center', 'justify-content': 'center'});
}
$('.project3').mouseenter(hideText3);
$('.project3').mouseleave(showText3);
// ====================
//      PROJECT 4
// ====================
const hideText4 = () => {
    $('#project4text').css('display', 'none');
}
const showText4 = () => {
    $('#project4text').css({'display': 'flex', 'flex-direction': 'column', 'align-items': 'center', 'justify-content': 'center'});
}
$('.project4').mouseenter(hideText4);
$('.project4').mouseleave(showText4);
// ====================
//    SCROLL EFFECTS
// ====================
// $('#mainarrow').click(function(event)){
//     if (location.pathname.replace(/^\//, '') == pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//         var target = $(this.hash);
//         target = target.length ? target : $('=name')
//     }
// }

})// dont touch these
