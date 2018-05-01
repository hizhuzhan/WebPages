var mapType = '';

$(function(){
    setTimeout(function(){
        $('._loading_page').fadeOut();
    }, 0);
    changeBtnImg('_jin', 'jin');
    changeBtnImg('_yuan', 'yuan');
    changeBtnImg('_ming', 'ming');
    changeBtnImg('_min', 'min');
    changeBtnImg('_xin', 'xin');
    changeBtnImg('_xian', 'xian');
});

/**
 * btn touch change type
 * @param {btnDom} btnDom 
 * @param {type} type 
 */
var changeBtnImg = function(btnDom, type){
    $('.' + btnDom).show();
    $('.' + btnDom).on("touchstart",function () {
        $(this).find('img').attr('src', 'skipImg/index/' + type + '_down.png');
    });
    $('.' + btnDom).on("touchend",function () {
        $(this).find('img').attr('src', 'skipImg/index/' + type + '.png');
    });
};

// map page
// map page loading
$(document).on("pageInit", "#pageMap_jin", function(e, pageId, page) {  
    var type = pageId.split('_')[1];
    jinMapSwiper(type);
    //create building popup
    createPopup(type, 3);
});
$(document).on("pageInit", "#pageMap_yuan", function(e, pageId, page) {  
    var type = pageId.split('_')[1]
    jinMapSwiper(type);
    //create building popup

});
$(document).on("pageInit", "#pageMap_ming", function(e, pageId, page) {  
    var type = pageId.split('_')[1]
    jinMapSwiper(type);
    //create building popup
    
});
$(document).on("pageInit", "#pageMap_min", function(e, pageId, page) {  
    var type = pageId.split('_')[1]
    jinMapSwiper(type);
    //create building popup

});
$(document).on("pageInit", "#pageMap_xin", function(e, pageId, page) {  
    var type = pageId.split('_')[1]
    jinMapSwiper(type);
    //create building popup

});
$(document).on("pageInit", "#pageMap_xian", function(e, pageId, page) {  
    var type = pageId.split('_')[1]
    jinMapSwiper(type);
    //create building popup

});

/**
 * info title change
 * @param {*} thisIndex 
 */
var swiperChange = function(thisIndex, type){
    var info = 'skipImg/public/infoBtn.png';
    var map = 'skipImg/public/mapBtn.png';
    var str = 'skipImg/public/strBtn.png';
    switch(type){
        case 0: $('.' + thisIndex + '_map_footerBtn>img').attr('src', info);
        break;
        case 1: $('.' + thisIndex + '_map_footerBtn>img').attr('src', map);
        break;
        case 2: $('.' + thisIndex + '_map_footerBtn>img').attr('src', str);
        break;
    }
};

// loading map swiper
var jinMapSwiper = function(mapPageType){
    creatSwiperPublic(mapPageType);
};
var yuanMapSwiper = function(mapPageType){
    creatSwiperPublic(mapPageType);
};
var mingMapSwiper = function(mapPageType){
    creatSwiperPublic(mapPageType);
};
var minMapSwiper = function(mapPageType){
    creatSwiperPublic(mapPageType);
};
var xinMapSwiper = function(mapPageType){
    creatSwiperPublic(mapPageType);
};
var xianMapSwiper = function(mapPageType){
    creatSwiperPublic(mapPageType);
};


var creatSwiperPublic = function(mapPageType){
    creatMapSwiper(mapPageType);
    new Swiper('.' + mapPageType + '-swiper-container', {
        effect : 'fade',
        initialSlide : 1,
        on: {
            slideChangeTransitionStart: function(){
                swiperChange(mapPageType, this.activeIndex);
            },
        },
    });
};
/**
 * create map swiper Html
 * @param {*} mapPageType 
 */
var creatMapSwiper = function(mapPageType){
    var info = '<div class="swiper-slide"><img src="skipImg/' + mapPageType + '/' + mapPageType + '_info.png"></div>';
    var map = '<div class="swiper-slide"><img src="skipImg/' + mapPageType + '/' + mapPageType + '_map.png"></div>';
    var str = '<div class="swiper-slide"><img src="skipImg/' + mapPageType + '/' + mapPageType + '_str.png"></div>';

    $('.' + mapPageType + '-swiper-container>.swiper-wrapper').empty();
    $('._map_div>img').attr('src', 'skipImg/' + mapPageType + '/' + mapPageType + '_bg.jpg');
    $('.' + mapPageType + '-swiper-container>.swiper-wrapper').append(info);
    $('.' + mapPageType + '-swiper-container>.swiper-wrapper').append(map);
    $('.' + mapPageType + '-swiper-container>.swiper-wrapper').append(str);
}

