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
    loadingLoginPage();
}

var loadingISlider = function(){
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
};

$('._loginButton').on('click', function () {
    var isLogin= true;
    var username = $('#_username').val();
    var password = $('#_password').val();
    // if(username == ''){
    //     $.toast("请输入借阅证账号");
    //     isLogin = false;
    // }else if(password == ''){
    //     $.toast("请输入借阅证密码");
    //     isLogin = false;
    // }

    if(isLogin){
        $.router.loadPage("#index");
        setTimeout(function () {
            loadingISlider();
            $('._indexBars').show();
        }, 10);
    }



});

/**
 * login loading
 */
var loadingLoginPage = function(){
    setTimeout(function () {
        $('._body_cover').animate({
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        });
        $('._body_cover>img').animate({
            top: '7%'
        });
        $('._body_form').animate({
            top: '8.5rem'
        });
    }, 1000);
};

/**
 * borrow popUp page js start
 */
var _IS_EDIT = true;

// borrow open popup
$('#_open_borrow_popUp').on('click', function(){
    $.popup('#_borrow_popUp');
    $('._borrowFooter').hide();
    removeSlect();
    hideSelecter();
    $('#_borrow_popUp ._edit').html('编辑');
    $('#_borrow_popUp ._edit').show();
    $('#_borrow_popUp .title').html('借阅蓝');
    _IS_EDIT = true;
});

//return open popup
$('#_return_borrow_popUp').on('click', function(){
    $.popup('#_borrow_popUp');
    $('._borrowFooter').hide();
    removeSlect();
    hideSelecter();
    $('#_borrow_popUp ._edit').hide();
    $('#_borrow_popUp .title').html('归还蓝');
    _IS_EDIT = true;
});

$('._edit').on('click', function(){
    if(_IS_EDIT){
        $(this).html('完成');
        _IS_EDIT = false;
        addSelect();
        showSelecter();
    }else{
        removeSlect();
        hideSelecter();
        $(this).html('编辑');
        _IS_EDIT = true;
    }
});

// add select
var addSelect = function(){
  $('#_borrow_popUp').find('.card').each(function(){
      var html = '<img class="_btnSelectBook" src="image/pageImg/index/borrow_disSelect.png">';
      $(this).find('.item-media').prepend(html);
  });
};

//remove select
var removeSlect = function(){
    $('#_borrow_popUp').find('.card').each(function(){
        $(this).find('._btnSelectBook').remove();
    });
};

//select all
var _IS_SELEST_ALL = true;
$('._selectAll').on('click', function () {
    if(_IS_SELEST_ALL){
        selectAll();
        $(this).find('img').attr('src', 'image/pageImg/index/borrow_select.png');
        _IS_SELEST_ALL = false;
    }else{
        disSelectAll();
        $(this).find('img').attr('src', 'image/pageImg/index/borrow_disSelect.png');
        _IS_SELEST_ALL = true;
    }
});

//select all
var selectAll = function(){
    $('#_borrow_popUp').find('.card').each(function(){
        $(this).find('._btnSelectBook').attr('src', 'image/pageImg/index/borrow_select.png');
        $(this).find('.item-media').data('select', 'true');

    });
};

//diselect all
var disSelectAll = function(){
    $('#_borrow_popUp').find('.card').each(function(){
        $(this).find('._btnSelectBook').attr('src', 'image/pageImg/index/borrow_disSelect.png');
        $(this).find('.item-media').data('select', 'false');
    });
};

var hideSelecter = function(){
    var calcNum = $('#_borrow_popUp').height();
    $('#_borrow_popUp ._borrowFooter').animate({
        top: calcNum
    }, 200);
    setTimeout(function(){
        $('._borrowFooter').hide();
    }, 200);

};

var showSelecter = function(){
    $('._borrowFooter').show();
    var calcNum = $('#_borrow_popUp').height() - $('._borrowFooter').height();
    $('#_borrow_popUp ._borrowFooter').animate({
        top: calcNum
    },200);
};

var _IS_SINGO_SELECT = true;
$('#_borrow_popUp').find('.card').on('click', function(){
    if($(this).find('img').length != 1){
        if(_IS_SINGO_SELECT){
            $(this).find('._btnSelectBook').attr('src', 'image/pageImg/index/borrow_select.png');
            $(this).find('.item-media').data('select', 'true');
            _IS_SINGO_SELECT = false;
        }else{
            $(this).find('._btnSelectBook').attr('src', 'image/pageImg/index/borrow_disSelect.png');
            $(this).find('.item-media').data('select', 'false');
            _IS_SINGO_SELECT = true;
        }
    }
});

$('._cancel').on('click', function(){
    $('#_borrow_popUp').find('.card').each(function(){
        if($(this).find('.item-media').data('select') == 'true'){
            $(this).find('._stat').html('已取消借阅');
        }
    });
});

$('._receive').on('click', function(){
    $('#_borrow_popUp').find('.card').each(function(){
        if($(this).find('.item-media').data('select') == 'true'){
            $(this).find('._stat').html('已收到图书');
        }
    });
});

$('._goOn').on('click', function(){
    $('#_borrow_popUp').find('.card').each(function(){
        if($(this).find('.item-media').data('select') == 'true'){
            $(this).find('._stat').html('已提出续借请求');
        }
    });
});

/**
 * borrow popUp page js end
 */

/**
 * search page start
 */

$('._searchBook').on('click', function () {
    var searchContent = $(this).text();
    $('._searchInput').val(searchContent);
});

$('._searchInput').on('click', function(){
    $('._backSearch').show();

    $('._searchBar .search-input').removeClass('col-90');
    $('._searchBar .search-input').addClass('col-85');

    $('._indexContent').css('overflow', 'hidden');

    $('._searchPage').show();

});
$('._backSearch').on('click', function(){
    $('._searchInput').val('');
    $('._searchPage').hide();
    $('._indexContent').css('overflow', 'auto');
    $('._backSearch').hide();
    $('._searchBar .search-input').removeClass('col-85');
    $('._searchBar .search-input').addClass('col-90');
});

$('._others').on('click', function(){
    $.openPanel("#panel-right");
});

/**
 * search page end
 */

/**
 * mine page start
 */
$('._mineSees').on('click', function(){
    $('._mineTitle').attr('src', 'image/pageImg/index/mine_title_02.png');
    $('._mineContent01').attr('src', 'image/pageImg/index/mine_info_03.png');
    $('._mineContent02').attr('src', 'image/pageImg/index/mine_info_04.png');
});
$('#minePageBar').on('click', function(){
    $('._mineTitle').attr('src', 'image/pageImg/index/mine_title_01.png');
    $('._mineContent01').attr('src', 'image/pageImg/index/mine_info_01.png');
    $('._mineContent02').attr('src', 'image/pageImg/index/mine_info_02.png');
});
/**
 * mine page end
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
