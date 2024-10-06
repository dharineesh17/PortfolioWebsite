// Author: Dharineesh K S
// Mode Script Start
const modeToggle = document.getElementById('modeToggle');
const body = document.body;
// Check for stored mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    modeToggle.checked = true;
}

// Toggle Dark/Light Mode
modeToggle.addEventListener('change', () => {
    if (modeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});
// Mode Script End

// Toggle the navigation menu 
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Smooth scroll functionality remains as before
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        // Close the menu after clicking on a link
        navLinks.classList.remove('active');
    });
});

// Add fade-in animation for sections when scrolled into view
const sections = document.querySelectorAll('.section');
const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Disable Script Start
// Disable right-click context menu
// document.addEventListener('contextmenu', function(event) {
//     event.preventDefault();
// });

// Disable text selection
// document.addEventListener('selectstart', function(event) {
//     event.preventDefault();
// });

// Disable Ctrl+C (Copy)
// document.addEventListener('copy', function(event) {
//     event.preventDefault();
// });

// Disable Ctrl+V (Paste)
// document.addEventListener('paste', function(event) {
//     event.preventDefault();
// });
// Disable Script End

// Project Section Code Start
// Function to display modal and inject project details
function showDetails(projectId) {
    const projects = {
        'project1': '<p><strong>Description:</strong> Developed a responsive portfolio website to showcase web development projects and skills. </p> <p><strong>Technologies Used:</strong> HTML, CSS. Features: Creative SVG designs, LinkedIn and GitHub buttons, resume download button, smooth animations, and attractive UI/UX. </p> <p><strong>Deployment:</strong> Deployed and hosted on W3Spaces.</p>',
        'project2': '<p><strong>Description:</strong> Utilized HTML and CSS to build an appealing and user-friendly front-end interface for a restaurant website. </p><p><strong>Technologies Used:</strong> HTML, CSS, Git. </p><p><strong> Deployment:</strong> Deployed on GitHub Pages, ensuring a seamless experience for users.</p>',
        'project3': '<p><strong>Description:</strong> Proficient in data extraction and cleaning from various sources using Python programming. </p><p><strong>Technologies Used:</strong> Python for data processing and integration, web development for application presentation.</p>',
        'project4': '<p><strong>Description:</strong> Developed a user-friendly to-do list application to manage tasks efficiently. </p><p><strong>Features:</strong> Add, delete, and mark tasks as complete; responsive design for cross-device compatibility. </p><p><strong> Technologies Used:</strong> HTML, CSS, JavaScript. </p><p><strong>Deployment:</strong> Deployed on GitHub Pages. </p><p><strong>Learning Source:</strong> IBM Skill Build program.</p>',
        'project5': '<p><strong>Description:</strong> Developed a simple and intuitive notes application for quick and organized note-taking. </p><p><strong>Features:</strong> Create, edit, delete notes; responsive design for multiple devices. </p><p><strong> Technologies Used:</strong> HTML, CSS, JavaScript. </p><p><strong>Learning Source:</strong> SoloLearn program.</p>',
        'project6': '<p><strong>Description:</strong> Analyzed data using bioinformatics tools to identify critical protein interactions and conformational changes. Additionally, made significant contributions to the thesis and presentations, presenting key findings from the project. Utilizing Unix commands, accessed the server for data processing.</p>',
    };
    

    // Get the modal element and project details
    const modal = document.getElementById('projectModal');
    const modalDescription = document.getElementById('modalDescription');
    const modalTitle = document.getElementById('modalTitle');

    // Set the project details in the modal
    const projectName = document.getElementById(projectId).textContent;
    modalTitle.textContent = `Project Details: ${projectName}`;
    modalDescription.innerHTML = projects[projectId];

    // Display the modal
    modal.style.display = 'block';
}


// Get the <span> element that closes the modal
const closeModal = document.querySelector('.close');

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function () {
    document.getElementById('projectModal').style.display = 'none';
}

// Close the modal if the user clicks outside the modal
window.onclick = function (event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
// Project Section Code End

// Gallery Script Start
let currentSlide = 0;
let images = [];
// let descriptions = [];
// let captions = [];
function openModal(imgArray, captionArray, descriptionArray, link) {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modal-img');
    const modalCaption = document.getElementById('modal-caption');
    const modalLink = document.getElementById('modal-link');
    const modalDescription = document.getElementById('modal-description');

    images = imgArray;
    // descriptions = descriptionArray;
    // captions = captionArray;
    currentSlide = 0;
    
    modal.style.display = "block";
    modalImg.src = images[currentSlide];
    // modalCaption.innerText = captions[currentSlide];
    // modalDescription.innerText = descriptions[currentSlide];
    modalCaption.innerText = captionArray;
    modalDescription.innerText = descriptionArray;

    if (images.length > 1) {
        document.getElementById('prev').style.display = 'block';
        document.getElementById('next').style.display = 'block';
    } else {
        document.getElementById('prev').style.display = 'none';
        document.getElementById('next').style.display = 'none';
    }

    if (link === 'none'){
        modalLink.style.display = 'none';
    } else {
        modalLink.innerHTML = `View: <a href = ${link} target='_blank'>${link}</a>`;
    }
}
function closeModalGallery() {
    document.getElementById('myModal').style.display = "none";
}
function changeSlide(n) {
    currentSlide = (currentSlide + n + images.length) % images.length;
    document.getElementById('modal-img').src = images[currentSlide];
    // document.getElementById('modal-caption').innerText = captions[currentSlide];
    // document.getElementById('modal-description').innerText = descriptions[currentSlide];
}
// Gallery Script End

// footer Script Start
var websiteVersion = "2.0";
var lastUpdated = new Date(2024, 9, 6);
document.getElementById("version").textContent = websiteVersion;
document.getElementById("lastUpdated").textContent = lastUpdated.toLocaleString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
// footer Script End