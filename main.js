const subSections = document.querySelectorAll('.section3-content-sub');
subSections.forEach(subSection => {
    subSection.addEventListener('click', () => {
       const description = subSection.nextElementSibling;
                if (description.style.display === 'block') {
                    subSection.lastChild.innerHTML = "+"
            description.style.display = 'none'; 
        } else {
            subSection.lastChild.innerHTML = "x"
            description.style.display = 'block'; 
        }
    });
});
