// Initialize default language on page load
function initializeLanguage() {
    const elements = document.querySelectorAll('[data-en]');

    elements.forEach(el => {
        const englishText = el.getAttribute('data-en');
        if (englishText) {
            el.textContent = englishText;
        }
    });

    // Set default CV link
    const downloadButton = document.getElementById('download-cv');
    if (downloadButton) {
        downloadButton.setAttribute('href', "https://github.com/ensuca/ensuca.githubio/raw/main/Enes-Uca-CV-EN.pdf");
    }

    // Set button text
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = 'Türkçe';
    }
}

// Language toggle function
function toggleLanguage() {
    const elements = document.querySelectorAll('[data-en], [data-tr]');
    const isEnglish = document.getElementById('lang-toggle').textContent === 'Türkçe';

    elements.forEach(el => {
        if (isEnglish) {
            el.textContent = el.getAttribute('data-tr') || el.textContent;
            if (el.placeholder) el.placeholder = el.getAttribute('data-tr');
        } else {
            el.textContent = el.getAttribute('data-en') || el.textContent;
            if (el.placeholder) el.placeholder = el.getAttribute('data-en');
        }
    });

    document.getElementById('lang-toggle').textContent = isEnglish ? 'English' : 'Türkçe';

    const downloadButton = document.getElementById('download-cv');
    const cvLanguageNote = document.getElementById('cv-language-note');

    if (isEnglish) {
        downloadButton.setAttribute('href', "https://github.com/ensuca/ensuca.githubio/raw/main/Enes-Uca-CV-TR.pdf");
        if (cvLanguageNote) cvLanguageNote.style.display = 'none';
    } else {
        downloadButton.setAttribute('href', "https://github.com/ensuca/ensuca.githubio/raw/main/Enes-Uca-CV-EN.pdf");
        if (cvLanguageNote) cvLanguageNote.style.display = 'block';
    }
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeLanguage);

// Certificate modal functions
function openModal(src, caption) {
    const modal = document.getElementById('certificateModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');

    modal.style.display = 'block';
    modalImg.src = src;
    captionText.innerHTML = caption;
}

function closeModal() {
    document.getElementById('certificateModal').style.display = 'none';
}

// Close modal when pressing ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
    