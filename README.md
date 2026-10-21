# Student Service Queue Management System

## Project overview
This web application demonstrates a real-world application of the **Queue** data structure. It models students waiting for assistance at a university service office and follows **FIFO (First In, First Out)**: the first student added is the first student served.

## Real-world applications of queues
- Student service and registration offices
- Printer job management
- Supermarket checkout lines
- Operating-system task and process scheduling
- Hospital registration and routine service queues (emergency cases may use priority handling)

## Why queues are necessary
Queues organize requests that cannot be handled immediately, maintain arrival order where FIFO is appropriate, clarify who should be served next, and reduce confusion when many people need the same service.

## Features
- Add a student and the service they require (**enqueue**)
- Serve the next student (**dequeue**)
- View the next student without removing them (**peek/front**)
- Display the queue size
- Display the current queue from front to rear
- Clear the waiting queue
- Responsive layout for mobile and desktop browsers

## Data structure implementation
The queue is implemented using a JavaScript array:
- `queue.push(student)` adds a student at the rear.
- `queue.shift()` removes a student from the front.
- `queue[0]` accesses the next student.
- `queue.length` returns the number of waiting students.
- `queue.length === 0` checks whether the queue is empty.

This is a learning prototype. Queue data is held in memory and resets when the page is refreshed. A production system could store records in a database and apply appropriate access controls.

## Files
- `index.html` — page structure and form
- `style.css` — styling and responsive layout
- `script.js` — queue operations and user interactions

## How to run locally
1. Download and extract the ZIP file.
2. Open the `student-service-queue-app` folder.
3. Open `index.html` in a web browser.
4. Add at least three students and test that the first student added is served first.

## Deploy with GitHub Pages
1. Create a new GitHub repository, for example `student-service-queue-app`.
2. Upload the three project files (`index.html`, `style.css`, and `script.js`) to the repository's root. You can also upload the ZIP and extract the files on your computer first; GitHub Pages needs the actual files, not just a ZIP.
3. Open the repository's **Settings → Pages**.
4. Under the build/deployment section, select **Deploy from a branch**.
5. Select the `main` branch and `/(root)` folder, then save.
6. Wait for GitHub Pages to publish the site. The Pages URL will appear in Settings → Pages.

## Suggested test
Add Ama, Kojo, and Esi in that order. Click **Serve next student**. Ama should be removed first, then Kojo, then Esi. This verifies FIFO behaviour.
