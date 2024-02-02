function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}
loco();

function loading(){
    var tl = gsap.timeline();
    tl.from(".line h1",{
        y:150,
        stagger:0.2,
        duration:0.6,
        delay:0.5
    })

    tl.from("#line1-part1, .line h2",{
        opacity:0,
        onstart:function(){ 
            var h5 = document.querySelector("#line1-part1 h5");
            var grow = 0;
            g = grow;

            setInterval(function(){
                if(g<100){
                    g++;
                    h5.innerHTML = g;
                }else{
                    h5.innerHTML = g;
                }
            },90)
        }
    })

    var now = document.querySelector("#now");
    var animate = document.querySelector(".animate");

    // Set the initial styles
    now.style.display = "block";
    animate.style.display = "none";

    // Function to toggle display
    function toggleDisplay() {
        if (now.style.display === "block") {
            now.style.display = "none";
            animate.style.display = "block";
        } else {
            now.style.display = "block";
            animate.style.display = "none";
        }
    }

    // Call toggleDisplay every second
    setInterval(toggleDisplay, 1000);

    tl.to(".wait p",{
        opacity:1,
    })

    tl.to(".loader",{
        opacity:0,
        duration:0.2,
        delay:1
    })
    tl.to(".loader",{
        display:"none"
    })

    tl.from("#page1",{
        y:1200,
        opacity:0,
        ease: "power4"
    })
    tl.from("#nav,.num",{
        opacity:0
    })
    tl.from(".hero h1",{
        y:120,
        stagger:0.2
    })
    tl.from("#page2",{
        opacity:0,
    })
}
loading();

function first(){
    window.onload = function() {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'  // You can also use 'auto' or 'instant'
        });
    }
}
first();

function cursor(){
    document.addEventListener("mousemove",function(dets){
        gsap.to(".cur",{
            left: dets.x,
            top: dets.y
        })
    })
    
    Shery.makeMagnet("#nav2 h4");
}
cursor();

function videoplayer(){
    var c = document.querySelector(".vc");
    var i1 = document.querySelector(".vc #i1");
    var i2 = document.querySelector(".vc #i2");
    var div = document.querySelector(".videocon")
    var img = document.querySelector(".videocon img")
    var v = document.querySelector(".videocon video")
    
    div.addEventListener("mousemove",function(dets){
        gsap.to(".cur",{
            opacity:0
        })
        gsap.to(c,{
            opacity:1,
            left: dets.x-520,
            top: dets.y-200
        })
    })
    div.addEventListener("mouseleave",function(){
        gsap.to(".cur",{
            opacity:1

        })
        gsap.to(c,{
            opacity:0,
            left: "70%",
            top: "-10%"
        })
    })
    var flag =0
    div.addEventListener("click",function(){
        if (flag===0){
            img.style.display = "none";
            console.log("1");
            v.play(); 
            console.log("2");
            c.style.height = "4vw";
            c.style.width = "4vw";
            i1.style.display = "none";
            i2.style.display = "block";
            flag = 1;
        }else{
            img.style.display = "block";
            v.pause(); 
            c.style.height = "10vw";
            c.style.width = "10vw";
            i1.style.display = "block";
            i2.style.display = "none";
            flag = 0;
        }
    })

}
videoplayer();


function shery(){
    Shery.imageEffect(".image",{
        style:5,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":"-9996999","range":[-9999999,9999999]},"aspect":{"value":0.7272749932567818},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.46,"range":[0,10]},"metaball":{"value":0.46,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.47,"range":[0,2]},"noise_scale":{"value":8.4,"range":[0,100]}},
        gooey:true
    })
}
// shery();

function flagani(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#flag",{
            x:dets.x,
            y:dets.y
        })
    })
    document.querySelector("#hero3").addEventListener("mouseenter",function(){
        gsap.to("#flag",{
            opacity:1
        })
    })
    document.querySelector("#hero3").addEventListener("mouseleave",function(){
        gsap.to("#flag",{
            opacity:0
        })
    })
}
flagani();

function create(){
    var clutter = ""
    var clutter2 = ""
    document.querySelector(".footer h1").textContent.split("").forEach(function (elem) {
    clutter += `<span>${elem}</span>`
    })
    document.querySelector(".footer h1").innerHTML = clutter
    document.querySelector(".footer h2").textContent.split("").forEach(function (elem) {
    clutter2 += `<span>${elem}</span>`
    })
    document.querySelector(".footer h2").innerHTML = clutter2


    document.querySelector(".footer-text").addEventListener("mouseenter", function () {
        var t1 = gsap.timeline()
    t1.to(".footer-text h1 span", {
        opacity: 0,
        stagger: 0.05
    })
    t1.to(".footer-text h2 span", {
        opacity: 1,
        stagger: 0.1
    })
    })
    document.querySelector(".footer-text").addEventListener("mouseleave", function () {
        var t2 = gsap.timeline()
        t2.to(".footer-text h2 span", {
            opacity: 0,
            stagger: 0.05
        })
        t2.to(".footer-text h1 span", {
            opacity: 1,
            stagger: 0.1,
        })
    
    })

}
create();


if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    //sheryjs ka code run karo eha par
    Shery.imageEffect(".image",{
        style:5,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":"-9996999","range":[-9999999,9999999]},"aspect":{"value":0.7272749932567818},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.46,"range":[0,10]},"metaball":{"value":0.46,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.47,"range":[0,2]},"noise_scale":{"value":8.4,"range":[0,100]}},
        gooey:true
    })
}
