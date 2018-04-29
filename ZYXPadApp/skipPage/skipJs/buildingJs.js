// var swiperLength = 3;
// var pageType = 'jin';

var swiperLength = parseInt(getUrlParam('length'));
var pageType = getUrlParam('type');
var init = parseInt(getUrlParam('init'));

$(function(){
    // $('._infoPage').hide();
    loadingSwiper();

});

/**
 * info title change
 * @param {*} thisIndex 
 */
var swiperChange = function(thisIndex){
    if(thisIndex == 0){
        $('._infoTitle>img').attr('src', 'skipImg/' + pageType + '/' + pageType + '_' + swiperLength + '_title.png');
        $('._infoPage>img').attr('src', 'skipImg/' + pageType + '/' + pageType + '_' + swiperLength + '_1.jpg');
    }
    if(thisIndex <= swiperLength && thisIndex > 0){
        $('._infoTitle>img').attr('src', 'skipImg/' + pageType + '/' + pageType + '_' + thisIndex + '_title.png');
        $('._infoPage>img').attr('src', 'skipImg/' + pageType + '/' + pageType + '_' + thisIndex + '_1.jpg');
    }
    if(thisIndex == (swiperLength + 1)){
        $('._infoTitle>img').attr('src', 'skipImg/' + pageType + '/' + pageType + '_1_title.png');
        $('._infoPage>img').attr('src', 'skipImg/' + pageType + '/' + pageType + '_1_1.jpg');
    }
};

/**
 * swiper loading
 */
var loadingSwiper = function(){
    creatSwiper();
    var swiper = new Swiper('.swiper-container', {
        initialSlide :(init - 1),
        loop : true,
        pagination: {
            el: '.swiper-pagination',
        },
        on: {
            slideChangeTransitionStart: function(){
                swiperChange(this.activeIndex);
            },
        },
    });
}

var creatSwiper = function(){
    $('.swiper-wrapper').empty();
    for(var i = 1; i <= swiperLength; i++){
        $('.swiper-wrapper').append(swiperHtml(i));
    }
}

var swiperHtml = function(num){
    return '<div class="swiper-slide"><img src="skipImg/' + pageType + '/' + pageType + '_' + num + '.jpg"></div>';
}


//back
$('._back').on('click', function(){
    alert('back');
});

//back index
$('._backIndex').on('click', function(){
    alert('index');
});

//info
$('._info').on('click', function(){
    $('._infoPage').fadeIn(200);
});

//close info
$('._infoPage>div').on('click', function(){
    $('._infoPage').fadeOut(200);
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
