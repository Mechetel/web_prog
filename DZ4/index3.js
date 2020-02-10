var testObject = {
  bar: "a",
  child: {
    b: [
      1,
      2,
      {
        test: "1",
        test2: "2",
        arr: [5,6,7,8]
      }
    ],
    grand: {
      test: 1,
      greatgrand: {
        c: "c",
        mass: 
        [
          "aa",
          {
            c: "12"
          } ,
          "bb"
        ]
      }
    }
  }
};
/////////////////
var obj1 = new Object();
obj1.id = 5;
obj1.name = "Sample";
obj1.getName = function()
{
    return this.name;
}
obj1.arr = [1,2,3,4, obj1.car = "Ford"];
/////////////////
function Picture (id_, title_, date_, details_){
  this.id = id_;
  this.title = title_;
  this.date = date_;
  this.details = details_;
}
var picture = new Picture(3, "qweasd", new Date("2009/03/08"), {
  type: "photo",
  description: ["data", "mesto", "kto"]
})
////////////////
const domListToRender = document.querySelector("ul");

function parseObjectProperties(obj, domListUrl = domListToRender) {
  for (var k in obj) {
    if (typeof obj[k] === "object" && obj[k] !== null) {
      let nestingListToRender = document.createElement("ul");
      domListUrl.insertAdjacentHTML(
        "beforeend",
        `
        <li>${k} - вложенность</li>
      `
      );
      domListUrl.appendChild(nestingListToRender);
      parseObjectProperties(obj[k], nestingListToRender);
    } else {
      domListUrl.insertAdjacentHTML(
        "beforeend",
        `
        <li> ${k} : ${obj[k]}</li>
      `
      );
    }
  }
}

parseObjectProperties(testObject);
parseObjectProperties(obj1);
parseObjectProperties(picture);
