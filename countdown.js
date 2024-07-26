const countDownDate = new Date("Feb 29, 2027 00:59:59").getTime();

const interv = setInterval(() => {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const paragraph = document.querySelector(".countdown");
  paragraph.textContent = `${days} d : ${hours} h : ${minutes} m : ${seconds} s`;

  if (distance <= 0) {
    clearInterval(interv);

    paragraph.textContent = "Time to kick that bastard out!";
  }
}, 1000);
