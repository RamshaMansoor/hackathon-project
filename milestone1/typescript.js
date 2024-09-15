var hideshow = document.getElementById("hideShow()");
var skills = document.getElementById("Skills");
hideshow.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
