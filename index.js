
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs"

inquirer.prompt([{"message":"Type Your URL","name":"URL"}])
.then((ans)=>{
    const url =ans.URL;
    const qrimage= qr.image(url);
    qrimage.pipe(fs.createWriteStream("qerimage.png" , (err)=>{console.log(err)}))
    fs.writeFile("url.txt",url,(err)=>{console.log(err)});

}).catch((err)=>console.log(err));

