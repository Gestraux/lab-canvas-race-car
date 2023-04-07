const canvas = document.querySelector("canvas");
canvas.style.border = "2px solid black";

const ctx = canvas.getContext("2D");

const introScreen = document.querySelector(".game-intro");
const startBtn = document.querySelector("#start-button");
const restartBtn = document.querySelector("#restart");

const backgroundImage = new Image();
backgroundImage.src = "../images/road.png";

const carImage = new Image();
carImage.src = "../images/car.png";

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    console.log("start game");
    startScreen.style.display = "none";
    canvas.style.display = "block";
  }

  const animate = () => {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(carImage, 0, 0, canvas.width, canvas.height);
    
    let AnimationFrameId; 
    
    if(gameover) {
      cancelAnimationFrame(AnimationFrameId);
      restartBtn.style.display = "block";
    }
    else {
      AnimationFrameId = requestAnimationFrame(animate);
    }
  }

  function start() {
    startBtn.style.display = "none";
    canvas.style.display = "block";

    animate();
  }

  function restart() {
    gameover = false;
    score = 0;
    start();
  }

  document.addEventListener("keydown", event => {
    if (event.code === "ArrowLeft") {
      isCarGoingLeft = true;
    }
    iif (event.code === "ArrowRight") {
      isCarGoingRight = true;
    }
  })

  document.addEventListener("keydown", event => {
      isCarGoingLeft = false;
      isCarGoingRight = false;
  })
  animate()
};
