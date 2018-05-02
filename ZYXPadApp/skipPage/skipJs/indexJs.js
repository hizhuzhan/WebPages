var mapType = '';

$(function(){
    setTimeout(function(){
        $('._loading_page').fadeOut();
    }, 2000);
    $('#pageIndex').show();
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
    var type = pageId.split('_')[1];
    yuanMapSwiper(type);
    //create building popup
    createPopup(type, 5);

});
$(document).on("pageInit", "#pageMap_ming", function(e, pageId, page) {  
    var type = pageId.split('_')[1];
    mingMapSwiper(type);
    //create building popup
    createPopup(type, 11);
});
$(document).on("pageInit", "#pageMap_min", function(e, pageId, page) {  
    var type = pageId.split('_')[1];
    minMapSwiper(type);
    //create building popup
    createPopup(type, 5);
});
$(document).on("pageInit", "#pageMap_xin", function(e, pageId, page) {  
    var type = pageId.split('_')[1];
    xinMapSwiper(type);
    //create building popup
    createPopup(type, 6);
});
$(document).on("pageInit", "#pageMap_xian", function(e, pageId, page) {  
    var type = pageId.split('_')[1];
    xianMapSwiper(type);
    //create building popup
    createPopup(type, 8);
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
                if(this.activeIndex == 1){
                    $('._' + mapPageType + '_building').show();
                }else{
                    $('._' + mapPageType + '_building').hide();
                }
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
};

/**
 * create Popup html
 */
var createPopup = function(type, popupNum){
    if($('body').find('.' + type +'Popup').html() == undefined){
        for(var i = 1; i <= popupNum; i++){
            $('body').append(popupHtml(type + '_' + i));
            creatSwiper(type, type + '_' + i, popupNum);
        }
    }
    // loadingPopupSwiper(type, popupNum);
};

$('._page_map').find('.open-popup').on('click', function(){

    var popupOpenType = $(this).data('type');
    var popupOpenLength = parseInt($(this).data('length'));
    var popupOpenInit = parseInt($(this).data('init'));

    setTimeout(function(){
        loadingPopupSwiper(popupOpenType, popupOpenLength, popupOpenInit);
    }, 10);

});

// $(document).on('click', '.jin_1', function(){
//     loadingPopupSwiper('jin_1', 3, 1);
// });

var popupHtml = function(type){
    var realType = type.split('_')[0];
    var realNum = type.split('_')[1];
    var html = '<div class="popup _auto_createPopup ' +
                realType +
                'Popup ' +
                type + 
                '">' +
                '<div class="content-block">' + 
                '<!-- back button -->'+
                '<a href="#" class="_back close-popup">'+
                '<img src="skipImg/public/back.png">'+
                '</a>'+
                '<!-- info title -->'+
                '<div class="_infoTitle">'+
                '<img src="skipImg/' +
                realType +
                '/' +
                type +
                '_title.png">'+
                '</div>'+
                '<!-- back index button -->'+
                '<a href="#pageIndex" class="_backIndex close-popup">'+
                '<img src="skipImg/public/backIndex.png">'+
                '</a>'+
                '<!-- info button -->'+
                '<div class="_' +
                type +
                '_info _info">'+
                '<img src="skipImg/public/info.png">'+
                '</div>'+
                '<!-- info page -->'+
                '<div class="_' +
                type +
                '_infoPage _infoPage">'+
                '<img src="skipImg/' +
                realType +
                '/' +
                realType +
                '_' +
                realNum +
                '_1.jpg">'+
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
                '</div>' +
                '<script>' +
                '$(\'._' +
                type +
                '_info\').on(\'click\', function(){\n' +
                '    $(\'._infoPage\').fadeIn(200);\n' +
                '});\n' +
                '//close info\n' +
                '$(\'._' +
                type +
                '_infoPage>div\').on(\'click\', function(){\n' +
                '    $(\'._infoPage\').fadeOut(200);\n' +
                '});' +
                '</script>';
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


