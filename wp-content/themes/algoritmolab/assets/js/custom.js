

// Add class to navbar when window scroll
// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();
//     if (scroll >= 85) {
//         $(".algo-navbar-light").addClass("wow slideInDown algo-navbar-fixed");
//     }else {
//         $(".algo-navbar-light").removeClass("wow slideInDown algo-navbar-fixed");
//     }
// });


// Add class to child
$(function(){
    $('.course_lists_container').find('p').addClass('course_item_text');
});

// View More
$(function() {
    $('.course_item_text').slice(0, 6).show();
    $('.course_item_show').on('click', function(e) {
        e.preventDefault();
        $('.course_item_text:hidden').slice(0, 100).slideDown(600);
        $('.course_item_show').addClass('course_item_hide');
    });
});
