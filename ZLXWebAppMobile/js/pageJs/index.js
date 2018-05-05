var loadStep = 0;
var DATA = [
    {content: "image/pageImg/index/find_01_01.png"},
    {content: "image/pageImg/index/find_01_02.png"},
    {content: "image/pageImg/index/find_01_03.png"},
    {content: "image/pageImg/index/find_01_04.png"},
    {content: "image/pageImg/index/find_01_01.png"},
    {content: "image/pageImg/index/find_01_02.png"},
    {content: "image/pageImg/index/find_01_03.png"},
    {content: "image/pageImg/index/find_01_04.png"},
    {content: "image/pageImg/index/find_01_01.png"},
    {content: "image/pageImg/index/find_01_02.png"},
    {content: "image/pageImg/index/find_01_03.png"},
    {content: "image/pageImg/index/find_01_04.png"}
    // {content: "//be-fe.github.io/static/images/iSlider-card/1.jpg"},
    // {content: "//be-fe.github.io/static/images/iSlider-card/2.jpg"},
    // {content: "//be-fe.github.io/static/images/iSlider-card/3.jpg"},
    // {content: "//be-fe.github.io/static/images/iSlider-card/4.jpg"},
    // {content: "//be-fe.github.io/static/images/iSlider-card/5.jpg"},
    // {content: "//be-fe.github.io/static/images/iSlider-card/6.jpg"},
    // {content: "//be-fe.github.io/static/images/iSlider-card/7.jpg"},
    // {content: "//be-fe.github.io/static/images/iSlider-card/8.jpg"}
];
var q = new queue();

q.awaitAll(function () {
    setTimeout(function () {
        init();
    }, 1000);
});

function init() {
    var mEl = document.getElementById('_slide');
    var anims = iSlider._animateFuncs;
    var iEl, iElWrapper, dEl;
    iElWrapper = document.createElement('li');
    dEl = document.createElement('p');
    iEl = document.createElement('div');
    iEl.className = 'iEl';
    mEl.appendChild(iElWrapper);
    iElWrapper.appendChild(iEl);
    iElWrapper.appendChild(dEl);
    new iSlider(iEl, DATA, {
        animateType: 'flow',
        isLooping: 1,
        isOverspread: 1,
        isAutoplay: 1,
        animateTime: 2000,
        duration: 2000
    });
}

/**
 * borrow popUp page js start
 */



/**
 * borrow popUp page js end
 */


/**
 * find popUp page js start
 */
$('#_find_popUp_click').on('click', function(){
    $.popup('#_find_popUp');
    setTimeout(function () {
        $.alert('附近没小伙伴哦~');
    }, 4000);
});
/**
 * find popUp page js end
 */

/**
 * class popUp page js start
 */
$('#_class_book_01').on('click', function(){
    $.popup('#_class_popUp_zx');
});
$('#_class_book_02').on('click', function(){
    $.popup('#_class_popUp_sh');
});
$('#_class_book_03').on('click', function(){
    $.popup('#_class_popUp_fl');
});
/**
 * class popUp page js end
 */
