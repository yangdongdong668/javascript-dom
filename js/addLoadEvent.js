//优化页面加载完成后执行的函数
function addLoadEvent(func){
    let oldonload = window.onload;
    if(typeof window.onload != "function"){
      window.onload = func;
    }else{
      window.onload = function(){
        oldonload();
        func();
      }
    }
  }