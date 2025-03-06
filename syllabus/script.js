// Data for weeks and subtopics
const syllabus = [
  {
    week: "Week 0: Scratch",
    subtopics: [
      "Computer Science",
      "Computational Thinking",
      "Problem Solving: Inputs, Outputs",
      "Representation: Unary, Binary, Decimal, ASCII, Unicode, RGB",
      "Abstraction",
      "Algorithms",
      "Running Times",
      "Pseudocode",
      "Scratch: Functions, Arguments, Return Values",
      "Scratch: Variables",
      "Scratch: Boolean Expressions, Conditionals",
      "Scratch: Loops",
      "Scratch: Events",
      "Scratch: Threads"
    ]
  },
  {
    week: "Week 1: C",
    subtopics: [
      "C",
      "Source Code",
      "Machine Code",
      "Compiler",
      "Correctness, Design, Style",
      "Visual Studio Code",
      "Syntax Highlighting",
      "Escape Sequences",
      "Header Files",
      "Libraries",
      "Manual Pages",
      "Types",
      "Conditionals",
      "Variables",
      "Loops",
      "Linux",
      "Graphical User Interface (GUI)",
      "Command-Line Interface (CLI)",
      "Constants",
      "Comments",
      "Pseudocode",
      "Operators",
      "Integer Overflow",
      "Floating-Point Imprecision"
    ]
  },
  {
    week: "Week 2: Arrays",
    subtopics: [
      "Preprocessing",
      "Compiling",
      "Assembling",
      "Linking",
      "Debugging",
      "Arrays",
      "Strings",
      "Command-Line Arguments",
      "Cryptography"
    ]
  },
  {
    week: "Week 3: Algorithms",
    subtopics: [
      "Searching: Linear Search, Binary Search",
      "Sorting: Bubble Sort, Selection Sort, Merge Sort",
      "Asymptotic Notation: Big O, Big Omega, Big Theta",
      "Recursion"
    ]
  },
  {
    week: "Week 4: Memory",
    subtopics: [
      "Pointers",
      "Segmentation Faults",
      "Dynamic Memory Allocation",
      "Stack",
      "Heap",
      "Buffer Overflow",
      "File I/O",
      "Images"
    ]
  },
  {
    week: "Week 5: Data Structures",
    subtopics: [
      "Abstract Data Types",
      "Queues",
      "Stacks",
      "Linked Lists",
      "Trees",
      "Binary Search Trees",
      "Hash Tables",
      "Tries"
    ]
  },
  {
    week: "Week 6: Python",
    subtopics: [
      "Python: Functions, Arguments, Return Values",
      "Python: Variables",
      "Python: Boolean Expressions, Conditionals",
      "Python: Loops",
      "Python: Modules, Packages"
    ]
  },
  {
    week: "Week 7: SQL",
    subtopics: [
      "SQL: Tables",
      "SQL: Types",
      "SQL: Statements",
      "SQL: Constraints",
      "SQL: Indexes",
      "SQL: Keywords, Functions",
      "SQL: Transactions",
      "Race Conditions",
      "SQL Injection Attacks"
    ]
  },
  {
    week: "Week 8: HTML, CSS, JavaScript",
    subtopics: [
      "Internet: Routers, TCP/IP, DNS",
      "HTTP: URLs, GET, POST",
      "HTML: Tags, Attributes",
      "Servers",
      "Regular Expressions",
      "CSS: Properties, Selectors",
      "Frameworks",
      "JavaScript: Variables",
      "JavaScript: Conditionals",
      "JavaScript: Loops",
      "JavaScript: Events"
    ]
  },
  {
    week: "Week 9: Flask",
    subtopics: [
      "Flask",
      "Route",
      "Decorators",
      "Requests, Responses",
      "Sessions",
      "Cookies"
    ]
  },
  {
    week: "Week 10: Cybersecurity",
    subtopics: [
      "Passwords",
      "Brute-Force Attacks",
      "Password Managers",
      "Two-Factor Authentication",
      "One-Time Passwords",
      "Hashing",
      "Rainbow Table",
      "Salting",
      "Cryptography",
      "Secret-Key Cryptography",
      "Symmetric Cryptography",
      "Asymmetric Cryptography",
      "Public-Key Cryptography",
      "HTTPS",
      "Passkeys",
      "End-to-End Encryption",
      "Deletion",
      "Secure Deletion",
      "Full-Disk Encryption",
      "Ransomware"
    ]
  }
];

// Generate weeks and subtopics dynamically
const weeksList = document.querySelector('.weeks-list');

syllabus.forEach((weekData, index) => {
  const weekDiv = document.createElement('div');
  weekDiv.classList.add('week');

  const weekTitle = document.createElement('div');
  weekTitle.classList.add('week-title');
  weekTitle.textContent = weekData.week;
  weekTitle.addEventListener('click', () => {
    const subtopics = weekDiv.querySelector('.subtopics');
    subtopics.style.display = subtopics.style.display === 'block' ? 'none' : 'block';
  });

  const subtopicsDiv = document.createElement('div');
  subtopicsDiv.classList.add('subtopics');

  weekData.subtopics.forEach(subtopic => {
    const subtopicLink = document.createElement('div');
    subtopicLink.classList.add('subtopic');
    subtopicLink.textContent = subtopic;
    subtopicLink.addEventListener('click', () => openModal(`https://www.youtube.com/embed/dQw4w9WgXcQ`)); // Replace with actual video URL
    subtopicsDiv.appendChild(subtopicLink);
  });

  weekDiv.appendChild(weekTitle);
  weekDiv.appendChild(subtopicsDiv);
  weeksList.appendChild(weekDiv);
});

// Modal functionality
const modal = document.getElementById('videoModal');
const closeBtn = document.querySelector('.close');
const videoFrame = document.getElementById('videoFrame');

function openModal(videoUrl) {
  videoFrame.src = videoUrl;
  modal.style.display = 'block';
}

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  videoFrame.src = ''; // Stop the video when modal is closed
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
    videoFrame.src = '';
  }
});
