var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});

var music = document.getElementById("music");
var musicbg = document.querySelectorAll(".music_bg")[0];
var musicImg = document.querySelectorAll(".music_tu")[0];
var audio = document.querySelector("audio");
var flag = 1;
music.onclick = function () {
    if (flag == 1) {

        musicbg.style.display = "none";
        musicImg.style.animation = "none";
        audio.pause();
        flag = 0
    } else {
        musicbg.style.display = "block";
        musicImg.style.animation = "music 2s linear infinite";
        audio.play();
        flag = 1;
    }
};

//创建和初始化地图函数：
function initMap(){
    createMap();//创建地图
    setMapEvent();//设置地图事件
    addMapControl();//向地图添加控件
    addMapOverlay();//向地图添加覆盖物
}
function createMap(){
    map = new BMap.Map("map");
    map.centerAndZoom(new BMap.Point(116.5776,38.082711),15);
}
function setMapEvent(){
    map.enableScrollWheelZoom();
    map.enableKeyboard();
    map.enableDragging();
    map.enableDoubleClickZoom()
}
function addClickHandler(target,window){
    target.addEventListener("click",function(){
        target.openInfoWindow(window);
    });
}
function addMapOverlay(){
}
//向地图添加控件
function addMapControl(){
    var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
    scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
    map.addControl(scaleControl);
    var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
    map.addControl(navControl);
    var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
    map.addControl(overviewControl);
}
var map;
initMap();