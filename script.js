// A JavaScript array is used to demonstrate a FIFO queue.
const queue = [];
let nextTicketNumber = 1;

const form = document.getElementById("student-form");
const nameInput = document.getElementById("student-name");
const serviceInput = document.getElementById("service");
const queueList = document.getElementById("queue-list");
const statusMessage = document.getElementById("status-message");

function showMessage(message, isError = false) {
  statusMessage.textContent = message;
  statusMessage.style.color = isError ? "#b42318" : "#14764b";
}

function renderQueue() {
  document.getElementById("queue-size").textContent = queue.length;
  document.getElementById("next-student").textContent = queue.length ? queue[0].name : "None";
  document.getElementById("last-student").textContent = queue.length ? queue[queue.length - 1].name : "None";

  queueList.replaceChildren();

  if (queue.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "empty";
    emptyItem.textContent = "The queue is empty.";
    queueList.appendChild(emptyItem);
    return;
  }

  queue.forEach((student, index) => {
    const item = document.createElement("li");
    item.className = "queue-item";

    const ticket = document.createElement("span");
    ticket.className = "ticket";
    ticket.textContent = student.ticket;

    const details = document.createElement("div");
    details.className = "student-details";

    const studentName = document.createElement("div");
    studentName.className = "student-name";
    studentName.textContent = student.name;

    const service = document.createElement("div");
    service.className = "student-service";
    service.textContent = "Service: " + student.service;

    details.append(studentName, service);
    item.append(ticket, details);

    if (index === 0) {
      const frontTag = document.createElement("span");
      frontTag.className = "front-tag";
      frontTag.textContent = "FRONT · NEXT";
      item.appendChild(frontTag);
    }

    queueList.appendChild(item);
  });
}

// ENQUEUE: add a new student at the rear of the queue.
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  const service = serviceInput.value.trim();

  if (!name || !service) {
    showMessage("Please enter both the student name and service required.", true);
    return;
  }

  queue.push({ ticket: nextTicketNumber++, name, service });
  showMessage(name + " has been added to the rear of the queue.");
  form.reset();
  renderQueue();
  nameInput.focus();
});

// DEQUEUE: remove and serve the student at the front.
document.getElementById("serve-next").addEventListener("click", () => {
  if (queue.length === 0) {
    showMessage("Cannot dequeue: the queue is empty.", true);
    return;
  }

  const servedStudent = queue.shift();
  showMessage("Now serving " + servedStudent.name + " (Ticket " + servedStudent.ticket + ").");
  renderQueue();
});

// PEEK: display the front element without removing it.
document.getElementById("peek-next").addEventListener("click", () => {
  if (queue.length === 0) {
    showMessage("The queue is empty; there is no next student.", true);
    return;
  }

  showMessage("Next to be served: " + queue[0].name + " (Ticket " + queue[0].ticket + ").");
});

// Clear all waiting students.
document.getElementById("clear-queue").addEventListener("click", () => {
  if (queue.length === 0) {
    showMessage("The queue is already empty.");
    return;
  }

  queue.length = 0;
  showMessage("The queue has been cleared.");
  renderQueue();
});

renderQueue();
