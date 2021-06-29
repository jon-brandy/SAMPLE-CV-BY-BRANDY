AOS.init()

// loader
let loaderWrapper = document.querySelector('.loader_wrapper')

window.addEventListener('load', () => {
    loaderWrapper.parentElement.removeChild(loaderWrapper)
})
// end loader

// Skills bar
const skillsSection = document.getElementById('skillsSection')
const skillBars = document.querySelectorAll('.skills_bar > p > span')

const showProgress = () => {
    skillBars.forEach(skillBar => {
        const value = skillBar.dataset.progress
        skillBar.style.opacity = 1
        skillBar.style.width = `${value}%`
    })
}

const hideProgress = () => {
    skillBars.forEach(skillBar => {
        skillBar.style.opacity = 0
        skillBar.style.width = 0
    })
}

window.addEventListener('scroll', () => {
    const screenPos = window.innerHeight
    const skillsSectionPos = skillsSection.getBoundingClientRect().top

    skillsSectionPos < screenPos ? showProgress() : hideProgress()
})
// End skills bar