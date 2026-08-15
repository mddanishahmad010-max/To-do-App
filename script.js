let inp = document.querySelector("input");
let btn = document.querySelector("#btn");
let list = document.querySelector("ul");
let currentEditInp = null;
let currentEditBtn = null;
let currentEditIcon = null;
let task = document.querySelector(".task");
let taskCom = document.querySelector(".task-completed");
let taskCompleted = 0;
let taskArr = [];
btn.addEventListener("click", function () {
  if (inp.value === "") {
    emptyVal();
  } else {
    eleCreate();
  }
});
let eleCreate = function () {
  let editInp;
  let btnEdit;
  let itemBox = document.createElement("div");
  let box1 = document.createElement("div");
  let box2 = document.createElement("div");
  box1.classList.add("box1");
  list.appendChild(itemBox);
  itemBox.appendChild(box1); //c
  itemBox.appendChild(box2); //c
  itemBox.classList.add("itemBox");
  let item = document.createElement("li");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("check");
  let span = document.createElement("span");
  span.innerText = inp.value;
  span.classList.add("span");
  taskArr.push(span.innerText);
  task.innerText = taskArr.length;
  inp.value = "";
  span.addEventListener("click", function () {
    if (checkbox.checked === false) {
      checkbox.checked = true;
      span.style.textDecoration = "line-through";
      // checkbox.classList.add("true");
      taskCompleted++;
      taskCom.innerText = taskCompleted;
    } else {
      checkbox.checked = false;
      span.style.textDecoration = "none";
      // checkbox.classList.add("false");
      taskCompleted--;
      taskCom.innerText = taskCompleted;
    }
  });
  box1.prepend(checkbox);
  box1.appendChild(span);
  box1.appendChild(item);
  let editBtn = document.createElement("button");
  editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`;
  box2.appendChild(editBtn);
  editBtn.classList.add("editBtn");
  editBtn.addEventListener("click", function (event) {
    edit();
    if (checkbox.checked === true) {
      checkbox.checked = false;
      span.style.textDecoration = "none";
      taskCompleted--;
      taskCom.innerText = taskCompleted;
    }
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
    itemBox.appendChild(editInp);
    itemBox.appendChild(btnEdit);
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
  box2.appendChild(delBtn);
  delBtn.classList.add("delBtn");
  delBtn.addEventListener("click", function () {
    itemBox.remove();
    let ind = taskArr.indexOf(span.innerText);
    taskArr.splice(ind, 1);
    task.innerText = taskArr.length;
    if (checkbox.checked === true) {
      taskCompleted--;
      taskCom.innerText = taskCompleted;
    }
    if (editInp) {
      editInp.remove();
      btnEdit.remove();
    }
  });
  /*checkbox feature*/
  checkbox.addEventListener("change", function () {
    if (checkbox.checked === true) {
      span.style.textDecoration = "line-through";
      // checkbox.classList.add("true");
      taskCompleted++;
      taskCom.innerText = taskCompleted;
    } else {
      span.style.textDecoration = "none";
      // checkbox.classList.add("false");
      taskCompleted--;
      taskCom.innerText = taskCompleted;
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
