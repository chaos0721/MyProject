/**
 * Created by Administrator on 2016/12/1.
 */
    $(window).on("load",function () {
        imgLocation() ;
        var imgObj = {"data": [{"src":"img_1.jpg"},{"src":"img_2.jpg"},{"src":"img_3.jpg"},{"src":"img_4.jpg"},{"src":"img_5.jpg"}]}
        window.onscroll =function () {
            if (scollSide()){
                $.each(imgObj.data,function (index,value) {
                    var box = $("<div>").addClass("box").appendTo("#container");
                    var content = $("<div>").addClass("content").appendTo(box) ;
                    $("<img />").attr("src","./images/"+$(value).attr("src")).appendTo(content) ;
                });
                imgLocation() ;
            }
        }
    })
 ;
function scollSide() {
    var box = $(".box") ;
    var scollMax = box.last().get(0).offsetTop+Math.floor(box.last().height()/2) ;
    var scollMin = $(document).height()+$(window).scrollTop() ;
    return scollMax<scollMin?true:false ;
}
function imgLocation() {
    var box = $(".box") ;
    var boxWidth = box.eq(0).width() ;
    var Hmb = Math.floor($("#container").width()/boxWidth) ;
    var boxArr = [] ;
    box.each(function (index,ele) {
        var boxHeight =box.eq(index).height() ;
        if (index<Hmb){
            boxArr[index] = boxHeight ;
        }else{
            var minBoxHeight = Math.min.apply(null,boxArr) ;
            var minIndex = $.inArray(minBoxHeight,boxArr) ;
            $(ele).css({
                "position" : "absolute" ,
                "left" : box.eq(minIndex).position().left ,
                "top" : minBoxHeight
            });
            boxArr[minIndex]+=box.eq(index).height() ;
        }
    })
}