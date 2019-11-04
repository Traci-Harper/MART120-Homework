/*
    Author: Traci Harper
    Purpose: Animate Objects
    Date: 11/2
    Revised Date:
*/



var redColor = 123;         
var greenColor = 39;
var blueColor = 21;

var x = 200;                ///eye1 var
var y = 150;
var diameter = 50;

var x2 = 260;               ///eye2 var
var y2 = 150;
var diameter2 = 50;

var bottomX = 215;          ///triangle variables
var bottomY = 200;
var topX = 228;
var topY = 165;
var thirdX = 241;
var thirdY = 200;

var x3 = 200;               ///rect variables
var y3 = 230;
var widthRect = 60;
var heightRect = 5;


var movement;           ///eye1 move
var movement2;          ///eye2 move
var movement3;          ///triangle movement
var movement4;          ///rect movement

var textSize1 = 25;         ///text variables
var textTitle = "Self Portrait";

var headx = 230;            ////head variables
var heady = 170;
var headw = 140;
var headh = 190;

var movement5 =1;



function setup()
{
    createCanvas(400,400);
    movement = Math.floor(Math.random()*10+1);          
    movement2 = Math.floor(Math.random()*10+1);         
    movement3 = Math.floor(Math.random()*10+1);           
    movement4 = Math.floor(Math.random()*10+1);
    //textSize = Math.floor(Math.random()*10+1);
     
}

function draw()
{
    background(22,112,191);
    
    fill(255,229,204);              //head
    ellipse (headx,heady,headw,headh);
     
         if(headh >= 200)
         {
            headh*=-1;
         }
         if(headh <= 190)
         {
             headh *= +1;
         }
          headh ++;

    fill(255);                      //eye #1
    circle(x,y,diameter);
    fill(0);
    ellipse (x,y,25,30);

    fill (255);                     //eye #2
    circle (x2,y2,diameter);
    fill(0);
    ellipse (x2,y2,25,30);



    if(x >= 400 || x <= 0)          //movement 1
    {
       movement *= -1;
    }
     x += movement;
     y += movement;

     if(x2 >= 400 || x2 <= 0)   //movement 2
    {
       movement2 *= -1;
    }
     x2 += movement2;


     fill(255,128,0);                   //triangle
    triangle (bottomX,bottomY,topX,topY,thirdX,thirdY);

    if(thirdY >= 400 || thirdY <= 0)   //movement 3
    {
       movement3 *= -1;
    }
    
    thirdY += movement3;
    bottomY += movement3;
    topY += movement3;

    fill (0,0,0);                        //rectangle
    rect(x3,y3,widthRect,heightRect);

    if(y3 >= 400 || y3 <= 0)            //movement 4
    {
       movement4 *= -1;
    }
    y3 += movement4;


    fill (0,0,0);
    point (205,190);

    fill (0,0,0);
    line (190,90,130,300);

    fill (0,0,0);
    line (275,90,310,300);
    
    
    fill (0,0,0);
    line (188,90,130,300);

    fill (0,0,0);
    line (273,90,310,300);
    
    fill (0,0,0);
    line (230,265,230,340);

    fill (0,0,0);
    line (230,340,190,390);

    fill (0,0,0);
    line (230,340,270,390);

    fill (0,0,0);
    line (270,300,190,300);

    textSize(textSize1);
    fill(255,128,0);
    text (textTitle, 20,30);
    
        if(textSize1 >= 30)
        {
           textSize1*=-1;
        }
        if(textSize1 <= 25)
        {
            textSize1 *= +1;
        }
         textSize1 ++;
        

    textSize(15);
    fill(255,255,255);
    text ('Traci Harper', 290,390);
    
}






































