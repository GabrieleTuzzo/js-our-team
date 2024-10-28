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

const cardTemplate = document.getElementById('template--card')
const cardContainer = document.getElementById('card-container')
const DOCfragment = document.createDocumentFragment()

for (let i = 0; i < teamMembers.length; i++) {
    const newCard = cardTemplate.content.cloneNode(true)
    const { name, role, email, img } = teamMembers[i]

    newCard.querySelector('img').src = img

    setInnerText(newCard, '.card-header', name.toUpperCase())
    setInnerText(newCard, '.card-role', role)
    setInnerText(newCard, '.card-email', email)

    DOCfragment.append(newCard)
}

cardContainer.append(DOCfragment)

function setInnerText(node, selector, value) {
    node.querySelector(selector).innerText = value
}
