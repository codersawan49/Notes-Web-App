let notesContainer = document.querySelector('.notes-container');
let createButton = document.getElementById('btn');
let inputBoxes = document.querySelectorAll('.notes-box');

function getNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
getNotes()

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);

}

createButton.addEventListener('click', () => {
  let inputBox = document.createElement('p');
  let img = document.createElement("img");
  img.src = "trash-solid.svg";
  inputBox.setAttribute("contenteditable", "true");
  inputBox.className = "notes-box";
  notesContainer.appendChild(inputBox).appendChild(img);

})
notesContainer.addEventListener('click', (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    inputBoxes = document.querySelectorAll('.notes-box')
    inputBoxes.forEach((nt) => {
      nt.onkeyup = function() {
        updateStorage();
      }
    })
  }
});

document.addEventListener('keydown', (eve) => {
  if (eve.key === "Enter") {
    document.execCommand("insertLineBreak");
    eve.preventDefault();
  }
})