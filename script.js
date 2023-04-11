onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};

$(document).ready(function () {
    $('.title').click(function () {
        $('.container').addClass('open');
    });


    $('.close').click(function () {
        $('.container').removeClass('open');
    });
});