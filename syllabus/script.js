// Navbar Toggle for Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Toggle Subtopic Visibility
document.querySelectorAll('.view-topics').forEach(button => {
  button.addEventListener('click', () => {
    const subtopics = button.nextElementSibling;
    subtopics.classList.toggle('hidden');
  });
});

// Modal Functionality
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

// Function to open the modal
function openModal(topic, video1, video2) {
  modalTitle.textContent = topic;
  modalBody.innerHTML = `
    <p>Here are some resources for <strong>${topic}</strong>:</p>
    <ul>
      <li><a href="${video1}" target="_blank">Video 1</a></li>
      <li><a href="${video2}" target="_blank">Video 2</a></li>
    </ul>
  `;
  modal.classList.add('visible');
}

// Function to close the modal
function closeModalHandler() {
  modal.classList.remove('visible');
}

// Add event listeners to modal links
document.querySelectorAll('.open-modal').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    const topic = e.target.getAttribute('data-topic');
    const video1 = e.target.getAttribute('data-video1');
    const video2 = e.target.getAttribute('data-video2');
    openModal(topic, video1, video2);
  });
});

// Close modal when clicking the close button
closeModal.addEventListener('click', closeModalHandler);

// Close modal when clicking outside the modal
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModalHandler();
  }
});
