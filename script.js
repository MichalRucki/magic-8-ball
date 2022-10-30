const imgButton = document.querySelector('.ball-img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answerArr = ['tak', 'nie', 'nie wiem', 'może tak', 'może nie']


const shakeBall = () => {
    imgButton.classList.add('shake-animation')
    setTimeout(errorCheck, 1000)
}


const errorCheck = () => {
    if (input.value !== '' && input.value.slice(-1) === '?') {
        randomAnswer();
        error.textContent = ''
        imgButton.classList.remove('shake-animation')
    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        answer.textContent = ''
        error.textContent = 'Pytanie musi być zakończone znakiem zapytania'
        imgButton.classList.remove('shake-animation')
    } else {
        answer.textContent = ''
        error.textContent = 'Zadaj pytanie'
        imgButton.classList.remove('shake-animation')
    } 
}


const randomAnswer = () => {
    const randomNumber = Math.floor(Math.random() * answerArr.length)
    
    answer.innerHTML = `<span>Odpowiedź:</span> ${answerArr[randomNumber]}`
    // answer.textContent = answerArr[randomNumber]
}


imgButton.addEventListener('click', shakeBall)