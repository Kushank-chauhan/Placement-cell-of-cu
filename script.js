gsap.from("#about", {
    y: 150,
    scrollTrigger: {
      trigger: "#about",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 60%",
      scrub: 3,
    },
  });
  gsap.from("#contact", {
    y: -80,
    scrollTrigger: {
      trigger: "#contact",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 70%",
      scrub: 4,
    },
  });