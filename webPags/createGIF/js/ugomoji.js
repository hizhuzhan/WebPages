$(function(){function F(){var a=$("#input_box").val();t!=a&&(t=a,m.setText(a))}function I(){var a=parseInt($("#select_type_id").val());m.setType(a)}var p=aidn.util.checkMobile();aidn.util.checkJapanese();$("#bt_tw").click(function(a){aidn.social.shareTw("https://aidn.jp/ugomoji/",!0,document.title,"daniwell_aidn","\u3046\u3054\u3082\u3058")});$("#bt_fb").click(function(a){aidn.social.shareFb("https://aidn.jp/ugomoji/",!0)});$("#bt_gp").click(function(a){aidn.social.shareGp("https://aidn.jp/ugomoji/",
!0)});$("#bt_li").click(function(a){aidn.social.shareLi("https://aidn.jp/ugomoji/",document.title)});var r=function(a,m){function t(){p($(this))}function p(a){r&&r.removeClass("selected");0<a.length&&(r=a,a.addClass("selected"),a=parseInt("0x"+a.attr("name"),16),x(a))}this.setColor=function(a){a=a.split("#").join("").split("0x").join("");p($(c.children(".c_"+a)[0]))};for(var c=a,x=m,q=c.children("span"),w=q.length,r=null,u=0;u<w;u++){var k=$(q[u]),v=k.attr("class"),n=v.split("_")[1];k.attr("name",
n);$(k.children("p")[0]).css("background-color","#"+v.split("_")[1]);k.click(t)}},w=new r($("#select_color"),function(a){m&&m.setTxColor(a)}),r=new r($("#select_bg_color"),function(a){m&&m.setBgColor(a)});w.setColor("000000");r.setColor("ffffff");$("#select_type select").val(0);w="";w=p?"\u203b\u4fdd\u5b58\u304c\u3046\u307e\u304f\u3044\u304b\u306a\u3044\u5834\u5408\u306f\u3001<br>\u753b\u50cf\u3092\u9577\u62bc\u3057\u3057\u3066\u4fdd\u5b58\u3057\u3066\u304f\u3060\u3055\u3044\u3002":"\u203b\u4fdd\u5b58\u304c\u3046\u307e\u304f\u3044\u304b\u306a\u3044\u5834\u5408\u306f\u3001<br>\u753b\u50cf\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3066\u4fdd\u5b58\u3057\u3066\u304f\u3060\u3055\u3044\u3002";
$("#attention").html(w);var p=["\u3000-= \u2227\uff3f\u2227 \n-=\u3068(\u00b4\uff65\u03c9\uff65`)\u3000\uff73\uff7a\uff9e\uff93\uff7c\uff9e!\n\u3000-=/\u3000\u3068_\u30ce \n-=_/\uff0f\u2312\uff7f","\u3000\u3000\u3000\u3000 \u2227\uff3f\u2227\u3000\u3000\uff73\uff7a\uff9e\uff93\uff7c\uff9e!\n\u3000\uff0f\uff3c\uff08\u3000\u30fb\u2200\u30fb\uff09\uff0f\u30fd\n\uff08 \u25cf\u3000\u3068\u3000\u3000\u3000\u3064\u3000\u25cf \uff09\n\u3000\uff3c/\u2282\u3001\u3000 \u3000\u30ce\u3000\uff3c\u30ce\n\u3000\u3000\u3000\u3000\u3000\u3057\u2019",
"\u3000 \u2227_\u2227\n\u3000( \uff65\u03c9\uff65)\u3000\u3000\uff73\uff7a\uff9e\uff93\uff7c\uff9e!\n\u3000\uff5c\u2283\uff0f(\uff3f\uff3f\uff3f\n\uff0f\u2514-(\uff3f\uff3f\uff3f_\uff0f\n\uffe3\uffe3\uffe3\uffe3\uffe3\uffe3","\u3000\u3000|\uff3c\uff3f\uff0f|\n\u3000\u3000|\u2015\u3000\u2015|\u3000\u3000\u3000\uff73\uff7a\uff9e\uff93\uff7c\uff9e!\n\u3000\u3000\u2227_\u2227_\u30ce_\uff3f\uff3f\uff0f/\u3000\n\u3000 (\uff65\u03c9\uff65`)\uff86\uff6c\uff70\u3000\u3000\u3000/\n\u3000 O\u65e6\u2282|\u3000 \uff3f\u3000\u3000\u30fd\n\u3000 \uff2f\uff2f\u30ce_\uff0f\uff63/_\uff0f\uff3c\uff63",
"  \u3000\u3000\u3000*\u3000\u3000\u3000\u3000\u3000\u3000*\n \u3000\uff0a\u3000\u3000\u3000\u3000\u3000\uff0b \u3000\uff73\uff7a\uff9e\uff93\uff7c\uff9e!\n  \u3000\u3000 n \u2227\uff3f\u2227\u3000n\n \uff0b\u3000(\uff96\uff08* \u00b4\u2200\uff40\uff09E)\n  \u3000 \u3000 Y \u3000\u3000\u3000 Y\u3000\u3000\u3000\u3000\uff0a"],t=p[Math.floor(p.length*Math.random())];$("#input_box").val(t);var m=new PixiManager;m.init(function(){$("#input_box").val(t);$("#create").on("click",function(a){m.createGif()});
$("#select_type_id").on("change",I);$("#input_box").on("keyup change",F);setInterval(F,500)})});
var PixiManager=function(){function F(){0<$("#create").text().lastIndexOf("\u2026")?$("#create").text("\u3000"):$("#create").text("GIF\u751f\u6210\u4e2d\u2026")}function I(){var f,b,d,G=k,g=v;if(window.Worker){var a=new Worker("js/worker.js");a.postMessage({cmd:"start",data:{delay:y,repeat:0,width:G,height:g}});for(b=0;b<=h;b++){d=y;2<=q&&5>=q&&b==h&&(d=y*M);for(f=0;f<B;f++)x[f].gotoAndStop(b);e.render(C);a.postMessage({cmd:"frame",data:e.context.getImageData(0,0,G,g).data,delay:d})}a.postMessage({cmd:"finish"});
a.onmessage=function(f){w(f.data)}}else O?p():($.ajaxSetup({cache:!0}),$.when($.getScript("js/lib/LZWEncoder.js"),$.getScript("js/lib/NeuQuant.js"),$.getScript("js/lib/GIFEncoder.js")).done(function(){O=!0;p()}).fail(function(){aidn.log("error")}))}function p(){var f,b,d;f=k;b=v;var a=new GIFEncoder;a.setRepeat(0);a.setDelay(y);a.setSize(f,b);a.start();for(b=0;b<=h;b++){d=y;2<=q&&5>=q&&b==h&&(d=y*M);for(f=0;f<B;f++)x[f].gotoAndStop(b);e.render(C);a.setDelay(d);a.addFrame(e.context)}a.finish();a=a.stream().getData();
w(a)}function r(f){f=atob(P.replace(/^.*,/,""));for(var b=new Uint8Array(f.length),a=0;a<f.length;a++)b[a]=f.charCodeAt(a);f=new Blob([b.buffer],{type:"image/gif"});window.navigator.msSaveBlob?window.navigator.msSaveBlob(f,"ugomoji_"+N+".gif"):document.getElementById("download").href=window.URL.createObjectURL(f)}function w(f){N=Date.now();K=!1;clearInterval(J);for(var a="",d=0,G=f.length,g,H,c,m,h,e;d<G;)g=f.charCodeAt(d++),H=f.charCodeAt(d++),c=f.charCodeAt(d++),m=g>>2,g=(g&3)<<4|H>>4,h=(H&15)<<
2|c>>6,e=c&63,isNaN(H)?h=e=64:isNaN(c)&&(e=64),a=a+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(m)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(e);P=f=a;window.navigator.msSaveBlob?($("#download_area").html("<div id='download'>\u4e0b\u8f7d\u554a</div>"),$("#download_area").click(r)):
$("#download_area").html("<a href='data:image/gif;base64,"+f+"' + download='ugomoji_"+N+".gif' target='_blank'><div id='download'>\u4e0b\u8f7d\u554a</div></a>");$("#image").css("max-width",Math.min(k,Q));$("#image").attr("src","data:image/gif;base64,"+f);$("#create").text("GIF\u751f\u6210");$("html,body").animate({scrollTop:$("#image").offset().top-20},400)}function t(){e.render(C);requestAnimationFrame(t)}var m=this,a=function(a){this.setText=function(a){d||(d=new PIXI.Text("",
c),b.addChild(d));d.text=a;d.x=0;d.y=u};this.gotoAndStop=function(a){0>a&&(a=0);h<a&&(a=h);switch(q){case 0:b.position.x=10*Math.random()-5;b.position.y=10*Math.random()-5;break;case 1:b.position.x=22*Math.random()-11;b.position.y=22*Math.random()-11;break;case 2:b.position.x=-n+z[a]/l*n;b.position.y=0;break;case 3:b.position.x=n-z[a]/l*n;b.position.y=0;break;case 4:b.position.x=0;b.position.y=-A+z[a]/l*A;break;case 5:b.position.x=0;b.position.y=A-z[a]/l*A;break;case 6:b.position.x=-n+a/h*n*2;b.position.y=
0;break;case 7:b.position.x=n-a/h*n*2,b.position.y=0}};this.setColor=function(a){c.fill=a;d&&(d.style=c)};this.visible=function(a){b.visible=a};this.x=function(a){d.x=a};this.y=function(a){d.y=a};this.width=function(){return d?d.width:1};this.height=function(){return d?d.height:1};var b=new PIXI.Container;_parent.addChild(b);var d,c;c={fontFamily:"\uff2d\uff33 \uff30\u30b4\u30b7\u30c3\u30af",fontSize:48,fill:0,align:"center"};aidn.util.checkMobile()&&($("#input_box").css("fontFamily","Arial"),c.fontFamily=
"Arial")};this.resize=function(a,b){k=a;v=b;e.resize(k,v);$("#view canvas").css("max-width",Math.min(a,Q))};this.init=function(a){(_callback=a)&&_callback();m.setText($("#input_box").val());t()};this.setType=function(a){q=a;h=S[q];l=D=0;z=[0];for(c=h;1<=c;c--)l+=c,z.push(l)};this.setBgColor=function(a){e.backgroundColor=a};this.setTxColor=function(a){for(var b=0;b<E;b++)x[b].setColor(a)};this.setText=function(a){var b=a.length;B=b;E<b&&(B=E);for(var d,c=L,g=u,e=0,h=1,k=0;k<E;k++)if(d=x[k],k<b){var l=
a.charAt(k);d.visible(!0);d.setText(l);d.x(c);d.y(g);0<=l.indexOf("\n")||0<=l.indexOf("\r")?(e<c&&(e=c),g+=d.height()-1.4*u,c=L):(c+=d.width(),aidn.util.checkMobile()||"\u3000"!=l&&" "!=l||(c+=1.4),e<c&&(e=Math.ceil(c)),h=d.height())}else d.visible(!1);e+=L-R;g+=u+h;n=e;A=g;a=1;if(800<e||800<g)a=Math.min(800/e,800/g);_parent.scale.x=_parent.scale.y=a;e=Math.floor(e*a);g=Math.floor(g*a);m.resize(e,g)};this.createGif=function(){K||($("#create").text("GIF\u751f\u6210\u4e2d\u2026"),setTimeout(I,50),clearInterval(J),
J=setInterval(F,60),K=!0)};var O=!1,J=-1,K=!1,c,x=[],q=0,L=30,R=8,u=30,k=640,v=55+2*u,n=k,A=v,Q=800,P,S=[12,12,20,20,20,20,35,35],D=0,h=10,l=0,z=[0];for(c=h;1<=c;c--)l+=c,z.push(l);var e=new PIXI.CanvasRenderer(k,v,{backgroundColor:16777215});document.getElementById("view").appendChild(e.view);var C=new PIXI.Container,E=2E3,B=2E3,N=0,y=45,M=25;e.render(C);__renderer=e;new PIXI.interaction.InteractionManager(e,{autoPreventDefault:!1});e.view.style.touchAction="auto";_parent=new PIXI.Container;C.addChild(_parent);
for(c=0;c<E;c++)x[c]=new a(c);setInterval(function(){for(var a=0;a<B;a++)x[a].gotoAndStop(D);D++;h+M<=D&&(D=0)},y)};
