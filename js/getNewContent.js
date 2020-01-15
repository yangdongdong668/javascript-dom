function getNewContent(){
    let request = getHTTPObject();
    if(request){
        request.open("GET","example.txt",true);  //三个参数：请求类型，要访问的文件，是否异步
        request.onreadystatechange = function(){
            if(request.readyState ==4){
                let para = document.createElement("p");
                let txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    }else{
        alert("sorry,your browser doesn't support XMLHttpRequest");
    }
}
addLoadEvent(getNewContent);

//服务器在想XMLHttpRequest对象发回响应时，该对象有许多属性可用，浏览器会在不同阶段更新 readyState 属性的值，它有5个可能值：
//0：表示未初始化
//1：表示正在加载
//2：表示加载完毕
//3：表示正在交互
//4：表示完成