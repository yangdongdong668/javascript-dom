//动态添加class
function styleHeaderSiblings(){
    if(!document.getElementsByTagName) return false;
    let header = document.getElementsByTagName("h1");
    console.log(header);
    for(let i =0;i<header.length;i++ in header){
        header[i].className = "intro";
    }
}
addLoadEvent(styleHeaderSiblings);