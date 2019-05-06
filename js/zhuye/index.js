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
//视频项进出交互事件
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
        //设置动画02
        bfs.className = "up";
    };
}
//特别推荐进出交互
var tj = document.querySelectorAll(".tebietuijian-bottom-left-box");
for(var i = 0;i<tj.length;i++){
    tj[i].onmouseenter = function(){
        var i = document.createElement("i");
        //描述
        var ms = this.children[2];
        ms.style.color = "skyblue";
        this.appendChild(i);
        var img = this.children[0];
        var w = img.offsetWidth;
        var h = img.offsetHeight;
        i.style.top = (h-i.offsetHeight-6)+"px";
        i.style.left = (w-i.offsetWidth-6)+"px";
    }
    tj[i].onmouseleave = function(){
        var i = this.children[3];
        this.removeChild(i);
        //描述
        var ms = this.children[2];
        ms.style.color = "";
    }    
}

//侧边栏鼠标交互(弹出盒子)
function tanchu(that,div){
    //弹出盒子
    var h = that.offsetHeight;
    div.className = "active";
    div.style.bottom = (h+2)+"px";
    // 盒子内容
    div.innerHTML = `
    <h6>《博人传2 火影忍者新时代》十尾恶化与九尾背水一战 十尾分裂者巢穴</h6>
    <p><span class = "left">用户名</span><span class="line">|</span><span class = "right">2019-05-05 19:00</span></p>
    <em class="hr"></em>
    <div class="content">
        <img src="./images/cebianlan.webp" >
        <span>这是一个忍者的世界。从小身上封印着邪恶的九尾妖狐，鸣人受尽了村人的冷落，只是拼命用各种恶作剧试图吸引大家的注意力。好在还是有依鲁卡老师关心</span>
    </div>
    <em class="hr"></em>
    <p><span class="glyphicon glyphicon-play-circle"></span>71.5万<span class="glyphicon glyphicon-list-alt"></span>6650<span class="glyphicon glyphicon-star-empty"></span>1.6万<span class="glyphicon glyphicon-download"></span>2.2万</p>
    `;
    that.append(div);
    //文字样式
    var tit = that.children[1];
    tit.style.color = "skyblue";
    
};
var rbox = document.querySelectorAll(".donghua-body-right >.donghua-body-right-quanbu:not(:first-child)");
for(var i = 0;i<rbox.length;i++){
    rbox[i].addEventListener("mouseenter",function(){
        //弹出盒子
        var div = document.createElement("div");
        tanchu(this,div);
        var that = this;
        div.addEventListener("mouseenter",function(){
            var tit = that.children[1];
            tit.style.color = "";
            that.removeChild(this);
        });
    });
    rbox[i].addEventListener("mouseleave",function(){
        var tit = this.children[1];
        tit.style.color = "";
        var div = this.children[2];
        this.removeChild(div);
    });
}

//右盒子(给标题第一个设置弹出盒子)
//>:first-child获取第一个亲儿子 
var rbox_f = document.querySelectorAll(".donghua-body-right >:first-child");
log(rbox_f);
for(var i =0;i<rbox_f.length;i++){
    rbox_f[i].addEventListener("mouseenter",function(e){
        var i = document.createElement("i");
        //获取img
        var img = this.children[1];
        var h = img.offsetHeight;
        var w = img.offsetWidth;
        //基于上级定位元素的left值
        var l = img.offsetLeft;
        this.appendChild(i);
        var icon = this.children[3];
        var iwh = icon.offsetHeight;
        //设置样式
        i.style.left = (w+l-iwh-3)+"px";
        i.style.top = (h-iwh-1)+"px";
        //弹出盒子
        var div = document.createElement("div");
        tanchu(this,div);
        var that = this;
        div.addEventListener("mouseenter",function(){
            var tit = that.children[2].children[0];
            tit.style.color = "";
            that.removeChild(this);
            var i = that.children[3];
            that.removeChild(i);
        });
    });
    rbox_f[i].addEventListener("mouseleave",function(){
        var tit = this.children[2].children[0];
        tit.style.color = "";
        var i = this.children[3];
        this.removeChild(i);
        var div = this.children[3];
        this.removeChild(div);
    });
}
