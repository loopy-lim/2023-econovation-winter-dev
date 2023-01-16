document.addEventListener("DOMContentLoaded", () => {
  const windowHeight = window.innerHeight;
  const peopleTitleElement = document.querySelector(".people-title");
  const peopleSubtitleElement = document.querySelector(".people-subtitle");
  const peopleTitleCoverElement = document.querySelector(".people-title-cover");
  let peopleValue = 0;

  const changePeopleValue = (value, title, subtitle) => {
    if (peopleValue != value) {
      peopleTitleCoverElement.classList.add("changed-text");
      setTimeout(() => {
        peopleTitleElement.innerText = title;
        peopleSubtitleElement.innerText = subtitle;
        peopleTitleCoverElement.classList.remove("changed-text");
      }, 300);
    }
  };

  document.addEventListener("scroll", (e) => {
    if (window.scrollY > windowHeight * 5) {
      changePeopleValue(2, "Industrious",  "계획 뿐만 아니라 의미 있는 결실을 이끌어 낼 수 있는 사람");
      peopleValue = 2;
    } else if (window.scrollY > windowHeight * 4) {
      changePeopleValue(1, "Cooperation",  "혼자가 아닌 팀의 소중함과 시너지를 이해하는 사람");
      peopleValue = 1;
    } else {
      changePeopleValue(0, "Passion", "배움과 성장을 끊임없이 추구하는 사람");
      peopleValue = 0;
    }
  });
});
