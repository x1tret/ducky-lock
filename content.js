chrome.runtime.onMessage.addListener(function(msg) {
    var ele = document.getElementById("msg_input")
    if (ele && msg.cmd && msg.cmd == "lockDucky") {
      var display = msg.isDisable ? "none" : (document.title.indexOf("vietnam_office") == -1 ? "block" : "none");
      ele.style.display = display;
      if (display == "none")
        ele.firstChild.firstChild.addEventListener('DOMSubtreeModified', function () {
          if (this.innerText.indexOf("duck") != -1)
            this.innerText = this.innerText.replace("duck", "")
          if (this.innerText.indexOf(":du") != -1)
            this.innerText = this.innerText.replace(":du", "")
        }, false);
    }
});