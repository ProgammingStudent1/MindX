let wrapper = document.getElementById("wrapper");

function clopen() {
  if (wrapper.style.bottom == "-350px") {
    openChatScreen();
  } else {
    closeChatScreen();
  }
}

function closeChatScreen() {
  wrapper.style.bottom = "-350px";
}

function openChatScreen() {
  wrapper.style.bottom = "5px";
}
