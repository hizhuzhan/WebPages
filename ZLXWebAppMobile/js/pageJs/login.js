$(function () {
    loadingLoginPage();
});

var loadingLoginPage = function(){
    setTimeout(function () {
        $( "._body_cover" ).animate({
            backgroundColor: "rgba(0, 0, 0, 0.5)"
        });
        $( "._body_cover>img" ).animate({
            top: "7%"
        });
    }, 3000);
};