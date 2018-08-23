var zoomIn = true;
$(document).ready(function(){

    $('#multi-select').dropdown();
    //click icon search
    $('#icon-search').click(function(){
        $('#multi-select').click();
    })
    // Dragable
    $('#map-office').draggable();
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

});
function setHeightElement(ele){
    // set height for tab-content
    var height = $(window).height() - $(ele).offset().top;
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
function openNav() {
    $('#mySidenav').css('right','0');
}

function closeNav() {
    $('#mySidenav').css('right','-250px');
}