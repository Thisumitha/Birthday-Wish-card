const imageUrls = [
  "lot/20240404_163430.jpg",
  "lot/20240621_094943.jpg",
  "lot/20240621_110039.jpg",
  "lot/20240621_144732-AUTO_ENHANCE.jpg",
  "lot/20240621_144732.jpg",
  "lot/20240621_144830.jpg",
  "lot/20240621_144938 (2).jpg",
  "lot/20240621_144938.jpg",
  "lot/20240718_092350-POP_OUT (2).jpg",
  "lot/20240718_092350-POP_OUT.jpg",
  "lot/20240718_092407.jpg",
  "lot/20250307_144435.jpg",
  "lot/20250307_144511.jpg",
  "lot/20250307_145517 (2).jpg",
  "lot/20250307_145517.jpg",
  "lot/20250307_151353.jpg",
  "lot/20250307_153222.jpg",
  "lot/20250502_151222.jpg",
  "lot/20250502_151222~2.jpg",
  "lot/20250502_151225.jpg",
  "lot/20250502_151709.jpg",
  "lot/20250706_113630.jpg",
  "lot/20250706_113634.jpg",
  "lot/20250706_113640.jpg",
  "lot/20250706_113712.jpg",
  "lot/20250715_130524.jpg",
  "lot/20250715_131725-COLLAGE.jpg",
  "lot/20250715_131725.jpg",
  "lot/20250715_135519.jpg",
  "lot/20250715_135521.jpg",
  "lot/20250715_135525.jpg",
  "lot/20250715_135540.jpg",
  "lot/20250715_135546.jpg",
  "lot/20250715_135550.jpg",
  "lot/20250715_135612.jpg",
  "lot/20250715_135914.jpg",
  "lot/20250715_135929.jpg",
  "lot/20250715_135934.jpg",
  "lot/20250715_140007-POP_OUT.jpg",
  "lot/20250715_140007.jpg",
  "lot/20250715_140009.jpg",
  "lot/20250715_140213-ANIMATION.gif",
  "lot/20250715_140213.jpg",
  "lot/20250715_140216.jpg",
  "lot/20250715_140225.jpg",
  "lot/20250715_140228.jpg",
  "lot/20250715_140238.jpg",
  "lot/20250715_140243.jpg",
  "lot/20250715_140337-COLLAGE.jpg",
  "lot/20250715_140337.jpg",
  "lot/20250715_140348.jpg",
  "lot/20250715_140349.jpg",
  "lot/COLOR_POP (2).jpg",
  "lot/COLOR_POP.jpg",
  "lot/filenames.txt",
  "lot/IMG-20220120-WA0229.jpg",
  "lot/IMG-20220120-WA0265.jpg",
  "lot/IMG-20221228-WA0004.jpg",
  "lot/IMG-20240323-WA0017.jpg",
  "lot/IMG-20240323-WA0018.jpg",
  "lot/IMG-20240323-WA0019.jpg",
  "lot/IMG-20240323-WA0020.jpg",
  "lot/IMG-20240330-WA0131.jpg",
  "lot/IMG-20250614-WA0042.jpg",
  "lot/IMG_20191101_151529.jpg",
  "lot/IMG_20240322_120236_754.jpg",
  "lot/tempFileForShare_20230830-202316.jpg",
  "lot/temp_output1.jpeg",
  "lot/temp_output2(2).jpeg",
  "lot/temp_output2(3).jpeg",
  "lot/temp_output3(3).jpeg",
  "lot/temp_output3(4).jpeg",
  "lot/temp_output3.jpeg",
  "lot/temp_output4.jpeg",
  "lot/WhatsAppImage2023-08-30at20.19.35.jpg",
  "lot/WhatsAppImage2023-08-30at20.19.36.jpg"
];



let index = 0;
const maxImages = window.innerWidth < 768 ? 15 : 30;
const imagesOnScreen = [];

function spawnRandomImage() {
  const title = document.getElementById("birthday-title");
  const cake = document.getElementById("birthday-cake");

  const titleRect = title?.getBoundingClientRect();
  const cakeRect = cake?.getBoundingClientRect();

  let x, y, tries = 0;
  do {
    x = Math.random() * window.innerWidth;
    y = Math.random() * window.innerHeight;
    tries++;
  } while (
    tries < 10 && (
      (titleRect && x > titleRect.left && x < titleRect.right && y > titleRect.top && y < titleRect.bottom) ||
      (cakeRect && x > cakeRect.left && x < cakeRect.right && y > cakeRect.top && y < cakeRect.bottom)
    )
  );

  const img = document.createElement("img");
  img.src = imageUrls[index % imageUrls.length];
  img.className = "trail-img";
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;
  document.body.appendChild(img);

  imagesOnScreen.push(img);
  index++;

  if (imagesOnScreen.length > maxImages) {
    const oldImg = imagesOnScreen.shift();
    oldImg.style.opacity = 0;
    setTimeout(() => oldImg.remove(), 500);
  }
}

// Spawn random image every 500ms
setInterval(spawnRandomImage, 500);

// Balloons
let balloonCount = 0;
function createBalloon() {
  if (balloonCount >= 10) return;
  const balloon = document.createElement("img");
  balloon.src = "assets/balloon.png";
  balloon.className = "balloon";
  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.setProperty('--float-x', `${Math.random() * 200 - 100}px`);
  document.body.appendChild(balloon);
  balloonCount++;
  setTimeout(() => {
    balloon.remove();
    balloonCount--;
  }, 12000);
}
setInterval(createBalloon, 1500);

// Confetti
const confettiCanvas = document.getElementById("confetti-canvas");
if (confettiCanvas && confetti) {
  confetti.create(confettiCanvas, { resize: true });
  setInterval(() => {
    confetti({
      spread: 70,
      particleCount: 40,
      origin: { y: 0.5 }
    });
  }, 5000);
}
