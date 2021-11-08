
const consultation = `{ helloWorld }`

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        query: consultation
    })
    
}

createHelloWorld = (string) => {
    const body = document.querySelector('body')
    body.innerHTML = string
}

fetch('http://localhost:4000/graphql', options)
.then(response => response.json())
.then(data => createHelloWorld(data.data.helloWorld))
