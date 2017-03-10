/*Created by Administrator on 2016/11/19.*/
var EventUtil = {
    //检测绑定事件
    addHandler : function (element,type,handler) {
        if (element.addEventListener){
            element.addEventListener(type,handler,false)
        }else if (element.attachEvent){
            element.attachEvent("on"+type,handler);
        }else {
            element["on"+type] = handler ;
        }
    },//对象逗号连接
    //移除事件
    removeHandler : function (element,type,handler) {
        if (element.removeEventListener){
            element.removeEventListener(type,handler,false) ;
        }else if(element.detachEvent){
            element.detachEvent("on"+type,handler)
        }else {
            element["on"+type] = null;
        }
    },
    getEvent : function (event) {
        return event?event:window.event;
    },
    getTarget : function (event) {
        return event.target||event.srcElement ;
    },
    preventDefault : function (event) {
        if (event.preventDefault){
            event.preventDefault();
        }else{
            window.event.returnValue = false ;
        }
    },
    cancelBubble : function (event) {
        if (event.stopPropagation){
            event.stopPropagation() ;
        }else{
            event.cancelBubble = true ;
        }
    }
};