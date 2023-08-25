//using the GET method
const https = require("https");
const fs = require("fs");

const url = "https://en.wikipedia.org/wiki/Cher";

const request = https.get(url, (res) => {
    let download = fs.createWriteStream("cher2.html");
    console.log("response started!");
    res.pipe(download);
    res.on("end", () => {
        console.log("Response finished");
    });
});

request.end();