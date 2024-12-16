var toggleSkillsBtn = document.getElementById("toggleSkilsBtn");
var skills = document.getElementById('skills');
var skillsShow = true;
toggleSkillsBtn.addEventListener("click", function () {
    if (skillsShow) {
        skills.style.display = "none";
        toggleSkillsBtn.innerText = "show Skills";
    }
    else {
        skills.style.display = "block";
        toggleSkillsBtn.innerText = "Hide Skills";
    }
    skillsShow = !skillsShow;
});
