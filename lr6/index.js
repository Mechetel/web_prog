const directions_array = ["right", "left", "bottom", "top"];

function getCssProperty(elem, property){
  return window.getComputedStyle(elem,null).getPropertyValue(property);
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var timers = [];

function moveDiv(divRef) {
  var element = document.getElementById(divRef);
  var container = document.getElementById("container");

  var itemLeft = parseInt(getCssProperty(element, "left"));
  var itemTop  = parseInt(getCssProperty(element, "top"));

  var containerHeight = parseInt(getCssProperty(container, "height"));
  var containerWidht  = parseInt(getCssProperty(container, "width"));

  let random = Math.floor(Math.random() * directions_array.length);

  switch (directions_array[random]) {
    case "right":
      element.style.left = ( containerWidht - 100 ) + 'px';
      element.style.top = ( getRandomArbitrary(50, containerHeight - 100) ) + 'px';
      break;
    case "left":
      element.style.left = 0 + 'px';
      element.style.top = ( getRandomArbitrary(50, containerHeight - 100) ) + 'px';
      break;
    case "bottom":
      element.style.left = ( getRandomArbitrary(50, containerWidht - 100) ) + 'px';
      element.style.top = ( containerHeight - 100 ) + 'px';
      break;
    case "top":
      element.style.left = ( getRandomArbitrary(50, containerWidht - 100) ) + 'px';
      element.style.top = 0 + 'px';
      break;
    default:
      break;
  }

  console.log(directions_array[random]);
  console.log(element.style.left, element.style.top);
  timers += window.setTimeout(() => { moveDiv(divRef); }, 2000);
}

function moveToDefaultPosition() {
  for (var timer in timers) {
    window.clearTimeout(timer);
    timer = undefined;
  }

  var icon1 = document.getElementById("icon1");
  var icon2 = document.getElementById("icon2");
  var icon3 = document.getElementById("icon3");

  icon1.style.top = "50px"
  icon1.style.left = "50px"

  icon2.style.top = "50px"
  icon2.style.left = "200px"

  icon3.style.top = "50px"
  icon3.style.left = "350px"
}
