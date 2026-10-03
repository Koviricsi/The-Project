const decCont = document.getElementById("header-decoration");
const decImgs = document.getElementsByClassName("hdec");
const speed = 0.3;
const degree = 0.6;
let velocities = [];

for (const x of decImgs) {
  const maxW = Math.max(0, decCont.clientWidth - x.clientWidth);
  const maxH = Math.max(0, decCont.clientHeight - x.clientHeight);

  const w = Math.floor(Math.random() * maxW);
  const h = Math.floor(Math.random() * maxH);

  x.style.left = w + "px";
  x.style.top = h + "px";
  x.style.rotate = "0deg";

  velocities.push({
    x: (Math.random() * speed + 0.01) * (Math.random() < 0.5 ? 1 : -1),
    y: (Math.random() * speed + 0.01) * (Math.random() < 0.5 ? 1 : -1),
    r: (Math.random() * degree + 0.01) * (Math.random() < 0.5 ? 1 : -1),
  });
}

function updateFrame() {
  const contWidth = decCont.clientWidth;
  const contHeight = decCont.clientHeight;

  for (let i = 0; i < decImgs.length; i++) {
    const img = decImgs[i];
    const vel = velocities[i];
    const imgWidth = img.clientWidth;
    const imgHeight = img.clientHeight;

    const maxX = contWidth - imgWidth;
    const maxY = contHeight - imgHeight;

    let nextX = parseFloat(img.style.left) + vel.x;
    let nextY = parseFloat(img.style.top) + vel.y;
    let nextR = parseFloat(img.style.rotate) + vel.r;

    if (nextX <= 0) {
      nextX = 0;
      vel.x = Math.abs(vel.x);
      vel.r = (Math.random() * degree + 0.2) * (Math.random() < 0.5 ? 1 : -1);
    } else if (nextX >= maxX) {
      nextX = maxX;
      vel.x = -Math.abs(vel.x);
      vel.r = (Math.random() * degree + 0.2) * (Math.random() < 0.5 ? 1 : -1);
    }
    img.style.left = nextX + "px";

    if (nextY <= 0) {
      nextY = 0;
      vel.y = Math.abs(vel.y);
      vel.r = (Math.random() * degree + 0.2) * (Math.random() < 0.5 ? 1 : -1);
    } else if (nextY >= maxY) {
      nextY = maxY;
      vel.y = -Math.abs(vel.y);
      vel.r = (Math.random() * degree + 0.2) * (Math.random() < 0.5 ? 1 : -1);
    }
    img.style.top = nextY + "px";

    nextR = ((nextR % 360) + 360) % 360;
    img.style.rotate = nextR + "deg";
  }

  requestAnimationFrame(updateFrame);
}

requestAnimationFrame(updateFrame);
