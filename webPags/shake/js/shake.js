$(function() {
    function t() {
        var a = $("[name=music]").val(),
        a = x[a];
        g = parseFloat($("[name=speed]").val().split("x ").join(""));
        var b = 'Watch "' + $("[name=music] option:selected").text() + '" On ',
        b = b + ('<a href="' + a.youtube + '" target="_blank">YouTube</a>');
        a.niconico && k && (b += '/ <a href="' + a.niconico + '" target="_blank">Niconico</a>');
        $(".watch").html(b)
    }
    function y() {
        aidn.log("_loadAudioComplete");
        m = 1;
        clearInterval(e);
        $("#scene_loading").stop().fadeOut(100);
        d.play(0, !0, u);
        d.speed = 1E-4;
        d.volume = 1
    }
    function u() {
        aidn.log("_playAudioHandler");
        clearInterval(e);
        $("#scene_loading").stop().fadeOut(100);
        $("#scene3").stop().fadeIn(200);
        clearInterval(n);
        window.removeEventListener("devicemotion", p);
        window.addEventListener("devicemotion", p);
        n = setInterval(z, 33)
    }
    function z() {
        for (var a = 0,
        b = 0; b < q; b++) a += l[b];
        var a = a / q,
        b = .04 * g,
        c = .03 * g,
        a = (a - 400) / 1E4;
        a < -c && (a = -c);
        b < a && (a = b);
        f += a;
        0 >= f && (f = 1E-4);
        g < f && (f = g);
        d.speed = f
    }
    function p(a) {
        var b = a.accelerationIncludingGravity || a.acceleration;
        a = b.x;
        var c = b.y,
        b = b.z;
        a = a * a + c * c + b * b;
        v < a && (v = a);
        a < w && (w = a);
        l.shift();
        l.push(a)
    }
    $("#header_menu").bind("click",
    function(a) {
        $("#header").slideDown(200)
    });
    $("#bt_close").bind("click",
    function(a) {
        $("#header").slideUp(200)
    });
    var h = aidn.util.checkMobile(),
    r = aidn.util.webaudio,
    k = aidn.util.checkJapanese(),
    e = -1,
    d = new aidn.WebAudio;
    if (r) {
        var c = new aidn.WebAudio;
        c.load(["../shared/sound/blank.mp3", "../shared/sound/blank.ogg"],
        function() {
            c.play(0, !0)
        })
    }
    var m = 0,
    x = {
        nyan: {
            youtube: "https://www.youtube.com/watch?v=QH2-TGUlwu4"
        },
        nyanex: {
            youtube: "https://www.youtube.com/watch?v=yarCP79fUts",
            niconico: "http://www.nicovideo.jp/watch/sm17546264"
        },
        cats: {
            youtube: "https://www.youtube.com/watch?v=rmUm9qo3E-A",
            niconico: "http://www.nicovideo.jp/watch/sm27526561"
        },
        nyanco: {
            youtube: "https://www.youtube.com/watch?v=kwpSve_MDvs",
            niconico: "http://www.nicovideo.jp/watch/sm27226718"
        },
        boxcat: {
            youtube: "https://www.youtube.com/watch?v=k0RPJMkrX_8",
            niconico: "http://www.nicovideo.jp/watch/sm27708145"
        },
        uz: {
            youtube: "https://www.youtube.com/watch?v=_jqhMuu8cH4",
            niconico: "http://www.nicovideo.jp/watch/sm27840570"
        }
    };
    $("#bt_tw").click(function(a) {
        aidn.social.shareTw("https://aidn.jp/shake/", !0, document.title, "daniwell_aidn")
    });
    $("#bt_fb").click(function(a) {
        aidn.social.shareFb("https://aidn.jp/shake/", !0)
    });
    $("#bt_gp").click(function(a) {
        aidn.social.shareGp("https://aidn.jp/shake/", !0)
    });
    $("#bt_li").click(function(a) {
        aidn.social.shareLi("https://aidn.jp/shake/", document.title)
    });
    k ? $(".info a").attr("href", aidn.constant.album2ndJa) : ($("#scene1 .sound").text("* RAISE THE VOLUME AND ENJOY!"), $("#scene1 h2").text("Let's shake your Smartphone and play MUSIC!"), $(".info a").attr("href", aidn.constant.album2ndEn));
    h ? ($(".qr").css("display", "none"), r ? $("#support_ok").css("display", "block") : ($("#support_ng").css("display", "block"), k || $("#support_ng .atten").html("Sorry,<br>your device or browser doesn't support this site."))) : "ondevicemotion" in window && r ? $("#support_ok").css("display", "block") : ($("#pc").css("display", "block"), k || $("#pc .atten").text("Please browse on your mobile or tablet device."));
    t();
    $("select").change(t);
    $("#bt_start").click(function(a) {
        c && (c.stop(), c.play(0, !0));
        $("#scene1").stop().fadeOut(200);
        $("#scene_loading").stop().fadeIn(100);
        $("#scene_loading p").text("LOADING");
        clearInterval(e);
        e = setInterval(function() {
            var a = $("#scene_loading p");
            1 == a.css("opacity") ? a.css("opacity", 0) : a.css("opacity", 1)
        },
        50);
        a = "sound/" + $("[name=music]").val() + ".mp3";
        d.load([a], y)
    });
    $("#bt_play").click(function(a) {
        c && c.stop();
        $("#scene2").stop().fadeOut(100);
        $("#scene_loading").stop().fadeIn(100);
        $("#scene_loading p").text("...");
        clearInterval(e);
        e = setInterval(function() {
            var a = $("#scene_loading p");
            1 == a.css("opacity") ? a.css("opacity", 0) : a.css("opacity", 1)
        },
        50);
        d.play(0, !0, u);
        d.speed = 1E-4;
        d.volume = 1
    });
    $("#bt_back").click(function(a) {
        if (0 == m) location.href = "../contents";
        else {
            c && c.play(0, !0);
            m = 0;
            clearInterval(n);
            window.removeEventListener("devicemotion", p);
            clearInterval(e);
            $("#scene_loading").stop().fadeOut(100);
            $("#scene2").stop().fadeOut(200);
            $("#scene3").stop().fadeOut(200);
            $("#scene1").stop().fadeIn(200);
            try {
                d.stop()
            } catch(b) {}
        }
    });
    for (var v = 0,
    w = 1E5,
    f = 0,
    g = 1,
    n = -1,
    l = [], q = 3, h = 0; h < q; h++) l[h] = 0
});
