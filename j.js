
var drag = document.getElementById("drag");

drag.addEventListener("mousedown", function (e) {
  e.preventDefault();
  var startX = e.clientX - drag.offsetLeft;
  var startY = e.clientY - drag.offsetTop;

  document.addEventListener("mousemove", move);
  document.addEventListener("mouseup", stop);

  function move(e) {
    drag.style.left = e.clientX - startX + "px";
    drag.style.top = e.clientY - startY + "px";
  }

   function stop() {
     document.removeEventListener("mousemove", move);
     document.removeEventListener("mouseup", stop);
   }
  });