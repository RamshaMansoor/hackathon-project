const hideshow = document.getElementById("hideShow()") as HTMLButtonElement
const skills = document.getElementById("Skills") as HTMLElement

hideshow.addEventListener('click' ,()=>{
    if (skills.style.display ==='none'){
        skills.style.display ='block'
    } else {
        skills.style.display = 'none'
    }
});