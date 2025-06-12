function toggleStrikeThrough(checkbox) {
  const textSpan = checkbox.nextElementSibling.querySelector("#todo-text");
  if (checkbox.checked) {
    textSpan.classList.add("checked");
  } else {
    textSpan.classList.remove("checked");
  }
}

const handleEditToogle = (event, i) => {
  event.preventDefault();
  const isMobile = window.matchMedia("(max-width: 720px)").matches;
  const listOfTodo = document.querySelectorAll("li #edit_form");
  listOfTodo.forEach((list) => {
    list.classList.add("hide");  
  });
  const targetedTodoList = listOfTodo[i];
  if (targetedTodoList) {
    targetedTodoList.classList.remove("hide");
    if (isMobile) {
      targetedTodoList.classList.display = "block";
    }
  }
};
