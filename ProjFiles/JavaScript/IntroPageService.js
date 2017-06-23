var id = "home";
var selected = "";
function HomeClicked()
{
  var x = document.getElementById('IntroBodyFrame');
  x.src="IntroPageHome.html";
  selected = "home";
  presentScenario();
  id = "home";
}

function SignInClicked()
{
  var x = document.getElementById('IntroBodyFrame');
  x.src="signin.html";
  selected = "signin";
  presentScenario();
  id = "signin";
}

function SignUpClicked()
{
  var x = document.getElementById('IntroBodyFrame');
  x.src="signup.html";
  selected = "signup";
  presentScenario();
  id = "signup";
}

function CheckMatchClicked()
{
  var x = document.getElementById('IntroBodyFrame');
  x.src="signup.html";
  selected = "check";
  presentScenario();
  id = "check";
}

function presentScenario()
{
  switch ( id ) {
    case "home":
    var x = document.getElementById('hme');
    x.style.color = "#006400";
      break;
    case "signin":
    var x = document.getElementById('login');
    x.style.color = "#006400";
      break;
    case "signup":
    var x = document.getElementById('logout');
    x.style.color = "#006400";
      break;
    case "check":
    var x = document.getElementById('setmatch');
    x.style.color = "#006400";
      break;
    default:

  }
  switch ( selected ) {
    case "home":
    var x = document.getElementById('hme');
    x.style.color = "red";
      break;
    case "signin":
    var x = document.getElementById('login');
    x.style.color = "red";
      break;
    case "signup":
    var x = document.getElementById('logout');
    x.style.color = "red";
      break;
    case "check":
    var x = document.getElementById('setmatch');
    x.style.color = "red";
      break;
    default:

  }
}
