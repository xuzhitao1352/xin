var log = console.log;
/*第一排视频项*/
var slide_item = document.querySelectorAll(".swiper-right-box .item");
//top鼠标交互事件
for(var i = 0;i<slide_item.length;i++){
    slide_item[i].onmouseenter = function(){
        var span = this.children[1];
        var title = span.innerText;
        span.style.display = "none";
        //获取图片高度
        var h =this.children[0].offsetHeight;
        //获取图片top
        var t = this.children[0].offsetTop;
        //创建盒子(背景)
        var b = document.createElement("div");
        b.style.height = h+"px";
        b.style.top = t+"px";
        b.className = "active";
        b.innerHTML = `
            <div class="title">${title}</div>
            <div>
                <b>up主:??????</b>
                <b>up主:13.6万</b>
                <i></i>
            </div>
        `;
        this.appendChild(b);
        
    };
    slide_item[i].onmouseleave = function(){
        var title = this.children[1];
        title.style.display = "inline";
        var b =this.children[2];
        this.removeChild(b);
    };
}
//推广动漫交互
var tg = document.querySelectorAll(".generalize-bottom-left-test");
for(var i =0;i<tg.length;i++){
    tg[i].onmouseenter = function(){
        //获取第一个子元素img
        var img = this.children[0];
        //获取标题内容
        var title = this.children[1];
        title.style.color = "skyblue";
        //获取img宽高
        var h = img.offsetHeight;
        var w = img.offsetWidth;
        //创建div并设置样式
        var div = document.createElement("div");
        div.className = "bg";
        div.style.width = w+"px";
        div.style.height = h+"px";
        this.appendChild(div);
        var p = document.createElement("p");
        p.style.height = 22+"px";
        p.innerHTML = `
            <span>20:02</span>
            <i></i>
        `;
        //让p标签始终在图片底部
        p.style.top = (h-25)+"px";
        div.appendChild(p);
    };
    tg[i].onmouseleave = function(){
        var title = this.children[1];
        title.style.color = "";
        var div = this.children[2];
        this.removeChild(div);
    };
}
//鼠标交互事件
var dh = document.querySelectorAll(".donghua-body-box");
for(var i =0;i<dh.length;i++){  
    dh[i].onmouseenter = function(){
        //获取播放数以及观看人数元素
        var bfs = this.children[2];
        //设置动画
        // bfs.className = "down";
        bfs.className = "down";
        //获取第一个子元素img
        var img = this.children[0];
        //获取标题内容
        var title = this.children[1];
        title.style.color = "skyblue";
        //获取img宽高
        var h = img.offsetHeight-10;
        var w = img.offsetWidth;
        //创建div并设置样式
        var div = document.createElement("div");
        div.className = "bg";
        div.style.width = w+"px";
        div.style.height = h+"px";
        this.appendChild(div);
        var p = document.createElement("p");
        p.innerHTML = `
            <span>20:02</span>
            <i></i>
        `;
        div.appendChild(p);
    };
    dh[i].onmouseleave = function(){
        var title = this.children[1];
        title.style.color = "";
        var div = this.children[3];
        this.removeChild(div);
        //获取播放数以及观看人数元素
        var bfs = this.children[2];
        //设置动画
        bfs.className = "up";
    };
}