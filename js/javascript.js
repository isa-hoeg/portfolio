window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("Siden har loadet");
  document.querySelector(".logo").classList.add("rotate");
}
