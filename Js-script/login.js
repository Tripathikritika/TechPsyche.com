var credentials = [
    {
        username : 'Rutvik@gmail.com',
        password : '1234'
    },
    {
        username : 'Kritika@gmail.com',
        password : '4321'
    }
]

window.addEventListener("DOMContentLoaded" , function(){
    var loginButton = document.querySelector('form')
    loginButton.addEventListener('submit' ,validLogedInUsers)
})

function validLogedInUsers(){
    event.preventDefault()
    var username = document.getElementById('email').value
    var password = document.getElementById('password').value

    for( var i = 0 ; i < credentials.length ; i++){

        if(username === credentials[i].username && password === credentials[i].password){
            localStorage.setItem('validUser',JSON.stringify(username))
            location.href = 'index.html'
        }
        else {
            var wrongPassword = document.getElementById('wrongCredentials')
            wrongPassword.textContent = 'Wrong Password or Email Id, Check again'
            wrongPassword.style.color = 'red'
        }
    }  
}