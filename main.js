// Function to handle the skill bar animation
function animateSkills() {
    const skillsSection = document.getElementById('skills');
    const skills = document.querySelectorAll('.skill-level');
    
    // Check if the skills section is in the viewport
    const skillsPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (skillsPosition < screenPosition) {
        skills.forEach(skill => {
            const level = skill.getAttribute('data-level');
            skill.style.width = level;
        });
        window.removeEventListener('scroll', animateSkills);
    }
}

// Event listener for scroll to trigger skill bar animation
window.addEventListener('scroll', animateSkills);

// Initial call to check for skills on page load
animateSkills();

// Contact Form Submission (example)
document.querySelector('#contact form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    if (name && email && message) {
        alert('Salamat sa iyong mensahe, ' + name + '! Sasagutin ko ito sa lalong madaling panahon.');
        this.reset();
    } else {
        alert('Paki-fill-up-an lahat ng fields.');
    }
});

// New Function: Dark/Light Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    // Update the icon based on the current mode
    if (body.classList.contains('light-mode')) {
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
});
