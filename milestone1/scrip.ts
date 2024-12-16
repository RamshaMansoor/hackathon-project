const toggleSkillsBtn = document.getElementById("toggleSkilsBtn") as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLButtonElement;
let skillsShow = true;

toggleSkillsBtn. addEventListener("click", () => {
    if (skillsShow) {
        skills.style.display = "none";
        toggleSkillsBtn.innerText = "show Skills";
    } else {
        skills.style.display = "block";
        toggleSkillsBtn.innerText = "Hide Skills";
    }
    skillsShow = !skillsShow;
})