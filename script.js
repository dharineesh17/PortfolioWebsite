// Toggle the navigation menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
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


// Project detail toggles (You can expand this to add more dynamic behavior for the projects)
function showDetails(projectId) {
    const projects = {
        'project1': 'Description: Developed a responsive portfolio website to showcase web development projects and skills. Technologies Used: HTML, CSS. Features: Creative SVG designs, LinkedIn and GitHub buttons, resume download button, smooth animations, and attractive UI/UX. Deployment: Deployed and hosted on W3Spaces.',
        'project2': 'Description: Utilized HTML and CSS to build an appealing and user-friendly front-end interface for a restaurant website. Technologies Used: HTML, CSS, Git. Deployment: Deployed on GitHub Pages, ensuring a seamless experience for users.',
        'project3': 'Description: Proficient in data extraction and cleaning from various sources using Python programming. Technologies Used: Python for data processing and integration, web development for application presentation.',
        'project4': 'Developed a user-friendly to-do list application to manage tasks efficiently. Features: Add, delete, and mark tasks as complete; responsive design for cross-device compatibility. Technologies Used: HTML, CSS, JavaScript. Deployment: Deployed on GitHub Pages. Learning Source: IBM Skill Build program.',
        'project5': 'Developed a simple and intuitive notes application for quick and organized note-taking. Features: Create, edit, delete notes; responsive design for multiple devices. Technologies Used: HTML, CSS, JavaScript. Learning Source: SoloLearn program.',
        'project6': 'Analyzed data using bioinformatics tools to identify critical protein interactions and conformational changes. Additionally, made significant contributions to the thesis and presentations, presenting key findings from the project. Utilizing Unix commands, accessed the server for data processing.',
    };
    alert(projects[projectId]);
}

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

var websiteVersion = "1.1.1";
var lastUpdated = new Date(2024, 8, 27);
document.getElementById("version").textContent = websiteVersion;
document.getElementById("lastUpdated").textContent = lastUpdated.toDateString();
