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
    if (editBtn.disabled === false) {
      editInp = document.createElement("input");
      editInp.value = span.innerText;
      btnEdit = document.createElement("button");
      btnEdit.innerHTML = '<i class="fa-solid fa-check"></i>';
      // let editBox = document.querySelector(".edit");
      item.appendChild(editInp);
      item.appendChild(btnEdit);
      editBtn.disabled = true;
      btnEdit.addEventListener("click", function (event) {
        span.innerText = editInp.value;
        editInp.remove();
        btnEdit.remove();
        editBtn.disabled = false;
      });
    }
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
    }
  }
});
//mam code
// let inp = document.querySelector("input");
// let btn = document.querySelector("#btn");
// let list = document.querySelector("ul");

// /* GLOBAL "whiteboard" — poori app mein sirf EK edit box track karega */
// let currentEditInp = null;
// let currentEditBtn = null;
// let currentEditIcon = null;

// btn.addEventListener("click", function () {
//   if (inp.value === "") {
//     emptyVal();
//   } else {
//     eleCreate();
//   }
// });

// inp.addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     if (inp.value === "") {
//       emptyVal();
//     } else {
//       eleCreate();
//     }
//   }
// });

// function emptyVal() {
//   alert("Please write task in the input box");
//   return;
// }

// let eleCreate = function () {
//   let item = document.createElement("li");
//   let checkbox = document.createElement("input");
//   checkbox.type = "checkbox";
//   let span = document.createElement("span");
//   span.innerText = inp.value;
//   inp.value = "";

//   span.addEventListener("click", function () {
//     if (checkbox.checked === false) {
//       checkbox.checked = true;
//       span.style.textDecoration = "line-through";
//     } else {
//       checkbox.checked = false;
//       span.style.textDecoration = "none";
//     }
//   });

//   item.prepend(checkbox);
//   item.appendChild(span);
//   list.appendChild(item);

//   /* ---- EDIT BUTTON ---- */
//   let editBtn = document.createElement("button");
//   editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`;
//   item.appendChild(editBtn);

//   editBtn.addEventListener("click", function () {
//     edit();
//   });

//   function edit() {
//     // Step 1: agar koi PURANA edit box khula hai (kisi bhi task ka) to usse hatao
//     if (currentEditInp !== null) {
//       currentEditInp.remove();
//       currentEditBtn.remove();
//       currentEditIcon.disabled = false;
//       currentEditInp = null;
//       currentEditBtn = null;
//       currentEditIcon = null;
//     }

//     // Step 2: naya edit input + save button banao, ISI item ke andar
//     let editInp = document.createElement("input");
//     editInp.value = span.innerText;

//     let btnEdit = document.createElement("button");
//     btnEdit.innerHTML = '<i class="fa-solid fa-check"></i>';

//     item.appendChild(editInp);
//     item.appendChild(btnEdit);

//     editBtn.disabled = true;

//     // Step 3: whiteboard update karo
//     currentEditInp = editInp;
//     currentEditBtn = btnEdit;
//     currentEditIcon = editBtn;

//     // Step 4: save click hone par sab clean karo
//     btnEdit.addEventListener("click", function () {
//       span.innerText = editInp.value;
//       editInp.remove();
//       btnEdit.remove();
//       editBtn.disabled = false;
//       currentEditInp = null;
//       currentEditBtn = null;
//       currentEditIcon = null;
//     });
//   }

//   /* ---- DELETE BUTTON ---- */
//   let delBtn = document.createElement("button");
//   delBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
//   item.appendChild(delBtn);

//   delBtn.addEventListener("click", function () {
//     // agar isi task ka edit box khula tha, whiteboard bhi saaf karo
//     if (currentEditIcon === editBtn) {
//       currentEditInp = null;
//       currentEditBtn = null;
//       currentEditIcon = null;
//     }
//     item.remove();
//   });

//   /* ---- CHECKBOX ---- */
//   checkbox.addEventListener("change", function () {
//     if (checkbox.checked === true) {
//       span.style.textDecoration = "line-through";
//     } else {
//       span.style.textDecoration = "none";
//     }
//   });
// };
