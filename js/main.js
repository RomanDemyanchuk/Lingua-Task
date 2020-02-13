$(function() {
    $('.reviews-slider').slick(
    {
        centerMode: true,
        centerPadding: '360px',
        slidesToShow: 1,
        dots:true,
        responsive: [
        {
        breakpoint: 1300,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '220px',
                slidesToShow: 1
                }
        },
        {
        breakpoint: 1000,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '150px',
                slidesToShow: 1
                }
        },
        {
        breakpoint: 880,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '15px',
                slidesToShow: 1
                }
        },
    ]
    }
);
    $('.menu-btn').on('click', function() {
        $('.header-menu').slideToggle();
    });
});

