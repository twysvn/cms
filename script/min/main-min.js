function setCookie(e,t,n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);var i="expires="+o.toUTCString();document.cookie=e+"="+t+"; "+i}function getCookie(e){for(var t=e+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){for(var i=n[o];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return""}function notifications(e){e.preventDefault(),"inline"==document.getElementById("notifications").style.display?document.getElementById("notifications").style.display="none":(document.getElementById("notifications").style.display="inline",document.getElementById("notifications").style.top="4rem",document.getElementById("notifications").style.left="-2rem")}function sidebar(e){e.preventDefault(),"none"==document.getElementById("sidebar").style.display?(document.getElementById("sidebar").style.marginLeft="-78%",document.getElementById("sidebar").style.display="inline",document.getElementById("overlay").style.marginLeft="0",$("#sidebar").animate({marginLeft:"0px"},200,function(){}),mq.matches||($("nav").animate({width:"78%"},200,function(){}),$("#content").animate({width:"78%"},200,function(){})),setCookie("showsidebar","true",100),$("nav").children().first().css("display","none")):(document.getElementById("overlay").style.marginLeft="-22%",$("#sidebar").animate({marginLeft:"-22%"},200,function(){document.getElementById("sidebar").style.display="none"}),$("nav").animate({width:"100%"},200,function(){}),$("#content").animate({width:"100%"},200,function(){}),setCookie("showsidebar","false",100),$("nav").children().first().css("display","inline-block"))}function mobileSidebar(e){e.matches&&($("nav").children().first().css("display","inline-block"),$("#sidebar").css("display","none"),$("#overlay").css("marginLeft","-22%"))}function doAjax(url,type,data,callback){$.ajax({type:type,url:url,data:data,success:function(e){callback(e)},error:function(xhr,status,error){var err=eval("("+xhr.responseText+")");ret=err.Message}})}function hideAlerts(){$("#alert").fadeOut(150),$("#warning").fadeOut(150),$("#darken").fadeOut(250)}function showAlert(e,t,n,o,i){var a=$("#alert");a.find("h2").html(e),a.find("p").html(t),$("#darken").fadeIn(150),a.fadeIn(250),a.find("li").html("");for(var r=0;r<n.length;r++)a.find("li").append('<a href="javascript:void(0);" onclick="('+i[r]+')(event);" class="button '+o[r]+'">'+n[r]+"</a>")}function showWarning(e,t,n,o,i){var a=$("#warning");a.find("h2").html(e),a.find("p").html(t),$("#darken").fadeIn(150),a.fadeIn(250),a.find("li").html("");for(var r=0;r<n.length;r++)a.find("li").append('<a href="javascript:void(0);" onclick="('+i[r]+')(event);" class="button '+o[r]+'">'+n[r]+"</a>")}function navigateTo(url,root,back){var loc="";void 0==back&&(loc="javascript:document.location.reload();");var btn='<h3><img src="img/back.svg"><a href="javascript:void(0);" onClick="'+loc+'">Back</a></h3>';$.ajax({type:"GET",url:url,success:function(e){var t='<ul class="menu">\n'+btn+"\n</ul>\n";$(root).html(t+e)},error:function(xhr,status,error){alert("An error occured");var err=eval("("+xhr.responseText+")");alert(err.Message)}})}!function(e){function t(e,t){if(!(e.originalEvent.touches.length>1)){e.preventDefault();var n=e.originalEvent.changedTouches[0],o=document.createEvent("MouseEvents");o.initMouseEvent(t,!0,!0,window,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(o)}}if(e.support.touch="ontouchend"in document,e.support.touch){var n,o=e.ui.mouse.prototype,i=o._mouseInit,a=o._mouseDestroy;o._touchStart=function(e){var o=this;!n&&o._mouseCapture(e.originalEvent.changedTouches[0])&&(n=!0,o._touchMoved=!1,t(e,"mouseover"),t(e,"mousemove"),t(e,"mousedown"))},o._touchMove=function(e){n&&(this._touchMoved=!0,t(e,"mousemove"))},o._touchEnd=function(e){n&&(t(e,"mouseup"),t(e,"mouseout"),this._touchMoved||t(e,"click"),n=!1)},o._mouseInit=function(){var t=this;t.element.bind({touchstart:e.proxy(t,"_touchStart"),touchmove:e.proxy(t,"_touchMove"),touchend:e.proxy(t,"_touchEnd")}),i.call(t)},o._mouseDestroy=function(){var t=this;t.element.unbind({touchstart:e.proxy(t,"_touchStart"),touchmove:e.proxy(t,"_touchMove"),touchend:e.proxy(t,"_touchEnd")}),a.call(t)}}}(jQuery),$(document).ready(function(){var e=getCookie("showsidebar");"false"==e&&(document.getElementById("sidebar").style.display="none",document.getElementById("content").style.width="100%",document.getElementsByTagName("nav")[0].style.width="100%",document.getElementById("overlay").style.marginLeft="-22%")}),$(document).ready(function(){"true"==getCookie("showsidebar")&&$("nav").children().first().css("display","none"),matchMedia&&(mq=window.matchMedia("(max-width: 320pt)"),mq.addListener(mobileSidebar),mobileSidebar(mq))});