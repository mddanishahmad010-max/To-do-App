let inp = document.querySelector("input");
let btn = document.querySelector("#btn");
let list = document.querySelector("ul");
btn.addEventListener("click", function () {
  if (inp.value === "") {
    emptyVal();
  } else {
    eleCreate();
  }
});
let eleCreate = function () {
  let item = document.createElement("li");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  let span = document.createElement("span");
  span.innerText = inp.value;
  inp.value = "";
  span.addEventListener("click", function () {
    if (checkbox.checked === false) {
      checkbox.checked = true;
      span.style.textDecoration = "line-through";
    } else {
      checkbox.checked = false;
      span.style.textDecoration = "none";
    }
  });
  item.prepend(checkbox);
  item.appendChild(span);
  list.appendChild(item);
  let editBtn = document.createElement("button");
  editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`;
  item.appendChild(editBtn);
  editBtn.addEventListener("click", function (event) {
    edit();
  });
  //edit
  function edit() {
    //ek edit btn ko click kar rahe hai aur uske baad dusre button ko click kar rahe hai to dono ka edit karne ka option open ho raha hai 1 ka open hone wala logic likhna hai
    if (editBtn.disabled === false) {
      let editInp = document.createElement("input");
      editInp.value = span.innerText;
      let body = document.querySelector("body");
      body.appendChild(editInp);
      editBtn.disabled = true;
      editInp.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          span.innerText = editInp.value;
          editInp.remove();
          editBtn.disabled = false;
        }
      });
    }
  }
  let delBtn = document.createElement("button");
  delBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  item.appendChild(delBtn);
  delBtn.addEventListener("click", function () {
    item.remove();
  });
  /*checkbox feature*/
  checkbox.addEventListener("change", function () {
    if (checkbox.checked === true) {
      span.style.textDecoration = "line-through";
    } else {
      span.style.textDecoration = "none";
    }
  });
};
function emptyVal() {
  alert("Please write task in the input box");
  return;
}
inp.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (inp.value === "") {
      emptyVal();
    } else {
      eleCreate();
    }
  }
});
