var isStarted = false;
var i = 1;
var eventHolder;
// var carousel_Img = document.getElementsByClassName('introcarouselBody');
// var carousel_Img = document.getElementsByTagName('image');
// var carousel_Img = document.getElementById("introcarousel_Body");
// var divele = document.getElementById("touchDiv");
function onResized()
{

}
function PageLoaded()
{
  // if(isStarted == false)
  // {
    eventHolder = setInterval(StartCaousel, 2000);
  //   isStarted = true;
  // }
  // else
  // {
  //   window.alert("Already loop is running");
  // }
}

function StartCaousel()
{
  var y = document.getElementById('carouselImage');
  var c1;
  var c2;
  if(i==1)
    {
      y.src="../Images/wedding2.jpg";
      c1 = document.getElementById('narouseNavi1');
      c2 = document.getElementById('narouseNavi2');
      //setTimeout(ImageTouch, 3000);
      i++;
    }
    else if (i==2)
    {
      y.src="../Images/wedding3.jpg";
      c1 = document.getElementById('narouseNavi2');
      c2 = document.getElementById('narouseNavi3');
      //setTimeout(ImageTouch, 3000);
      i++;
    }
    else if (i==3)
    {
      y.src="../Images/wedding4.jpg";
      c1 = document.getElementById('narouseNavi3');
      c2 = document.getElementById('narouseNavi4');
      //setTimeout(ImageTouch, 3000);
      i++;
    }
    else if (i==4)
    {
      y.src="../Images/wedding5.jpg";
      c1 = document.getElementById('narouseNavi4');
      c2 = document.getElementById('narouseNavi5');
      //setTimeout(ImageTouch, 3000);
      i++;
    }
    else
    {
      y.src="../Images/wedding1.jpg";
      c1 = document.getElementById('narouseNavi5');
      c2 = document.getElementById('narouseNavi1');
      //setTimeout(ImageTouch, 3000);
      i=1;
    }
    c1.src = "../Images/carouselOff.png";
    c2.src= "../Images/carouselOn.png";
}

function RightClicked()
{
  var y = document.getElementById('carouselImage');
  switch (i) {
    case 1:
      y.src="../Images/wedding2.jpg";
      c1 = document.getElementById('narouseNavi1');
      c2 = document.getElementById('narouseNavi2');
      i++;
      break;
    case 2:
      y.src="../Images/wedding3.jpg";
      c1 = document.getElementById('narouseNavi2');
      c2 = document.getElementById('narouseNavi3');
      i++;
      break;
    case 3:
      y.src="../Images/wedding4.jpg";
      c1 = document.getElementById('narouseNavi3');
      c2 = document.getElementById('narouseNavi4');
      i++;
      break;
    case 4:
      y.src="../Images/wedding5.jpg";
      c1 = document.getElementById('narouseNavi4');
      c2 = document.getElementById('narouseNavi5');
      i++;
      break;
    default:
      y.src="../Images/wedding1.jpg";
      c1 = document.getElementById('narouseNavi5');
      c2 = document.getElementById('narouseNavi1');
      i=1;
  }
  c1.src = "../Images/carouselOff.png";
  c2.src= "../Images/carouselOn.png";
}

function LeftClicked()
{
  //i-2;
  clearTimeout(eventHolder);
  var y = document.getElementById('carouselImage');
  switch (i) {
    case 1:
      y.src="../Images/wedding5.jpg";
      document.getElementById('narouseNavi1').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi2').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi3').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi4').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi5').src = "../Images/carouselOn.png";
      i--;
      break;
    case 2:
      y.src="../Images/wedding1.jpg";
      document.getElementById('narouseNavi1').src = "../Images/carouselOn.png";
      document.getElementById('narouseNavi2').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi3').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi4').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi5').src = "../Images/carouselOff.png";
      i--;
      break;
    case 3:
      y.src="../Images/wedding2.jpg";
      document.getElementById('narouseNavi1').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi2').src = "../Images/carouselOn.png";
      document.getElementById('narouseNavi3').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi4').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi5').src = "../Images/carouselOff.png";
      i--;
      break;
    case 4:
      y.src="../Images/wedding3.jpg";
      document.getElementById('narouseNavi1').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi2').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi3').src = "../Images/carouselOn.png";
      document.getElementById('narouseNavi4').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi5').src = "../Images/carouselOff.png";
      i--;
      break;
    default:
      y.src="../Images/wedding4.jpg";
      document.getElementById('narouseNavi1').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi2').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi3').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi4').src = "../Images/carouselOn.png";
      document.getElementById('narouseNavi5').src = "../Images/carouselOff.png";
      i=4;
  }
  // c1.src = "../Images/carouselOff.png";
  // c2.src= "../Images/carouselOn.png";
  eventHolder = setInterval(StartCaousel, 2000);
}

function DirectNaviClicked(a)
{
  clearTimeout(eventHolder);
  var y = document.getElementById('carouselImage');
  switch (a) {
    case 1:
      y.src="../Images/wedding1.jpg";
      document.getElementById('narouseNavi1').src = "../Images/carouselOn.png";
      document.getElementById('narouseNavi2').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi3').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi4').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi5').src = "../Images/carouselOff.png";
      break;
    case 2:
      y.src="../Images/wedding2.jpg";
      document.getElementById('narouseNavi1').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi2').src = "../Images/carouselOn.png";
      document.getElementById('narouseNavi3').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi4').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi5').src = "../Images/carouselOff.png";
      break;
    case 3:
      y.src="../Images/wedding3.jpg";
      document.getElementById('narouseNavi1').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi2').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi3').src = "../Images/carouselOn.png";
      document.getElementById('narouseNavi4').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi5').src = "../Images/carouselOff.png";
      break;
    case 4:
      y.src="../Images/wedding4.jpg";
      document.getElementById('narouseNavi1').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi2').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi3').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi4').src = "../Images/carouselOn.png";
      document.getElementById('narouseNavi5').src = "../Images/carouselOff.png";
      break;
    default:
      y.src="../Images/wedding5.jpg";
      document.getElementById('narouseNavi1').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi2').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi3').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi4').src = "../Images/carouselOff.png";
      document.getElementById('narouseNavi5').src = "../Images/carouselOn.png";
  }
  i=a;
  // c1.src = "../Images/carouselOff.png";
  // c2.src= "../Images/carouselOn.png";
  eventHolder = setInterval(StartCaousel, 2000);
}

PageLoaded();
/*
function carouselButtonClick(event)
{
  window.alert("clicked");
}
// window.addEventListener("onclick", carouselButtonClick, false);
*/
