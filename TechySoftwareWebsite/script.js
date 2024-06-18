// Feedback Form Modal Script

const feedbackModal = document.getElementById('feedback-modal');
const feedbackForm = document.getElementById('feedback-form');

feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(feedbackForm);
    // Handle form submission and store feedback data
    console.log(formData);
    feedbackModal.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
    feedbackModal.style.display = 'none';
});

// Social Media Links Script

const socialMediaLinks = document.querySelectorAll('.social-media-link');

socialMediaLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(link.href, '_blank');
    });
});