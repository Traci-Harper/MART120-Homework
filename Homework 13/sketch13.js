/*
    Author: Traci Harper
    Purpose: Using Arrays
    Date: 11/24
    Revised Date: 11/28
*/



var xCoord =[];                   
var yCoord =[];
var diameterValues=[];
var speedForX=[];
var speedForY=[];

var x7 = 200;                   ///pink circle
var y7 = 150;
var diameter7 = 50;
var speed7; 
var speedY =5;


var x3 = 200;                 /// blue rect variables
var y3 = 230;
var widthRect = 60;
var heightRect = 10;
var movement3;               ///rect movement


var x = 50;                 ///player circle
var y = 50;
var diameter = 35;
var mousex = 0;           ///mouse variables
var mousey = 0;


var exitX=793;            ////exit variables
var exitY=548;
var exitWidth=115;
var exitHeight=190;

function setup()
{
    createCanvas(800,600);
    var circX=50;
    var circY=50;
    var circDiameter=50;
    var speedX=3;
    var speedY=5;
    for (var i = 0; i < 5; i++)
    {
      
      xCoord[i]= circX;
      yCoord[i]=circY;
      diameterValues[i]= circDiameter;
      speedForX[i]=speedX;
      speedForY[i]=speedY;
      circX+=10;
      circY+=20;
      circDiameter+=13;
      speedX+=2;
      speedY+=1;
      
    }
   
   /* xCoord[1]=50;
    
    yCoord[1]=150;

    
    diameterValues[1]=75;

    
    speedForX[1]=7;
    
    speedForY[1]=9;*/
    

    speed7 = Math.floor(Math.random()*10+1);
    movement3 = Math.floor(Math.random()*10+1); 

}
function draw()
{
    background(0);
    createCircle();
    createPlayer();
    playerMovement();
    mouseClicked();
    pinkCircle();
    blueRectangle();
    movePinkCircle();
    moveBlueRectangle();
    moveCircle();
    createExit();
    playerExit();
}


function createCircle()
{
  fill(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256));
  for (var i=0; i < xCoord.length; i++)
  {
    circle(xCoord[i],yCoord[i], diameterValues[i]);
  }
  
  //circle(xCoord[1],yCoord[1], diameterValues[1]);
}
function moveCircle()
{
  for (var i = 0; i < xCoord.length; i++)
  {
    if (xCoord[i] >= width-diameterValues[i]/2 || xCoord[i]  <= diameterValues[i]/2)      
    {
      speedForX[i]  *= -1;
    }
    else if(yCoord[i]  >= height-diameterValues[i]/2 || yCoord[i]  <= diameterValues[i]/2)
    {
      speedForY[i]  *= -1;
    }
    xCoord[i]  += speedForX[i];
    yCoord[i]  += speedForY[i];
  }
}
 /*
  if (xCoord[1] >= width-diameterValues[1] /2 || xCoord[1]  <= diameterValues[1] /2)      
  {
    speedForX[1]  *= -1;
  }
  else if(yCoord[1]  >= height-diameterValues[1]/2 || yCoord[1]  <= diameterValues[1]/2)
  {
    speedForY[1]  *= -1;
  }
  

  xCoord[1]  += speedForX[1];
  yCoord[1]  += speedForY[1];
}*/





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
    //(x <= width-diameter/2 || y <= height-diameter/2)       
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
    rect(exitX,exitY,exitHeight,exitWidth);
    textSize(15);
    fill(255,255,255);
    text ('Exit', 765,540);
}
function youWin()
{
    print (text)
    textSize(25);
    fill(255,255,255);
    text ('You Win!', 290,390);
    playerMovement=math.floor;
}
function playerExit()
{
  if(x >= exitX+5 && y >= exitY+15)      
  {
    youWin();
  }
}



