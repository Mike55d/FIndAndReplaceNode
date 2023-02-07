const fs = require('fs');
const folder = './testFolder/';
const blue = "some shit text";


const readFiles = () => {
    const files = fs.readdirSync(folder);
    console.log('\x1b[34m',`Archivos encontrados : ${files.length}`,"\x1b[0m");
    let filesProcesed = 0;
    files.forEach(file => {
        const filePath = folder + file;
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            const sentences = data.split('\n');
            const newSentences = sentences.map((sentence) => {
                const phpWay = '/imagenes/BARRA/".$phpEchoWay."/';
                const htmlWay = '/imagenes/BARRA/<?php echo $htmlWay ?>/';
                const stringToReplace = '/imagenes/BARRA/';
                const isPhpEcho = sentence.search('echo');
                const isImage = sentence.search(stringToReplace);
                if (isPhpEcho !== -1 && isImage !== -1) {
                    return sentence.replace(stringToReplace, phpWay);
                }
                if (isImage !== -1) {
                    return sentence.replace(stringToReplace, htmlWay);
                }
                return sentence;
            });
            const newContent = newSentences.join('\n');
            fs.writeFile(filePath, newContent, err => {
                if (err) {
                    console.log(err);
                    return;
                }
            })
            console.log("\x1b[32m",`archivo : ${file} LISTO!`,'\x1b[0m');
            filesProcesed++
            console.log(` Archivos procesados ${filesProcesed}`);
            console.log(` Faltan ${files.length - filesProcesed}`);
        });
    })

}

readFiles();