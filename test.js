// onerror = (_1, _2, _3, _4, err) => alert("Unknown " + err.stack)

const ver = "1.0";

// Create a new script element
const script = document.createElement("script");

// Set the src attribute of the script element
script.src =
  "https://rawcdn.githack.com/nextapps-de/winbox/0.2.6/dist/winbox.bundle.min.js";
document.addEventListener("keydown", (event) => {
  if (event.key === "c") {
    cmd();
  }
});
// Append the script element to the head tag
document.head.appendChild(script);
const htmldocs =
  '<div style="padding: 0.25cm"><h1 id="appye-loader-docs">Appye Loader - Docs</h1> <h4 id="d-key-tutorial">Use the <em><code>D</code></em> key to get back here at any time, this will only show the first time you run this Appye version. <br /> Press the <em><code>X</code></em> if you understand. (Look at the top.)</h4> <h2 id="commands">Commands</h2> <h5 id="please-note-and-must-be-removed-when-entering-a-command-br-and-appname-must-be-exactly-how-it-is-in-the-apps-section-">Please note <code>{</code> and <code>}</code> must be removed when entering a command,<br /> and appName must be exactly how it is in the apps section.</h5> <h3 id="-app-load-appname-"><code>app-load {appName]</code></h3> <p>This command loads the app you want. ex: <em><code>app-load subway_surfers</code></em></p> <h3 id="-cloak-it-fullurl-"><code>cloak-it {fullUrl}</code></h3> <p>This command cloaks the the url in the command. It will open in a new window, and cloaks as Desmos.</p> <h2 id="apps">Apps</h2> <p><code>subway_surfers,</code> <code>d+25,</code> <code>piped,</code> <code>google</code></p></div>';
document.addEventListener("keydown", (event) => {
  if (event.key === "d") {
    void new WinBox({
      title: "Appye Loader - Docs",
      html: htmldocs,
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

// Wait for the script to be loaded before calling cmd()
script.addEventListener("load", function () {
  if (localStorage.getItem("appyeVersion") === ver) {
    cmd();
  } else {
    void new WinBox({
      title: "Appye Loader - Docs",
      html: htmldocs,
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
  const cmdin = prompt("Command:");
  if (
    cmdin === "app-load subway_surfer" ||
    cmdin === "app-load subway_surfers" ||
    cmdin === "app-load subway" ||
    cmdin === "app-load Subway"
  ) {
    void new WinBox({
      title: "Subway Surfers",
      icon: "https://raw.githubusercontent.com/KUKHUA/chc-testing/main/img/ss_icon.png",
      background: "#f5b342",
      url: "https://rawcdn.githack.com/mark-deal/mark-deal.github.io/73bdb2d103ca2cae7b9274872da66de1c28404c6/subwaysurfers/index.html",
    });
  } else if (
    cmdin === "app-load d+25" ||
    cmdin === "app-load D+25" ||
    cmdin === "app-load d25" ||
    cmdin === "app-load D25"
  ) {
    void new WinBox({
      title: "D+25",
      icon: "https://paste.unit193.net/favicon.ico",
      background: "#4287f5",
      url: "https://paste.unit193.net/?18820e835dcfca92#+R9o6//5M3r23lulXQCFEZ3AIuTlKNvbQMML6lXnoM8=",
    });
  } else if (
    cmdin === "app-load piped" ||
    cmdin === "app-load Piped" ||
    cmdin === "app-load youtube" ||
    cmdin === "app-load YouTube"
  ) {
    void new WinBox({
      title: "Piped",
      icon: "https://piped.mint.lgbt/favicon.ico",
      background: "#f54257",
      url: "https://piped.garudalinux.org/",
    });
  } else if (cmdin === "app-load google" || cmdin === "app-load Google") {
    void new WinBox({
      title: "Google",
      icon: "https://www.google.com/favicon.ico",
      background: "#bd8c91",
      url: "https://www.google.com/?igu=1&safe=active&ssui=on",
    });
  } else if (cmdin.startsWith("cloak-it ")) {
    const outurl = cmdin.replace("cloak-it ", "");
    const win = window.open();
    const iframe = win.document.createElement("iframe");
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    iframe.style.border = "none";
    iframe.style.position = "absolute";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.src = outurl;
    win.document.body.appendChild(iframe);
    win.document.title = "Desmos | Testing";
    let link = win.document.querySelector("link[rel~='icon']");
    if (!link) {
      link = win.document.createElement("link");
      link.rel = "icon";
      win.document.head.appendChild(link);
    }
    link.href = "https://www.desmos.com/favicon.ico";
    return;
  }
}
