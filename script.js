// script.js
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', event => {
        const codeBlock = event.target.previousElementSibling;
        navigator.clipboard.writeText(codeBlock.textContent).then(() => {
            alert('Code copied to clipboard!');
        });
    });
});

// Add smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();
        document.querySelector(event.target.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
