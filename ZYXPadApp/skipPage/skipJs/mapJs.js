// var pageType = getUrlParam('type');
var pageType = 'jin';

/**
 * info title change
 * @param {*} thisIndex 
 */
var swiperChange = function(thisIndex){
    var info = 'skipImg/public/infoBtn.png';
    var map = 'skipImg/public/mapBtn.png';
    var str = 'skipImg/public/strBtn.png';
    switch(thisIndex){
        case 0: $('._footerBtn>img').attr('src', info);
        break;
        case 1: $('._footerBtn>img').attr('src', map);
        break;
        case 2: $('._footerBtn>img').attr('src', str);
        break;
    }
};

var swiper = new Swiper('.swiper-container', {
    effect : 'fade',
    initialSlide :1,
    on: {
        slideChangeTransitionStart: function(){
            console.log(this.activeIndex);
            swiperChange(this.activeIndex);
        },
    },
});


/**
 * getUrlParam
 * @param {urlName} name 
 */
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); return null; 
}