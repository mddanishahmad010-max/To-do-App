let inp = document.querySelector("input");
let btn = document.querySelector("#btn");
let list = document.querySelector("ul");
let currentEditInp = null;
let currentEditBtn = null;
let currentEditIcon = null;
btn.addEventListener("click", function () {
  if (inp.value === "") {
    emptyVal();
  } else {
    eleCreate();
    let keep = document.querySelector(".keep");
    keep.append(taskNum);
  }
});
let eleCreate = function () {
  let editInp;
  let btnEdit;
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
    //is logic ko apne se likhna hai phir se
    if (currentEditInp !== null) {
      currentEditInp.remove();
      currentEditBtn.remove();
      currentEditIcon.disabled = false;
      currentEditInp = null;
      currentEditBtn = null;
      currentEditIcon = null;
    }
    editInp = document.createElement("input");
    editInp.value = span.innerText;
    btnEdit = document.createElement("button");
    btnEdit.innerHTML = '<i class="fa-solid fa-check"></i>';
    item.appendChild(editInp);
    item.appendChild(btnEdit);
    editBtn.disabled = true;
    currentEditInp = editInp;
    currentEditBtn = btnEdit;
    currentEditIcon = editBtn;
    btnEdit.addEventListener("click", function (event) {
      span.innerText = editInp.value;
      editInp.remove();
      btnEdit.remove();
      editBtn.disabled = false;
      currentEditInp = null;
      currentEditBtn = null;
      currentEditIcon = null;
    });
  }
  let delBtn = document.createElement("button");
  delBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  item.appendChild(delBtn);
  delBtn.addEventListener("click", function () {
    item.remove();
    if (editInp) {
      editInp.remove();
      btnEdit.remove();
    }
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
      let keep = document.querySelector(".keep");
      keep.append(taskNum);
    }
  }
});
