function submitData(name, email) {
    const url = 'http://localhost:3000/users'
    const nameAndEmail = {
        name: name, 
        email: email,
    }

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
            'Accept': 'application/json', 
        }, 

        body: JSON.stringify(nameAndEmail), 
    }).then(response => response.json())
    .then(newUserData => {
        const header = document.createElement('h2')
        const id = newUserData.id
        header.textContent = `Just Created User # ${id}!`
        document.body.append(header)

    }).catch(error => {
        const errorHeader = document.createElement('h2')
        const id = error.message 
        errorHeader.textContent = `This is the error message: ${id}`
        document.body.append(errorHeader)
    })
}
        


  