/**
 * create Popup html
 */
var createPopup = function(type, popupNum){
    var thisDom = $('._' + type + '_popup');
    if(thisDom.html() == ''){
        for(var i = 1; i <= popupNum; i++){
            thisDom.append(popupHtml(type + '_' + i));
            creatSwiper(type, type + '_' + i, popupNum);
        }
    }
    // loadingPopupSwiper(type, popupNum);
};

$('._page_map').find('.open-popup').on('click', function(){
    var popupOpenType = $(this).data('type');
    var popupOpenLength = parseInt($(this).data('length'));
    var popupOpenInit = parseInt($(this).data('init'));

    loadingPopupSwiper(popupOpenType, popupOpenLength, popupOpenInit);
});

// $(document).on('click', '.jin_1', function(){
//     loadingPopupSwiper('jin_1', 3, 1);
// });

var popupHtml = function(type){
    var html = '<div class="popup ' + 
                type + 
                '">' +
                '<div class="content-block">' + 
                '<!-- back button -->'+
                '<a href="#" class="_back close-popup">'+
                '<img src="skipImg/public/back.png">'+
                '</a>'+
                '<!-- info title -->'+
                '<div class="_infoTitle">'+
                '<img src="skipImg/jin/jin_1_title.png">'+
                '</div>'+
                '<!-- back index button -->'+
                '<div class="_backIndex">'+
                '<img src="skipImg/public/backIndex.png">'+
                '</div>'+
                '<!-- info button -->'+
                '<div class="_info">'+
                '<img src="skipImg/public/info.png">'+
                '</div>'+
                '<!-- info page -->'+
                '<div class="_infoPage">'+
                '<img src="skipImg/jin/jin_1_1.jpg">'+
                '<div class="_closeInfo"></div>'+
                '</div>'+
                '<!-- Swiper -->'+
                '<div class="' +
                type + 
                '-swiper-container _swiper-container">'+
                '<div class="swiper-wrapper">'+
                '</div>'+
                '<!-- Add Pagination -->'+
                '<div class="swiper-pagination"></div>'+
                '</div>' +
                '</div>' +
                '</div>';
    return html;
};

var loadingPopupSwiper = function(popupPageType, popupNum, init){
    // creatSwiper(popupPageType, popupNum);
    console.log(popupPageType + '   ' + popupNum + '   ' + init);
    new Swiper('.' + popupPageType + '-swiper-container', {
        initialSlide :(init - 1),
        loop : true,
        pagination: {
            el: '.swiper-pagination',
        },
        on: {
            slideChangeTransitionStart: function(){
                swiperPopupChange(popupPageType, this.activeIndex, popupNum);
            },
        },
    });
}

/**
 * info title change
 * @param {*} thisIndex 
 */
var swiperPopupChange = function(popupPageType, thisIndex, popupNum){
    popupPageType = popupPageType.split('_')[0];
    if(thisIndex == 0){
        $('._infoTitle>img').attr('src', 'skipImg/' + popupPageType + '/' + popupPageType + '_' + popupNum + '_title.png');
        $('._infoPage>img').attr('src', 'skipImg/' + popupPageType + '/' + popupPageType + '_' + popupNum + '_1.jpg');
    }
    if(thisIndex <= popupNum && thisIndex > 0){
        $('._infoTitle>img').attr('src', 'skipImg/' + popupPageType + '/' + popupPageType + '_' + thisIndex + '_title.png');
        $('._infoPage>img').attr('src', 'skipImg/' + popupPageType + '/' + popupPageType + '_' + thisIndex + '_1.jpg');
    }
    if(thisIndex == (popupNum + 1)){
        $('._infoTitle>img').attr('src', 'skipImg/' + popupPageType + '/' + popupPageType + '_1_title.png');
        $('._infoPage>img').attr('src', 'skipImg/' + popupPageType + '/' + popupPageType + '_1_1.jpg');
    }
};

var creatSwiper = function(popupPageType, type, popupNum){
    $('.' + type + '-swiper-container>.swiper-wrapper').empty();
    for(var i = 1; i <= popupNum; i++){
        $('.' + type + '-swiper-container>.swiper-wrapper').append(swiperHtml(popupPageType, i));
    }
};

var swiperHtml = function(popupPageType, popupNum){
    return '<div class="swiper-slide"><img src="skipImg/' + popupPageType + '/' + popupPageType + '_' + popupNum + '.jpg"></div>';
};

//info
$('._info').on('click', function(){
    $('._infoPage').fadeIn(200);
});

//close info
$('._infoPage>div').on('click', function(){
    $('._infoPage').fadeOut(200);
});
