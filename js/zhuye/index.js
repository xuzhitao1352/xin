var log = console.log;
/*第一排视频项*/
var slide_item = document.querySelectorAll(".swiper-right-box .item");
//鼠标交互事件
for(var i = 0;i<slide_item.length;i++){
    slide_item[i].onmouseenter = function(){
        log(this);
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

