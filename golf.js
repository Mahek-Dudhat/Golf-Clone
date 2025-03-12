//    FOR CUSTOME CURSOR ANIMATION:

let cursor = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursorBlur");

function mousemove() {
    document.addEventListener("mousemove", (dets) => {


        // clearTimeout(timeout);
        cursor.style.left = dets.x + "px";
        cursor.style.top = dets.y + "px";

        cursorBlur.style.left = dets.x - 200 + "px";
        cursorBlur.style.top = dets.y - 200 + "px";
        // let timeout = setTimeout(function () {
        //     cursor.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
        //     cursorBlur.style.transform = `translate(${e.clientX - 200}px,${e.clientY - 200}px)`;

        // })

    })
}

mousemove();

let a = document.querySelectorAll("nav a");
console.log(a);

a.forEach(function (ele) {
    ele.addEventListener("mouseenter", (e) => {

        //  cursor.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
        cursor.style.scale = 3;
        cursor.style.border = "1px solid white";
        cursor.style.backgroundColor = "transparent";
        cursor.style.transition = "all ease 0.5s";
        // console.log(e.clientX,e.clientY);
    })

    ele.addEventListener("mouseleave", (e) => {

        //  cursor.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
        cursor.style.scale = 1;
        cursor.style.border = "0px solid #95c11e";
        cursor.style.backgroundColor = "#95c11e";
        cursor.style.transition = "all ease 0.5s";
    })
})

let arrow = document.querySelector("#arrow");
console.log(arrow);

arrow.addEventListener("mouseenter", () => {

    cursor.style.scale = 3;
    cursor.style.border = "1px solid white";
    cursor.style.backgroundColor = "transparent";
    cursor.style.transition = "all ease 0.5s";

})

arrow.addEventListener("mouseleave", () => {
    cursor.style.scale = 1;
    cursor.style.border = "0px solid #95c11e";
    cursor.style.backgroundColor = "#95c11e";
    cursor.style.transition = "all ease 0.5s";
})


//FOR NAVBAR ANIMTION:

gsap.to("nav", {

    backgroundColor: "black",
    duration: 0.5,
    height: "11.5vh",
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        //markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }

})

// FOR MAIN SECTION ANIMATION:

gsap.to("#main", {

    backgroundColor: "black",
    scrollTrigger: {

        trigger: "#main",
        scroller: "body",
        //  markers: true,
        start: "top -25%",
        end: "top -100%",
        scrub: 1.5

    }
})


//FOR SCROLL TRIGGER:
gsap.from("#aboutUs #img1 img,#img2 img,#content", {

    y: 50,
    opacity: 0,
    duration: 2,
    stagger: 0.5,
    scrollTrigger: {
        trigger: "#aboutUs",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 58%",
        scrub: 1
    }
})



gsap.from(".cards", {

    scale: 0.8,
    opacity: 1,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".cards",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }
})

gsap.from("#quote1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#quote1",
        scroller: "body",
        //    markers:true,
        start: "top 50%",
        end: "top 47%",
        scrub: 2
    }

})

gsap.from("#quote2", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#quote2",
        scroller: "body",
        //    markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 2
    }

})

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        //    markers:true,
        start: "top 75%",
        end: "top 70%",
        scrub: 2
    }

})

