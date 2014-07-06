$(document).ready(function () {
    $('li').hover(
       function () { $(this).removeClass('opacity') },
       function () { $(this).addClass('opacity') }
)
});