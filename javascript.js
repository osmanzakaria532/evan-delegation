const list = document.getElementById("list");
list.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    if (e.target.innerText === "পিএইচপি") {
      e.target.style.backgroundColor = "red";
    } else if (e.target.innerText === "জাভা") {
      e.target.style.backgroundColor = "blue";
    } else if (e.target.innerText === "পাইথন") {
      e.target.style.backgroundColor = "pink";
    } else if (e.target.innerText === "সি") {
      e.target.style.backgroundColor = "blue";
    } else {
      e.target.style.backgroundColor = "yellow";
    }
  }
});

function addElement() {
  const newElement = document.createElement("li");
  newElement.textContent = "ডট নেট";
  list.appendChild(newElement);
}
