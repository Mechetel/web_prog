const directions_array = ["right", "left", "bottom", "top"];

function getCssProperty(elem, property){
  return window.getComputedStyle(elem,null).getPropertyValue(property);
}

function moveDiv(divRef) {
  var element = document.getElementById(divRef);

  let random = Math.floor(Math.random() * directions_array.length);
  console.log(random, directions_array[random]);

  var newLeft = parseInt(getCssProperty(element, "left"));
  var newTop  = parseInt(getCssProperty(element, "top"));
  console.log(newLeft, newTop);

  if (newLeft < 50 || newTop < 50) {
    element.style.left = (newLeft + 50) + 'px';
    element.style.top = (newTop + 50) + 'px';
  } else if (newLeft > 650 || newTop > 350) {
    element.style.left = (newLeft - 50) + 'px';
    element.style.top = (newTop - 50) + 'px';
  } else {
    switch (directions_array[random]) {
      case "right":
        element.style.left = (newLeft + 50) + 'px';
        break;
      case "left":
        element.style.left = (newLeft - 50) + 'px';
        break;
      case "bottom":
        element.style.top = (newTop + 50) + 'px';
        break;
      case "top":
        element.style.top = (newTop - 50) + 'px';
        break;
      default:
        break;
    }
  }
}

function moveToDefaultPosition() {
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
