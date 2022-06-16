/*
    Author: Traci Harper
    Purpose: Mini ATM Game
    Date: 12/16/22
    Revised Date:
*/


var x7 = 200;                ///pink cirlce
var y7 = 150;
var diameter7 = 50;
var speed7;
var speedY =5;


var x3 = 200;               ///rect variables
var y3 = 230;
var widthRect = 60;
var heightRect = 10;
var movement3;          ///rect movement


var x = 50;                 ///yellow circle
var y = 50;
var diameter = 35;
var mousex = 0;
var mousey = 0;

function setup()
{
    createCanvas(800,600);
    speed7 = Math.floor(Math.random()*10+1);
    movement3 = Math.floor(Math.random()*10+1);
}
function draw()
{
    background(0);
    fill(255,234,0);
    circle(x,y,diameter);
    fill(0);
    ellipse (x,y,25,30);
    fill(57,255,20)
    ellipse(mousex, mousey, 20, 50);

    fill (57,255,20);                        //exit rectangle
    rect(795,550,12,70);

    textSize(15);
    fill(255,255,255);
    text ('Exit', 765,540);


  if (x >= width)         ///yellow circle player movment
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
  else if (x >= rect-diameter/2 && y <= rect-diameter/2)
  {
    print (text)
    textSize(15);
    fill(255,255,255);
    text ('You Win!', 290,390);





  }











  if (y >= height)
  {
    y = 50;
  }

  fill(255,50,255);                      //pink circle
  circle(x7,y7,diameter7);
    if (x7 >= width-diameter7/2 || x7 <= diameter7/2)      //pink circle movement
    {
      speed7 *= -1;
    }
    else if(y7 >= height-diameter7/2 || y7 <= diameter7/2)
    {
      speedY *= -1;
    }
    x7 += speed7;
    y7 += speedY;

    fill (31,4,170);                        //blue rectangle
    rect(x3,y3,widthRect,heightRect);

    if(y3 >= height-heightRect || y3 <= heightRect-10)            //blue rect movement
    {
       movement3 *= -1;
    }
    y3 += movement3;
    }
    function mouseClicked()
    {
      mousex = mouseX;
      mousey = mouseY;
















/*}
function keyPressed()
{
  if (key == 'd')
  {
    x += 10;
  }
  else if (key == 'a')
  {
    x -= 10;
  }*/
}
