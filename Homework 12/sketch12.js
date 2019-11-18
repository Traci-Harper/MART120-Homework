/*
    Author: Traci Harper
    Purpose: Adding Complex Functions
    Date: 11/17
    Revised Date:
*/


var x7 = 200;                   ///pink circle
var y7 = 150;
var diameter7 = 50;
var speed7; 
var speedY =5;


var x3 = 200;                 ///rect variables
var y3 = 230;
var widthRect = 60;
var heightRect = 10;
var movement3;               ///rect movement


var x = 50;                 ///player circle
var y = 50;
var diameter = 35;
var mousex = 0;           ///mouse variables
var mousey = 0;


var exitX=795;            ////exit variables
var exitY=550;

function setup()
{
    createCanvas(800,600);
    speed7 = Math.floor(Math.random()*10+1);
    movement3 = Math.floor(Math.random()*10+1); 
}
function draw()
{
    background(0);
    createPlayer();
    playerMovement();
    mouseClicked();
    pinkCircle();
    blueRectangle();
    movePinkCircle();
    moveBlueRectangle();
    createExit();
    //youWin();
    playerExit();

}

function createPlayer()
{
    fill(255,234,0);        
    circle(x,y,diameter);
    fill(0);
    ellipse (x,y,25,30);
}
function playerMovement()
{
    if (x >= width)         
    {
      x = 50;
    }

    if (keyIsDown(DOWN_ARROW)) 
    {
      y += 10;
    } 
    else if (keyIsDown(UP_ARROW)) 
    {
      y -= 10;
    }
    else if (keyIsDown(RIGHT_ARROW)) 
    {
      x += 10;
    }
    else if (keyIsDown(LEFT_ARROW)) 
    {
      x -= 10;
    }
  
}
function mouseClicked() 
  { 
    fill(57,255,20)
    circle (mousex, mousey, 25); 
    mousex = mouseX;
    mousey = mouseY;
  
  }
function pinkCircle()
{
    fill(255,50,255);                      
    circle(x7,y7,diameter7);
}
function blueRectangle()
{
    fill (31,4,170);                       
    rect(x3,y3,widthRect,heightRect);
}
function movePinkCircle()
{
    if (x7 >= width-diameter7/2 || x7 <= diameter7/2)      
    {
      speed7 *= -1;
    }
    else if(y7 >= height-diameter7/2 || y7 <= diameter7/2)
    {
      speedY *= -1;
    }
    x7 += speed7;
    y7 += speedY;
}  
function moveBlueRectangle()
{
    if(y3 >= height-heightRect || y3 <= heightRect-10)      
    {
      movement3 *= -1;
    }
    y3 += movement3;
    }
function createExit()
{
    fill (57,255,20);                      
    rect(exitX,exitY,15,70);
    textSize(15);
    fill(255,255,255);
    text ('Exit', 765,540);
}
function youWin()
{
    print (text)
    textSize(15);
    fill(255,255,255);
    text ('You Win!', 290,390);
}
function playerExit()
{
  if(x >= exitX-5 && y >= exitY-5)      
  {
    print (text)
    textSize(25);
    fill(255,255,255);
    text ('You Win!', 290,390);
    playerMovement=math.floor;
  }
  
}



