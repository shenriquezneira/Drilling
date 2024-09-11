$(document).ready(function () {
    console.log('paso')
    $('#btnSubmit').click(function () {

        let name = $('#inputName').val()
        let email = $('#inputEmail').val()
        let message = $('#inputMessage').val()

        if (name != '' && email != '' && message != '') {
            $('#pName').html(`<strong>Nombre: </strong>${name}`)
            $('#pEmail').html(`<strong>Correo: </strong>${email}`)
            $('#pMessage').html(`<strong>Mensaje: </strong>${message}`)
            $('#inputName').val('')
            $('#inputEmail').val('')
            $('#inputMessage').val('')
        }
        else {
            alert('Falta Ingresar un campo')
        }


    })
})