const skillDetails = document.querySelectorAll('.skills-row details');

skillDetails.forEach(detail => {
    detail.addEventListener('click', () => {
        skillDetails.forEach(d => {
            if(d !== detail) {
                d.removeAttribute('open');
            }
        });
    });
});

// -------------------------
// Education Section
// -------------------------
const eduBoxes = document.querySelectorAll('.edu-box summary');

eduBoxes.forEach(summary => {
    summary.addEventListener('click', () => {
        const parentBox = summary.parentElement;

        // Toggle the ul visibility
        const ul = parentBox.querySelector('ul');
        if(ul.style.display === 'block') {
            ul.style.display = 'none';
        } else {
            ul.style.display = 'block';
        }
    });
});