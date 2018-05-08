var i=0; //Starting Slide Index

var slides = ["Slide1.png", "Slide2.jpg", "Slide3.png","Slide1.png", "Slide2.jpg", "Slide3.png","Slide1.png", "Slide2.jpg", "Slide3.png"];


function slideLeft(){
  document.getElementById('currentImage').src= slides[i-1];
  i=i-1;
}
function slideRight(){
  document.getElementById('currentImage').src= slides[i+1];
  i++;
}
function slideToOne() {
  i=3;
  document.getElementById('currentImage').src= slides[3];
}
function slideToTwo() {
  i=4;
  document.getElementById('currentImage').src= slides[4];
}
function slideToThree() {
  i=5;
  document.getElementById('currentImage').src= slides[5];
}
if (i<0) {
  i=0;
}
if (i>2) {
  i=2;
}

/*if (i = 0){
  document.getElementById('currentImage').src= slides[0];
}
else if (i=1){
  document.getElementById('currentImage').src= slides[1];
}
else if (i=2) {
  document.getElementById('currentImage').src= slides[2];
}*/

var p; //open grid function counter

//var dialogGrid = ["grid1.png", "grid2.jpg", "grid3.png", "grid4.png", "grid5.jpg", "grid6.png", "grid7.png", "grid8.jpg", ];

var w = $(window).width();
var h = $(window).height();

function openGrid1(){
  p=0;
  
  $( function() {
    $( "#dialog" ).dialog({ height: h-100 });

  } );
 document.getElementById("dialogImg").src = "grid1.png";
}

function openGrid2(){
  p=1;
  $( function() {
    $( "#dialog" ).dialog({ width: w-100 });
  } );
 document.getElementById("dialogImg").src = "grid2.jpg";
}

function openGrid3(){
  p=2;
  $( function() {
    $( "#dialog" ).dialog({ height: h-100});
  } );
 document.getElementById("dialogImg").src = "grid3.png";
}

function openGrid4(){
  p=3;
  $( function() {
    $( "#dialog" ).dialog({ height: h-100 });
  } );
 document.getElementById("dialogImg").src = "grid4.png";
}

function openGrid5(){
  p=4;
  $( function() {
    $( "#dialog" ).dialog({ width: w-200 });
  } );
 document.getElementById("dialogImg").src = "grid5.jpg";
}

function openGrid6(){
  p=5;
  $( function() {
    $( "#dialog" ).dialog({ width: w-200 });
  } );
 document.getElementById("dialogImg").src = "grid6.png";
}

function openGrid7(){
  p=6;
  $( function() {
    $( "#dialog" ).dialog({ height: h-100 });
  } );
 document.getElementById("dialogImg").src = "grid7.png";
}

function openGrid8(){
  p=7;
  $( function() {
    $( "#dialog" ).dialog({ width: w-100 });
  } );
 document.getElementById("dialogImg").src = "grid8.jpg";
}
