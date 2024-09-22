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

    // Update form placeholders
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
    if (isEnglish) {
        input.placeholder = input.getAttribute('data-en');
    } else {
        input.placeholder = input.getAttribute('data-tr');
    }
    });

    // Initial download link setup (for the default language)
    document.getElementById('download-cv').setAttribute('href', "https://github.com/ensuca/ensuca.githubio/raw/main/Enes-Uca-CV-EN.pdf");
    