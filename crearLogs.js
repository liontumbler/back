const fs = require('fs');

const archivePath = './logs';
const filePath = './logs/proyect.log';

module.exports = function logs(log) {
    try {
        const fechaHoraActual = new Date();
        const fechaFormateada = `${fechaHoraActual.toLocaleDateString()} ${fechaHoraActual.toLocaleTimeString()}`;
        
        if (!fs.existsSync(filePath)) {
            console.log('no existe');
            fs.mkdirSync(archivePath);
            fs.writeFileSync(filePath, `${fechaFormateada} - ${log}\n`);
        } else {
            // Si el archivo existe, agregar el contenido al final
            fs.appendFileSync(filePath, `${fechaFormateada} - ${log}\n`);
        }
    } catch (err) {
        console.error(err);
    }
}


