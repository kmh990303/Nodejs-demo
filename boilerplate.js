// fs.mkdir('Dogs', {recursive: true}, (err) => {
//     console.log("IN THE CALLBACK!!");
//     if (err) throw err;
// });

// console.log("I COME AFTER MKDIR IN THE FILE");
// 여기까지가 비동기 메서드

/*여기가 동기 메서드 */
const fs = require('fs');
const folderName = process.argv[2] || 'Project'

try {
    fs.mkdirSync(folderName);

    fs.writeFileSync(`${folderName}/index.html`, 'good');
    fs.writeFileSync(`${folderName}/app.js`, 'good');
    fs.writeFileSync(`${folderName}/styles.css`, 'good');
} catch (e) {
    console.log(e);
}
/*fs.writeFileSync를 적용할 때, 인자로 어떤 내용이 들어갈지를 꼭 작성해야 올바르게 실행됨*/