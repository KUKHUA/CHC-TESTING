// Made by KUKHUA
const ver = "2.0";

// Create a new script element
const script = document.createElement("script");

// Set the src attribute of the script element
script.src =
  "https://rawcdn.githack.com/nextapps-de/winbox/0.2.6/dist/winbox.bundle.min.js";
  document.head.appendChild(script);
//event listeners & consts
const htmlDocs = '<h1 id="appye-loader-docs">Appye Loader - Docs</h1> <h2 id="shortcuts">Shortcuts</h2> <h4 id="use-the-d-key-to-get-back-here-at-any-time-use-the-c-key-to-use-a-command-at-any-time-br-press-the-x-button-at-the-top-of-this-window-if-you-understand-">Use the <em><code>D</code></em> key to get back here at any time, use the <em><code>C</code></em> key to use a command at any time. <br /> Press the <em><code>X</code></em> button at the top of this window if you understand.</h4> <h2 id="commands">Commands</h2> <h5 id="please-note-and-must-be-removed-when-entering-a-command-br-aswell-do-not-include-anything-in-and-only-include-the-first-word-">Please note <code>{</code> and <code>}</code> must be removed when entering a command, <br /> aswell do not include anything in <code>(</code> and <code>)</code> only include the first word.</h5> <h3 id="-app-load-appname-"><code>app-load {appName]</code></h3> <p>This command loads the app you want. ex: <em><code>app-load subway_surfers</code></em></p> <h3 id="-cloak-it-fullurl-"><code>cloak-it {fullUrl}</code></h3> <p>This command cloaks the the url in the command. It will open in a new window, and cloaks as Desmos.</p> <h2 id="apps">Apps</h2> <p><code>d25,</code> <code>piped,</code> <code>google,</code> <code>radiolise,</code> <code>searx</code></p> <h2 id="games">Games</h2> <p><code>subway (subway surfers),</code> <code>bitlife,</code> <code>uno(4 colors),</code> <code>dino</code></p>'
const jsonString = '{ "apps": { "argName": "", "title": "", "icon": "", "hexColor": "", "url": ""} }';
const jsonObject = JSON.parse(jsonString);
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
  if (localStorage.getItem("appyeVersion") === ver) {
    cmd();
  } else {
    void new WinBox({
      title: "Appye Loader - Docs",
      html: htmlDocs,
      background: "#000000",
      modal: true,
      onclose: function () {
        setTimeout(function () {
          localStorage.setItem("appyeVersion", ver);
          cmd();
        }, 200);
      },
    });
  }
});


function cmd() {
//json stuff
// Apps
jsonObject.apps.d25 = {title: "D+25", icon: "https://paste.unit193.net/favicon.ico", hexColor: "#4287f5", url: "https://paste.unit193.net/?18820e835dcfca92#+R9o6//5M3r23lulXQCFEZ3AIuTlKNvbQMML6lXnoM8=" };
jsonObject.apps.google = {title: "Google", icon: "https://www.google.com/favicon.ico", hexColor: "#bd8c91", url: "https://www.google.com/?igu=1" };
//piped dupe
jsonObject.apps.piped = {title: "Piped", icon: "https://piped.mint.lgbt/favicon.ico", hexColor: "#f54257", url: "https://piped.garudalinux.org/" };
jsonObject.apps.youtube = {title: "Piped", icon: "https://piped.mint.lgbt/favicon.ico", hexColor: "#f54257", url: "https://piped.garudalinux.org/" };
// piped end
jsonObject.apps.radiolise = {title: "Radiolise", icon: "https://radiolise.gitlab.io/favicon.ico", hexColor: "#7d5f5c", url: "https://radiolise.gitlab.io/" };
jsonObject.apps.searx = {title: "SearX", icon: "https://searx.garudalinux.org/favicon.ico", hexColor: "#3d68ad", url: "https://searx.garudalinux.org/" };
// Games
jsonObject.apps.bitlife = {title: "Bitlife", icon: "https://raw.githubusercontent.com/mark-deal/mark-deal.github.io/main/bitlife/logo.png", hexColor: "#f0340e", url: "https://rawcdn.githack.com/mark-deal/mark-deal.github.io/73bdb2d103ca2cae7b9274872da66de1c28404c6/bitlife/index.html" };
jsonObject.apps.dino = {title: "Dino", icon: "https://raw.githubusercontent.com/Radon-Games/Radon-Games-Assets/main/html/dinosaur/assets/default_100_percent/100-error-offline.png", hexColor: "#f2dcea", url: "https://rawcdn.githack.com/Radon-Games/Radon-Games-Assets/b465574811f6feeca2e8a7504c3869f065b4a7d6/html/dinosaur/index.html"};
jsonObject.apps.subway = {title: "Subway Surfers", icon: "https://raw.githubusercontent.com/KUKHUA/chc-testing/main/img/ss_icon.png", hexColor: "#f5b342", url: "https://rawcdn.githack.com/mark-deal/mark-deal.github.io/73bdb2d103ca2cae7b9274872da66de1c28404c6/subwaysurfers/index.html" };
jsonObject.apps.uno = {title: "4 Colors", icon: "https://raw.githubusercontent.com/Radon-Games/Radon-Games-Assets/main/html/uno/favicon.ico", hexColor: "#0e408f", url: "https://rawcdn.githack.com/Radon-Games/Radon-Games-Assets/b465574811f6feeca2e8a7504c3869f065b4a7d6/html/uno/index.html" };
//parse input
  const commandIn = prompt("Command:");
  if (commandIn.startsWith("app-load")) {
    parseApp = commandIn.replace("app-load ","")
    if (jsonObject.apps[parseApp] ) {
//create window
 void new WinBox({
      title: jsonObject.apps[parseApp].title,
      icon: jsonObject.apps[parseApp].icon,
      background: jsonObject.apps[parseApp].hexColor,
      url: jsonObject.apps[parseApp].url
    });
    } else {
    alert('Could not fine the app "' + parseApp + '" in the app database, please press the "d" key and check if you spelt the app wrong.')
    }
  }else if (commandIn.startsWith("cloak-it ")) {
    //set info for later update
    let defTitle = "Desmos | Testing";
    let defIcon = "https://www.desmos.com/favicon.ico";
    //parse input
    const outurl = commandIn.replace("cloak-it ", "");
    const win = window.open();
    //create cloaked iframe
    const iframe = win.document.createElement("iframe");
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    iframe.style.border = "none";
    iframe.style.position = "absolute";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.src = outurl;
    win.document.body.appendChild(iframe);
    win.document.title = defTitle;
    //set favicon
    let link = win.document.querySelector("link[rel~='icon']");
    if (!link) {
        link = win.document.createElement("link");
        link.rel = "icon";
        win.document.head.appendChild(link);
    }
    link.href = defIcon;
} else {
    alert('Error: Command "'+ commandIn + '" is not vaild. ' + "See if you've spelt it wrong with the " + '"d" key.')
}
}
