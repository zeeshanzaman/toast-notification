const button = document.getElementById('button')
const toast = document.getElementById('toasts')

const message = [
    'Message One',
    'Messge Two',
    'Message Three',
    'Message Four'
]

button.addEventListener('click', () => createNotification())

function createNotification() {
    const notif = document.createElement('div')
    notif.classList.add('toast')

    notif.innerText = getRandomMessage()
}

function getRandomMessage() {

}