$(() => { //start of onload


const hideText = () => {
    $('#project1text').css('display', 'none');
}
const showText = () => {
    $('#project1text').css({'display': 'flex', 'flex-direction': 'column', 'align-items': 'center', 'justify-content': 'center'});
}

$('.project1').mouseenter(hideText);

$('.project1').mouseleave(showText);


})
