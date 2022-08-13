const img = document.getElementsByClassName('img')
const score = document.querySelector('.score')
const newGame = document.querySelector('.new-game')
const cont = document.querySelector('.container')
const box = document.querySelector('.box')
const musicTabble = document.querySelector('.music')
const soundEffectsTabble = document.querySelector('.sound-effects')

let music = new Audio('sound/music-back.mp3')
let soundEffect1 = new Audio('sound/Huh.mp3')
let soundEffect2 = new Audio('sound/Hilarious.mp3')

let scorePlus = 1200
let scoreTable = 0

soundEffectsTabble.onclick = () => {
    if(soundEffectsTabble.innerHTML === 'SOUND EFFECTS ON') {
        soundEffectsTabble.innerHTML = 'SOUND EFFECTS OFF'
    }else if(soundEffectsTabble.innerHTML === 'SOUND EFFECTS OFF') {
        soundEffectsTabble.innerHTML = 'SOUND EFFECTS ON'
    }
}

musicTabble.onclick = () => {
    if(musicTabble.innerHTML === 'MUSIC ON') {
        music.pause()
        music.currentTime = 0
        musicTabble.innerHTML = 'MUSIC OFF'
    }else if(musicTabble.innerHTML === 'MUSIC OFF') {
        music.play()
        music.loop = true
        musicTabble.innerHTML = 'MUSIC ON'
    }
}

setInterval(() => {
    const rand = Math.round(Math.random() * 8)
    img[rand].classList.remove('toggle')
    setTimeout(() => {
        img[rand].classList.add('toggle')
    }, scorePlus)
    img[rand].onclick = function () {
        if(soundEffectsTabble.innerHTML === 'SOUND EFFECTS ON') {
            soundEffect1.currentTime = 0
            soundEffect2.currentTime = 0
            soundEffect1.play()
        }
        scoreTable += 1
        if (scoreTable === 14) {
            cont.classList.add('shake')
        } else if (scoreTable === 15) {
            music.pause()
            soundEffect1.pause()
            soundEffect2.play()
            cont.classList.remove('shake')
            box.classList.add('box-toggle')
            scoreTable = 15
            scorePlus = 1500
        }
        img[rand].classList.add('toggle')
        score.innerHTML = 'score: ' + scoreTable
        scorePlus -= 50
    }
}, scorePlus)

class Menu {
    constructor(settings) {
        this.nodeMenu = settings.nodeMenu
        settings.nodeMenuButton.addEventListener(
            'click',
            this.toggle.bind(this)
        )
    }
    toggle() {
        return this.nodeMenu.classList.toggle('js-menu_activated')
    }
}
let nodeMenu = document.querySelector('body')
new Menu({
    nodeMenu: nodeMenu,
    nodeMenuButton: nodeMenu.querySelector('.js-menu__toggle'),
})

newGame.onclick = function () {
    scoreTable = 0
    scorePlus = 1200
    score.innerHTML = 'score: ' + scoreTable
    music.currentTime = 0
    box.classList.remove('box-toggle')
}




// var music = new Audio()
// music.src = "sound/music-back.mp3"
// var soundEffect1 = new Audio()
// soundEffect1.src = "sound/Huh.mp3"
// var soundEffect2 = new Audio()
// soundEffect2.src = "sound/Hilarious.mp3"

// var music = document.createElement("audio")
// music.setAttribute("src", "sound/music-back.mp3")
// var soundEffect1 = document.createElement("audio")
// music.setAttribute("src", "sound/Huh.mp3")
// var soundEffect2 = document.createElement("audio")
// music.setAttribute("src", "sound/Hilarious.mp3")

// const music = document.createElement('audio')
// music.src = 'sound/music-back.mp3'
// const soundEffect1 = document.createElement('audio')
// soundEffect1.src = 'sound/Huh.mp3'
// const soundEffect2 = document.createElement('audio')
// soundEffect2.src = 'sound/Hilarious.mp3'