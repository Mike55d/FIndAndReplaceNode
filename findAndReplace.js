const fs = require('fs');
const folder = './testFolder/';
const blue = "some shit text";


const readFiles = () => {
    const files = fs.readdirSync(folder);
    console.log(files);
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
                const htmlWay = '/imagenes/BARRA/<?php echo $testImage?>/';
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
            console.log(`file : ${file} done`);
        });
    })

}

// const readFile = () => {
//     fs.readFile('./testFolder/testFile2.php', 'utf8', (err, data) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         const sentences = data.split('\n');
//         const blue = sentences[5];
//         console.log(blue.search('echo'));
//         console.log(blue);
//         const newSentences = sentences.map((sentence) => {
//             const phpWay = '/imagenes/BARRA/".$phpEchoWay."/';
//             const htmlWay = 'bluesss';
//             const stringToReplace = '/imagenes/BARRA/';
//             const isPhpEcho = sentence.search('echo');
//             const isImage = sentence.search(stringToReplace);
//             if (isPhpEcho && isImage) {
//                 console.log(sentence);
//                 return sentence.replace(stringToReplace, phpWay);
//             }
//             return sentence;
//         });
//         console.log(newSentences);
//         console.log(`file : ${file} done`);
//     });
// }

readFiles();
// readFile();