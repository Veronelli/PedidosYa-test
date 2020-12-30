const Perdidos = document.querySelectorAll('.st0')
var i = 0
var aux = 0
setTimeout(()=>{

    setInterval(() => {

        Perdidos[i++].classList.toggle('up')
        
        if(i==4){

            Perdidos[i++].classList.toggle('up')

        }
        if(aux==i && i!=1 && aux!=0 ){
            let e = --i
            Perdidos[e].classList.toggle('up')

        }
        console.log(i,aux)
        if(i>9)
            i=0

        aux = i

    },75);

},1000)