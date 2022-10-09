var text = "Energy & persistance conquer all things";

for (i = 0; i < text.length; i++) {
  var element = $("<span>" + text[i] + "</span>");
  $("div").append(element);
  element.css("animation-delay", (i * 3) / text.length +"s");
}


 