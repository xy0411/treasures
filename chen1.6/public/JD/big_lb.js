window.onload = function(){
    autoMove('img','span');
    popshow();
    show();
    time();
    change();
    changeTwo();
    wrapper();
    btn();
    changeThree();
}

// 连续三张小图片轮播图
function changeThree(){
    var sw = document.getElementById("sw");
    var lis = sw.getElementsByTagName("li");
    var i = 0;
    setInterval(function(){
        if(i==2){
            i=0;
        }else{
            i++;
        }
        for(var j=0;j<lis.length;j++){
            lis[j].style.opacity = "0";
            lis[j].style.zIndex = "0";
            if(j==i){
                lis[i].style.opacity = "1";
                lis[i].style.zIndex = "1";
            }
        }
    },9000);
}

// 连续四张图片轮转图
function btn(){
    var seckillList = document.getElementsByClassName("seckill-list")[0];
    var prev = document.getElementsByClassName("slider_control_prev")[0];
    var next = document.getElementsByClassName("slider_control_next")[0];
    var sl = seckillList.getElementsByClassName("slider_list")[0];
    var wrapper = sl.getElementsByClassName("slider_wrapper")[0];
    var i = 0;
    prev.onclick = function(){
        i=i+800;
        if(i>800){
            i=0;
        }
        wrapper.style.transform = "translate3d(-"+i+"px,0px,0px)";
    }
    next.onclick = function(){
        i=i-800;
        if(i<0){
            i=800;
        }
        wrapper.style.transform = "translate3d(-"+i+"px,0px,0px)";
    }
}

// 品牌秒杀轮播图
function wrapper(){
    var sb = document.getElementsByClassName("seckill-brand")[0];
    var wrapper = sb.getElementsByClassName("slider_wrapper")[0];
    var indicators = document.getElementsByClassName("slider_indicators_btn");
    var i = 180;
    setInterval(function(){
        if(i==360){
            i = 180;
            indicators[1].classList.add("slider_indicators_btn_active");
            indicators[0].classList.remove("slider_indicators_btn_active");
        }else{
            i = i+180;
            indicators[0].classList.add("slider_indicators_btn_active");
            indicators[1].classList.remove("slider_indicators_btn_active");
        }
        wrapper.style.transform = "translate3d(-"+i+"px,0px,0px)";
    },3000);
}

// 搜索栏下边红字变化
function change(){
    var changed = document.getElementById("changed");
    var arr = ['心动的家装','万达心选店'];
    var i = 1;
    setInterval(function(){
        i++;
        if(i%2==0){
            changed.innerHTML = arr[1];
        }else{
            changed.innerHTML = arr[0];
        }
    },4000);
}

// 搜索栏内容变化
function changeTwo(){
    var bg = document.getElementById("searchbg");
    var arr = ['甄选浪漫 双份立减','厨房置物架','罗技鼠标','小米空气净化器','电视盒子','洗发水套装','触摸屏笔记本','华帝燃气灶','华为盒子'];
    var i = 0;
    setInterval(function(){
        bg.innerHTML = arr[i];
        i++;
        if(i==arr.length){
            i=0;
        }
    },8000);
}

// 京东限时秒杀倒计时
function time(){
    var cd = document.getElementsByClassName("countdown-desc")[0];
    var strong = cd.getElementsByTagName("strong")[0];
    var timmers = document.getElementsByClassName("timmer__unit");
    setInterval(
        function(){
            var date = new Date();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            var currentDate = hours + ":00";
            strong.innerHTML = currentDate;
            if(hours==0||hours%2==0){
                timmers[0].innerHTML = '01';
            }else{
                timmers[0].innerHTML = '00';
            }
            if((60 - minutes -1)<10){
                timmers[1].innerHTML = '0' + (60 - minutes -1);
            }else{
                timmers[1].innerHTML = 60 - minutes -1;
            }
            if((60 - seconds -1)<10){
                timmers[2].innerHTML = '0' + (60 - seconds -1);
            }else{
                timmers[2].innerHTML = 60 - seconds -1;
            }
        },1000);
}

// 顶部栏hover显示内容
function show(){
    var fs = document.getElementsByClassName("fhover");
    var dds = document.getElementsByClassName("dropdown-layer");
    var mobile = document.getElementsByClassName("mobile_pop")[0];
    for(var i=0;i<fs.length;i++){
        fs[i].onmouseover = function(){
            dds[(this.id).slice(1)].style.display = "block";
            fs[(this.id).slice(1)].style.backgroundColor = "#fff";
            if((this.id).slice(1)==4){
                mobile.style.display = "block";
            }
        }
        fs[i].onmouseout = function(){
            dds[(this.id).slice(1)].style.display = "none";
            fs[(this.id).slice(1)].style.backgroundColor = "#e3e4e5";
            if((this.id).slice(1)==4){
                mobile.style.display = "none";
            }
        }
    }
}

// 多类商品分类详细显示
function popshow(){
    var cate_menu = document.getElementById("cate_menu");
    var cate_pop = document.getElementById("cate_pop");
    var lis = cate_menu.getElementsByClassName("cate_menu_item");
    var divs = cate_pop.getElementsByClassName("cate_part");
    for(var i=0;i<lis.length;i++){
        this.timer = setTimeout(lis[i].onmouseover = function(){
            if(this.id !== undefined) { // 初始为监听到鼠标悬浮导致id==undefined
                divs[this.id-1].style.display = "block";
                lis[this.id-1].style.backgroundColor = "#666";
                cate_pop.style.display = "block";
                for(var j=0;j<divs.length;j++){
                    divs[j].onmouseover = function(){
                        divs[(this.id).slice(9)-1].style.display = "block";
                        cate_pop.style.display = "block";
                    }
                    divs[j].onmouseout = function(){
                        divs[(this.id).slice(9)-1].style.display = "none";
                        cate_pop.style.display = "none";
                    }
                }
            }
        },200);
        lis[i].onmouseout = function(){
            divs[this.id-1].style.display = "none";
            lis[this.id-1].style.backgroundColor = "white";
            cate_pop.style.display = "none";
            clearTimeout(this.timer);
        }
    }
}

// 最大轮播图
function autoMove(tagImg,tagSpan){
    var main = document.getElementById("main");
    var imgs = main.getElementsByTagName(tagImg);
    var spans = main.getElementsByTagName(tagSpan);
    function InitMove(index){
        for(var i=0;i<imgs.length;i++){
            imgs[i].style.opacity = '0';
            spans[i].style.background='#ccc';
        }
        imgs[index].style.opacity = '1';
        spans[index].style.background = 'red';
    }
    InitMove(0);
    var count = 1;
    function fMove(){
        if(count==imgs.length){
            count = 0;
        }
        InitMove(count);
        count++;
    }
    var scollMove = setInterval(fMove,2500);
    var btnleft = document.getElementById('btnleft');
    var btnright = document.getElementById('btnright');
    btnleft.onclick = function(){
        clearInterval(scollMove);
        // 每次点击都要清除一次定时器,不然会越来越快,迭代...
        if(count==0){
            count = imgs.length;
        }
        count--;
        InitMove(count);
        scollMove = setInterval(fMove,2500);
    }
    btnright.onclick = function(){
        clearInterval(scollMove);
        fMove();
        scollMove = setInterval(fMove,2500);
    }
}