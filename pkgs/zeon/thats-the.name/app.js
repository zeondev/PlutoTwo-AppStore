

import Ws from "./libs/windowSystem.js";

let wrapper; // Lib.html | undefined
let MyWindow;

const pkg = {
  name: "thats-the.name",
  type: "app",
  privs: 0,
  start: async function (Root) {
    
    // Testing
    console.log("Hello from example app", Root);

    // Create a window
    MyWindow = new Ws.data.win({
      title: "thats-the.name",
      content: '<iframe src="https://thats-the.name/login.html"></iframe>',
      pid: Root.PID,
      width: 800,
      height: 600,
      onclose: () => {
        Root.Lib.onEnd();
      },
    });

    // Get the window body
    wrapper = MyWindow.window.querySelector(".win-content");
    wrapper.style.padding = "0px";

  },
  end: async function () {
    // Close the window when the process is exited
    MyWindow.close();
  },
};

export default pkg;