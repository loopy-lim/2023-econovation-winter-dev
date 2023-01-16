const projectImg = {
  0: "./static/images/theEcono_1_1.png",
  1: "./static/images/sleeper_1_1.jpg",
  2: "./static/images/gikhub_1_1.png",
  3: "./static/images/date_now_1_1.jpg",
  4: "./static/images/esoup_1_1.png",
  5: "./static/images/gagule_1_1.png",
};

document.addEventListener("DOMContentLoaded", () => {
  const projectList = document.querySelectorAll(".project-list>div");
  const mouseDelay = document.querySelector(".mouse-delay");
  const mouseDelayInner = document.querySelector(".mouse-inner");

  projectList.forEach((project, index) => {
    project.addEventListener("mouseover", (e) => {
      mouseDelayInner.style.backgroundImage = `url("${projectImg[index]}")`;
      mouseDelay.classList.add('project-img');
    });
    project.addEventListener("mouseout", (e) => {
      mouseDelayInner.style.backgroundImage = "";
      mouseDelay.classList.remove('project-img');
    });
  });
});