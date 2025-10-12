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
        cvLanguageNote.style.display = 'none';
    } else {
        downloadButton.setAttribute('href', "https://github.com/ensuca/ensuca.githubio/raw/main/Enes-Uca-CV-EN.pdf");
        cvLanguageNote.style.display = 'block';
    }
}

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
    