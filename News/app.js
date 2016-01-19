﻿var http = require('http');
var port = process.env.port || 3021;
http.createServer(function (req, res) {
    if (req.method == 'GET') {
        var body = '';
        var parametros = req.url.split('?');
        switch (parametros[0]) {
            case '/update_news':{
                var update_news = require('./includes/update_news.js');
                update_news.execute_insert_news();  
            }
        }
    }
    res.writeHead(404, "Not found", { 'Content-Type': 'text/html' });
    res.end('<html><head><title>404 - Not found</title></head><body><h1>Not found.</h1></body></html>');
}).listen(80);