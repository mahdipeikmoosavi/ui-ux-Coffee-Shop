const imgBtn = document.getElementById("imgbtn");
const bodyTag = document.querySelector("body");


function main() {
  imgBtn.addEventListener("click", () => {
    bodyTag.classList.toggle("light");
    const img = imgBtn.children[0];
    img.setAttribute("src",
      img.getAttribute("src")
        === "./photo/sun1.jpg"
        ? "./photo/moon1.jpg"
        : "./photo/sun1.jpg"
    )


  })



  // listen(ball, 'mousedown touchstart')
  //   .start((e) => {
  //     e.preventDefault();
  //     pointer(ballXY.get()).start(ballXY);
  //   });
  // listen(document, 'mouseup touchend')
  //   .start(() => {
  //     spring({
  //       from: ballXY.get(),
  //       velocity: ballXY.getVelocity(),
  //       to: { x: 0, y: 0 },
  //       stiffness: 200,
  //       // mass: 1,
  //       // damping: 10
  //     }).start(ballXY);
  //   });




}
const menuContainer = document.querySelector(".menu-container");
menuContainer.addEventListener("click", function () {
  this.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", main);

// ScrollReveal .(https://github.com/jlmakes/scrollreveal)
