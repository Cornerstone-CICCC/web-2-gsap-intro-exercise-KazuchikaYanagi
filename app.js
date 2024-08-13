// PUT YOUR CODE HERE
const timeline = gsap.timeline({ repeat: -1 });

timeline
  .from(".red", { x: -200, y: -200, duration: 0.5, delay: 0.5 })
  .from(".green", { x: 200, y: -200, duration: 0.5 })
  .from(".blue", { x: 200, y: 200, duration: 0.5 })
  .from(".yellow", { x: -200, y: 200, duration: 0.5 })
  .to(".red", {
    x: "100vw",
    left: -200,
    borderRadius: "50%",
    backgroundColor: "green",
    duration: 0.8,
  })
  .to(
    ".green",
    {
      y: "100vh",
      top: -200,
      borderRadius: "50%",
      backgroundColor: "blue",
      duration: 0.8,
    },
    "<"
  )
  .to(
    ".blue",
    {
      x: "0vw",
      left: 0,
      borderRadius: "50%",
      backgroundColor: "yellow",
      duration: 0.8,
    },
    "<"
  )
  .to(
    ".yellow",
    {
      y: "0vh",
      top: 0,
      borderRadius: "50%",
      backgroundColor: "red",
      duration: 0.8,
    },
    "<"
  )
  .to(".red", { x: "100vw", left: 0, duration: 1 })
  .to(".green", { x: "100vw", left: 0, duration: 1 }, "<")
  .to(".blue", { x: -200, bottom: 0, duration: 1 }, "<")
  .to(".yellow", { x: -200, left: 0, duration: 1 }, "<");
