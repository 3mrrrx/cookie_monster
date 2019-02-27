var log = function(msg) {
  return function(e) {
  // out put even to pre
   // var pre = $("pre");
   //  pre.append("EVENT (" + new Date().getTime() + "): dev nr."+ event.target.id + " "  + msg + "\n");
   // if(e.originalEvent.type == "touchmove") e.preventDefault();
   // pre[0].scrollTop = pre.height();
  // out put event to console log
   console.log("EVENT (" + new Date().getTime() + "): dev nr."+ event.target.id + " "  + msg + "\n");
  };
};

$(function() {
  $("div").on("mousedown", log("mousedown"));
  $("div").on("mouseup", log("mouseup"));
  $("div").on("click", log("click"));
  $("div").on("dblclick", log("dblclick"));
  $("div").on("context", log("context"));
  $("div").on("touchstart", log("touchstart"));
  $("div").on("touchcancel", log("touchcancel"));
  $("div").on("touchmove", log("touchmove"));
  $("div").on("touchleave", log("touchleave"));
  $("div").on("touchend", log("touchend"));
});
