let nombre1, correoD, contraD , numeroD ;

let formulario = document.getElementById('form');


formulario.addEventListener('submit', (e) => {
    console.log('hola');
    e.preventDefault();
    LeerDatos()
})

function LeerDatos(nombre1,correoD,contraD,numeroD) {
    nombre1 = document.getElementById('nombre1').value
    correoD = document.getElementById('correoD').value
    contraD = document.getElementById('contraD').value
    numeroD = document.getElementById('numeroD').value
    
    
    ValidarData(nombre1, correoD,contraD, numeroD)
    
}

function ValidarData (nombre1, correoD,contraD,numeroD) {
    if(nombre1.length==0 || correoD.length==0 || contraD.length==0 || numeroD.length==0) {
        
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          });
    }

    else{
        swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )

    }

    
    
    guardarLocarStorage(nombre1,correoD,contraD,numeroD)
}

function guardarLocarStorage(nombre1,correoD,contraD,numeroD) {
    localStorage.setItem('Nombre1',nombre1);
    localStorage.setItem('correoD',correoD);
    localStorage.setItem('contraD',contraD);
    localStorage.setItem('numeroD',numeroD);
    
}

