const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// //canvas.width = 200;
// //canvas.width = window.innerwidth;

// //3 main methods for rectangles------------------------------------
// //fillRect()------------------------------------------
// ctx.fillStyle = 'red';
// ctx.fillRect(20, 20, 150, 100); //(x,y,width,height)
// ctx.fillStyle = 'blue';
// ctx.fillRect(200, 20, 150, 100);

// //strokeRect()------------------------------
// ctx.lineWidth = 5;
// ctx.strokeStyle = 'green';
// ctx.strokeRect (100,200,150,100);

// //clearRect()----------------------
// ctx.clearRect(25,25,140,90);

// //fillText()-------------------
// ctx.font = '30px Arial';
// ctx.fillStyle = "purple";
// ctx.fillText('Hello World',400,50);

// //strokeText()----------------------
// ctx.lineWidth = 1;
// ctx.strokeStyle = 'orange';
// ctx.strokeText('Hello World',400,100);

// Paths----------------------------------------------------

// //upside-down triangle-------------------------------------------------------------
// ctx.beginPath();
// ctx.moveTo(50,50);
// ctx.lineTo(150, 50); //draw a straight line------------------
// ctx.lineTo(100,200);
// ctx.lineTo(50,50); //ctx.closePath(); will give the same affect----------------
// //ctx.stroke();
// ctx.fillStyle = 'coral'; 
// ctx.fill(); // must be a complete shape to fill--------------------

// //triangle---------------------------------------------------------------------
// ctx.beginPath();
// ctx.moveTo(200,50);
// ctx.lineTo(150,200);
// ctx.lineTo(250,200);
// ctx.closePath();
// ctx.stroke();

// //Rectangle----------------------------------------------------------------------
// ctx.beginPath();
// ctx.rect(300,50,150,100);
// ctx.fillStyle = 'teal';
// ctx.fill();

// //Arc (circle) (x, y, radius, startAngle, endAngle, anticlockwise)--------------------------------
// //perfect circle endAngle = Math.PI * 2 example: (75,75,50,0, Math.PI * 2, true);--------------------
// //arcTo (x1, y1, x2, y2, radius)----------------------------------------------------------------
// //quadraticCurveTo(cp1x, cp1y, x, y) cp = control point (like an eyebrow)----------------------------------
// //bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) (like a bridge)---------------------------------------------
// ctx.beginPath();

// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;

// //Draw the head---------------------------
// ctx.arc(centerX,centerY,200,0, Math.PI * 2);

// //Move to mouth-----------------------------
// ctx.moveTo(centerX + 100, centerY);

// //Draw the mouth-----------------------------------
// ctx.arc(centerX, centerY, 100, 0, Math.PI, false);

// //Move left eye-------------------------------
// ctx.moveTo(centerX - 60, centerY - 80);
// //Draw left eye---------------------------------
// ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);

// //Move to right eye--------------------------------
// ctx.moveTo(centerX +100, centerY -80);
// //Draw right eye-------------------------------------
// ctx.arc(centerX +80, centerY -80, 20, 0, Math.PI * 2);

// //quadratic Curve (speech Bubble)--------------------------------
// ctx.moveTo(75,25);
// ctx.quadraticCurveTo(25,25,25,62.5);
// ctx.quadraticCurveTo(25,100,50,100);
// ctx.quadraticCurveTo(50,120,30,125);
// ctx.quadraticCurveTo(60,120,65,100);
// ctx.quadraticCurveTo(125,100,125,62.5);
// ctx.quadraticCurveTo(125,25,75,25);

// ctx.stroke();

// //Animation 1----------------------------------------------

// const circle = {
//     x: 200,
//     y: 200,
//     size: 30, //radius
//     dx: 5,
//     dy: 4
// }

// function drawCircle() {
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
//     ctx.fillStyle = 'purple';
//     ctx.fill();
// }

// function update () {
//     ctx.clearRect(0,0, cavas.width, canvas.height);

//     drawCircle();

//     //change position-------------------------------
//     circle.x += circle.dx;
//     circle.y += circle.dy;

//     //Detect side walls-------------------------------
//     if(circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
//         circle.dx *= -1; // circle.dx = circle.dx * -1
//     }

//     //Detect top and bottom walls------------------------------------
//     if(circle.x + circle.size > canvas.height || circle.y - circle.size < 0) {
//         circle.dy *= -1;
//     }

//     requestAnimationFrame(update); //drawing circle over and over in same position if used alone--------------

// }

// update();

// //Animation 2 - Character--------------------------------------

// const image = document.getElementById('source');

// const player = {
//     w: 50, 
//     h: 70,
//     x: 20,
//     y: 200,
//     speed: 5,
//     dx: 0,
//     dy: 0
// };

// function drawPlayer () {
//     ctx.drawImage(image, player.x, player.y, player.w, player.h);
// }

// function clear() {
//     ctx.clearRect(0,0,canvas.width, canvas.height);
// }

// function newPos () {
//     player.x += player.dx;
//     player.y += player.dy;

//     detectWalls();
// }

// function detectWalls() {
//     //left wall--------------------------------------------
//     if (player.x < 0) {
//         player.x = 0;
//     }

//     //right wall--------------------------------------------
//     if (player.x + player.w > canvas.width) {
//         player.x = canvas.width - player.w;
//     }

//     //top wall------------------------------------------
//     if (player.y < 0) {
//         player.y = 0;
//     }

//     //bottom wall--------------------------------------------
//     if (player.y + player.h > canvas.height) {
//         player.y = canvas.height - player.h;
//     }
// }

// function update() {
//     clear();
    
//     drawPlayer();

//     newPos();

//     requestAnimationFrame(update);
// }
// function moveUp () {
//     player.dy = -player.speed;
// }
// function moveDown () {
//     player.dy = player.speed;
// }
// function moveLeft () {
//     player.dx = -player.speed;
// }
// function moveRight () {
//     player.dx = player.speed;
// }

// function keyDown(e) {
//     //console.log(e.key);
//     if(e.key === 'ArrowRight' || e.key === 'Right') {
//         moveRight();
//     }else if (e.key === 'ArrowLeft' || e.key === 'Left') {
//         moveLeft();
//     }else if (e.key === 'ArrowUp' || e.key === 'Up') {
//         moveUp();
//     }else if (e.key === 'ArrowDown' || e.key === 'Down') {
//         moveDown();
//     }
// }

// function keyUp(e) {
//     if (
//         e.key == 'Right' ||
//         e.key == 'ArrowRight' ||
//         e.key == 'Left' ||
//         e.key == 'ArrowLeft' ||
//         e.key == 'Up' ||
//         e.key == 'ArrowUp' ||
//         e.key == 'Down' ||
//         e.key == 'ArrowDown'
//     ) {
//         player.dx = 0;
//         player.dy = 0;
//     }
// }

// update();

// document.addEventListener('keydown', keyDown);
// document.addEventListener('keyup', keyUp);