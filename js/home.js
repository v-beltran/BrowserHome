$(document).ready(function () {
    // Highlight tile on hover
    $('li').hover(
       function () { $(this).removeClass('opacity') },
       function () { $(this).addClass('opacity') }
)
    // Search textbox auto-focus on page load
    $(".searchText").focus();
});