$(document).ready(function ($) {
    var slideWidth = $("#slider ul li").width();


    $("#button1").click(function () {
        $("#slider ul").animate(
            {
                left: +slideWidth
            },
            500,
            function () {
                $("#slider ul li:last-child").prependTo("#slider ul");
                $("#slider ul").css("left", "");
            }
        );
    });

    $("#button2").click(function () {
        $("#slider ul").animate(
            {
                left: -slideWidth
            },
            500,
            function () {
                $("#slider ul li:first-child").appendTo("#slider ul");
                $("#slider ul").css("left", "");
            }
        );
    });
})