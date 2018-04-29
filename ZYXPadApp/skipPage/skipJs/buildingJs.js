var swiperLength = 3;
var pageType = 'jin';

$(function(){
    $('._infoPage').hide();
});

/**
 * info title change
 * @param {*} thisIndex 
 */
var swiperChange = function(thisIndex){
    if(thisIndex <= swiperLength){
        $('._infoTitle>img').attr('src', '../skipImg/' + pageType + '/' + pageType + '_' + thisIndex + '_title.png');
        $('._infoPage>img').attr('src', '../skipImg/' + pageType + '/' + pageType + '_' + thisIndex + '_1.jpg');
    }else{
        $('._infoTitle>img').attr('src', '../skipImg/' + pageType + '/' + pageType + '_1_title.png');
        $('._infoPage>img').attr('src', '../skipImg/' + pageType + '/' + pageType + '_1_1.jpg');
    }
};

/**
 * swiper loading
 */
var swiper = new Swiper('.swiper-container', {
    initialSlide :0,
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




