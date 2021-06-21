const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 1,limite = 10,lista) => {
    try{
       
        let salida = '';
    
        for(let i = 0; i < limite; i++){
            
            salida += `${base} x ${i+1} = ${base * (i + 1)}\n`;
    
        }
        
        if(lista){

            console.log('=========================='.yellow);
            console.log(`Tabla del ${base}:`.blue)
            console.log('=========================='.yellow);

            console.log(salida)
    
        }
        fs.writeFileSync(`./salida/tabla-${base}-limite-${limite}.txt`,salida);
        return (`Tabla-${base}-limite-${limite}`);
    }
    catch(error){
        throw error
    }
   
}


module.exports = {
    crearArchivo: crearArchivo
}