const button = document.getElementById('button')
const toast = document.getElementById('toasts')

const message = [
    'Message One',
    'Messge Two',
    'Message Three',
    'Message Four'
]

button.addEventListener('click', () => createNotification('This is invalid data', 'success'))

function createNotification() {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : 'info')

    notif.innerText = message ? message : getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return message[Math.floor(Math.random() * message.length)]
}