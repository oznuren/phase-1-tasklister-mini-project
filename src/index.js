document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("submit", () => {
    document.querySelector("#tasks").innerHTML += `
    <div class="task">
        <span id="taskname">
            ${document.querySelector("#create-task-form input").value}
        </span>
        <button class="delete">
            <i class="far fa-trash-alt"></i>
        </button>
    </div>
  `;

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    event.preventDefault();
  });
});
