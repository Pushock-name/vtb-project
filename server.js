const express = require("express");
const server = express();
const path = require('path');


server.get("/", function(req, res){
    res.setHeader("Content-Security-Policy", "default-src 'none';", "base-uri 'none';", "manifest-src yastat.net yastatic.net;", "script-src 'self' 'unsafe-eval' yastat.net yastatic.net mc.yandex.ru mc.webvisor.com mc.webvisor.org;", "style-src 'self' 'unsafe-inline' yastat.net yastatic.net;", "img-src 'self' mc.yandex.ru yastat.net yastatic.net", "font-src data: 'self' yastat.net yastatic.net;", "connect-src 'self' mc.yandex.ru;", "child-src blob: mc.yandex.ru;", "media-src 'self';", "frame-src blob: mc.yandex.ru mc.yandex.md;", "object-src 'none';")
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

server.listen(3000);