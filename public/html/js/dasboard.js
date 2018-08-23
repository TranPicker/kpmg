var zoomIn = true;
$(document).ready(function(){

    $('#multi-select').dropdown();
    //click icon search
    $('#icon-search').click(function(){
        $('#multi-select').click();
    })
    // Dragable
    $('#map-office').draggable();
    $('.avatar-office').draggable();
    // click map office zoomin
    $('#map-office').click(function(){
        if(zoomIn) zoomin();
        else zoomout();
    })
    setHeightElement('#myTabContent');
    setHeightElement('#map');
    $(window).resize(function() {
        setHeightElement('#myTabContent');
        setHeightElement('#map');
    })
    //set width progress bar
    setWidthProgressBar();
});

function setWidthProgressBar() {
   var father = $('.each-favorite').each(function () {
       var perCent = $(this).children('.progress-bar').data('percent');
       $(this).children('.progress-bar').css('width',perCent);
       $(this).children('.number-percent').text(' '+perCent+' %');
   })
}
function setHeightElement(ele){
    // set height for tab-content
    var height = $(window).height() - $(ele).offset().top -20;
    $(ele).css('height',height);
}
function zoomin(){
    zoomIn = true;
    var myImg = $("#map-office");
    var currWidth = myImg.width()
    console.log(currWidth)
    if(currWidth == 2500) return false;
    else{
        myImg.css("width", (currWidth + 100));
    }
}
function zoomout(){
    zoomIn = false;
    var myImg = $("#map-office");
    console.log(myImg)
    var currWidth = myImg.width()
    console.log(currWidth)
    if(currWidth == 100) return false;
    else{
        myImg.css("width", (currWidth - 100));}
}

//side bar
function openNav(ele) {
    $(ele).css('right','0');
}

function closeNav(ele) {
    $(ele).css('right','-250px');
}