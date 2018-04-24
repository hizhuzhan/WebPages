$(function () {
    navChange('index');
});
/**
 * 导航切换
 * @index           首页
 * @introduce       本馆介绍
 * @system          规章制度
 * @service         读者服务
 * @notice          新书通报
 * @contact         联系我们
 * @download        下载专区
 * @searchPage      搜索页面
 */
$('#index').on('click', function () {
    addRedLine(this);
    navChange('index');
});
$('#introduce').on('click', function () {
    navChange('introduce');

    addRedLine(this);
});
$('#system').on('click', function () {
    addRedLine(this);
    navChange('system');
});
$('#service').on('click', function () {
    addRedLine(this);
    navChange('service');
});
$('#notice').on('click', function () {
    addRedLine(this);
    navChange('notice');
});
$('#contact').on('click', function () {
    addRedLine(this);
    navChange('contact');
});
$('#download').on('click', function () {
    addRedLine(this);
    navChange('download');
});
$('#search').on('click', function () {
    openSearchPage();
});


/**
 * 添加小红杠
 * @param dom
 */
var addRedLine = function (dom) {
    $('#nav').find('div').removeClass('redLine');
    $(dom).find('div').addClass('redLine');
};

/**
 * 导航信息切换
 * @param navId
 */
var navChange = function(navId) {
    if(navId == 'index'){
        $("._title").animate({top:'30'}, 300, function () {
            showNavChangePage(navId);
        });
        $('#_index_head').attr('src', 'image/index_head.jpg');
    }else{
        $("._title").animate({top:'0'}, 300, function () {
            showNavChangePage(navId);
        });
    }
    $('._' + navId + '_page').hide();
};

/**
 * 导航信息切换
 * @param navId
 */
var showNavChangePage = function (navId) {
    $('._page').hide();
    $('#_search_footer_info').addClass('hide');
    switch (navId){
        case 'index':
            $('._' + navId + '_page').show();
            break;
        case 'introduce':
            $('._' + navId + '_page').show();
            showContentList(navId);
            break;
        case 'system':
            $('._' + navId + '_page').show();
            showContentList(navId);
            break;
        case 'service':
            $('._' + navId + '_page').show();
            showContentList(navId);
            break;
        case 'notice':
            $('._' + navId + '_page').show();
            showContentList(navId);
            break;
        case 'contact':
            $('._' + navId + '_page').show();
            showContentList(navId);
            break;
        case 'download':
            $('._' + navId + '_page').show();
            showContentList(navId);
            break;
    }
}
/**
 * 右侧列表
 * @param pageType
 */
var showContentList = function (pageType) {
    $.ajax({
        url: '/ZLXWebAppPc/json/' + pageType + '.json',
        success: function (data) {
            console.log(data);
            $('#_info_list').html(data.list);
            $('#_content_path').html(data.path);
            contentListClick(data.content);

            //
        }
    });
}
/**
 * 右侧列表点击
 * @param content
 */
var contentListClick = function (content) {
    console.log(content);
    var scriptCode = '';
    var isFirst = true;
    for(var key in content){
        scriptCode += "$('#" +
            key +
            "').on('click', function () {\n" +
            "$(\"#_content_title\").html('" +
            content[key].title +
            "');" +
            "$(\"#_info_content\").html('" +
            content[key].content +
            "');" +
            "contentListStyleChange(this)" +
            "});\n";
        //显示第一项
        if(isFirst){
            $("#_content_title").html(content[key].title);
            $("#_info_content").html(content[key].content);
            contentListStyleChange('#' + key );
        }
        isFirst = false;
    }
    var script = '<script>' + scriptCode + '</script>';
    $('#_info_list_script').html(script);
}
var contentListStyleChange = function(dom){
    $(dom).parent().find('img').attr('src', 'image/unfold.png');
    $(dom).parent().find('p').css('color', '#333');
    $(dom).find('img').attr('src', 'image/unfold_red.png');
    $(dom).find('p').css('color', '#c91d42');
}

/**
 * 打卡搜索页面
 */
var openSearchPage = function () {
    //  hide redLine
    $('#nav').find('div').removeClass('redLine');
    //  show img div
    $('._index_page').show();
    //  中国戏剧学院图书馆
    $('#_img_div_head').hide();
    //  查看详情
    $('#_index_title').hide();
    //  www.nacta.edu.cn
    $('#_index_details').hide();
    //  image
    $('#_index_head').attr('src', 'image/search_head.jpg');
    //  nav
    $("._title").animate({top:'0'}, 300, function () {
        $('#nav').css('background-color', 'rgba(84, 84, 84, 0.6)');
    });
    //  content
    $('._content ').hide();
    $('._search').show();
    //  _search_footer_info
    $('#_search_footer_info').removeClass('hide');

}
