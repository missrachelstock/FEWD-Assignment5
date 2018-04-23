console.log('testing!!!')

function readMore() {
    console.log('reading more');
    event.preventDefault();
    $('#show-this-on-click').slideDown();
    $('.readmore').hide();
    $('.readless hide').addClass();
}

$('.readmore').click(readMore);

