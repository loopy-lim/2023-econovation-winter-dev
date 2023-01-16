const projectImg = {
  0: "./static/images/theEcono_1_1.png",
  1: "./static/images/sleeper_1_1.jpg",
  2: "./static/images/gikhub_1_1.png",
  3: "./static/images/date_now_1_1.jpg",
  4: "./static/images/esoup_1_1.png",
  5: "./static/images/gagule_1_1.png",
};
let direction = "";

document.addEventListener("DOMContentLoaded", () => {
  const projectList = document.querySelectorAll(".project-list>div");
  const mouseDelay = document.querySelector(".mouse-delay");
  const projectImgElement = document.querySelector(".clipped-img");
  
  projectList.forEach((project, index) => {
    project.addEventListener("mouseover", (e) => {
      projectImgElement.setAttribute("xlink:href", `${projectImg[index]}`);
      mouseDelay.classList.add("project-img");
    });
    project.addEventListener("mouseout", (e) => {
      projectImgElement.setAttribute("xlink:href", "");
      mouseDelay.classList.remove("project-img");
    });
  });

  let oldx = 0;
  let oldy = 0;
  const mousemovemethod = (e) => {
    if (e.pageX > oldx && e.pageY == oldy) {
      direction = "East";
    } else if (e.pageX == oldx && e.pageY > oldy) {
      direction = "South";
    } else if (e.pageX == oldx && e.pageY < oldy) {
      direction = "North";
    } else if (e.pageX < oldx && e.pageY == oldy) {
      direction = "West";
    }
  };

  document.addEventListener("mousemove", mousemovemethod);
});
