const swiper = new Swiper('.swiper', {
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">'  + "</span>";
        },
    },

});

// const swiper = new Swiper(".mySwiper", {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
//     pagination: {
//         el: ".swiper-pagination",
//     },
// });