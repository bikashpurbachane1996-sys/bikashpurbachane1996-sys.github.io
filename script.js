// Mobile Menu Navigation Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

mobileToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Interactive Team Tabs
function openTeamTab(evt, tabName) {
  const tabContents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
  }

  const tabButtons = document.getElementsByClassName("tab-btn");
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }

  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Program Live Search Filter
function filterPrograms() {
  const input = document.getElementById('program-search').value.toLowerCase();
  const cards = document.getElementsByClassName('program-card');

  for (let i = 0; i < cards.length; i++) {
    const title = cards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
    const desc = cards[i].getElementsByTagName('p')[0].innerText.toLowerCase();
    
    if (title.includes(input) || desc.includes(input)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}

// Dynamic Modal Windows for Calendar and Exam Routines
function openModal(type) {
  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');

  let content = '';

  if (type === 'calendarModal') {
    content = `
      <h3>Academic Calendar (Item 9)</h3>
      <p style="margin-top:1rem;"><strong>First Term:</strong> Baisakh - Ashad</p>
      <p><strong>Mid-Term Break:</strong> Bhadra</p>
      <p><strong>Final Exams:</strong> Chaitra</p>
    `;
  } else if (type === 'facultyModal') {
    content = `
      <h3>Teaching Faculty Directory (Item 13)</h3>
      <p style="margin-top:1rem;">Over 50+ specialized educators across Basic, Secondary, and Higher Secondary (+2) wings.</p>
    `;
  } else if (type === 'examModal') {
    content = `
      <h3>Exam Routines (Item 14)</h3>
      <p style="margin-top:1rem;">Routine schedules for First Terminal Examination & Board Examinations are published on the official notice board.</p>
    `;
  } else if (type === 'evalModal') {
    content = `
      <h3>Examination & Evaluation (Item 10)</h3>
      <p style="margin-top:1rem;">Continuous Assessment System (CAS) combined with terminal written examinations as per National Examination Board guidelines.</p>
    `;
  }

  body.innerHTML = content;
  overlay.style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal-overlay').style.display = 'none';
}
