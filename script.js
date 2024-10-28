const teamMembers = [
    {
        name: 'Marco Bianchi',
        role: 'Designer',
        email: 'marcobianchi@team.com',
        img: 'img/male1.png',
    },
    {
        name: 'Laura Rossi',
        role: 'Front-end Developer',
        email: 'laurarossi@team.com',
        img: 'img/female1.png',
    },
    {
        name: 'Giorgio Verdi',
        role: 'Back-end Developer',
        email: 'giorgioverdi@team.com',
        img: 'img/male2.png',
    },
    {
        name: 'Marta Ipsum',
        role: 'SEO Specialist',
        email: 'martarossi@team.com',
        img: 'img/female2.png',
    },
    {
        name: 'Roberto Lorem',
        role: 'SEO Specialist',
        email: 'robertolorem@team.com',
        img: 'img/male3.png',
    },
    {
        name: 'Daniela Amet',
        role: 'Analyst',
        email: 'danielaamet@team.com',
        img: 'img/female3.png',
    },
]

const cardTemplate = document.querySelector('#card-container .card-template')
const cardContainer = document.getElementById('card-container')
const DOCfragment = document.createDocumentFragment()

for (let i = 0; i < teamMembers.length; i++) {
    const newCard = cardTemplate.cloneNode(true)
    newCard.classList.remove('d-none')

    const { name, role, email, img } = teamMembers[i]

    newCard.querySelector('img').src = img
    newCard.querySelector('.card-header').innerText = name.toUpperCase()
    newCard.querySelector('.card-role').innerText = role
    newCard.querySelector('.card-email').innerText = email

    DOCfragment.append(newCard)
}

cardContainer.append(DOCfragment)
