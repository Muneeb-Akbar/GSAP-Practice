// gsap.from("#page1 #box " , {
//    scale: 0.5,
//    duration: 1,
//    delay: 0.5,
//    rotate: 360,
// });

gsap.to("#page2 h1", {
  transform: "translateX(-138%)",
  scrollTrigger: {
    trigger: "#page2 ",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -60%",
    scrub: true,
    pin: true,
  },
});
gsap.to("#page3 h1", {
  transform: "translateX(-90%)",
  scrollTrigger: {
    trigger: "#page3 ",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -30%",
    scrub: true,
    pin: true,
  },
});

var path = "M 10 500 Q 900 500 1800 500";
var finalPath = "M 10 500 Q 900 500 1800 500";

var string = document.querySelector("#page1");
var isMouseDown = false;

// Function to handle mouse move while dragging
function handleMouseMove(s) {
  if (isMouseDown) {
    path = `M 10 500 Q ${s.clientX} ${s.clientY} 1800 500`;

    gsap.to("svg path", {
      attr: {
        d: path,
      },
      duration: 0.1,
      ease: "power3.out",
    });
  }
}

// Function to animate back to original path
function animateBack() {
  gsap.to("svg path", {
    attr: {
      d: finalPath,
    },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
}

// Mouse down - start dragging
string.addEventListener("mousedown", (s) => {
    console.log("click and drag");
  isMouseDown = true;
  path = `M 10 500 Q ${s.clientX} ${s.clientY} 1800 500`;

  gsap.to("svg path", {
    attr: {
      d: path,
    },
    duration: 0.1,
    ease: "power3.out",
  });
});

// // Mouse move - only animate if mouse is down
string.addEventListener("mousemove", handleMouseMove);

// Mouse up - stop dragging and animate back
string.addEventListener("mouseup", () => {
  isMouseDown = false;
  animateBack();
});

// Mouse leave - stop dragging and animate back
string.addEventListener("mouseleave", () => {
  isMouseDown = false;
  animateBack();
});
