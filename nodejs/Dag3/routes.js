// node server


const fs = require('fs')
const url = require(url)

html = {
    render(path, res) {
        fs.readFile(path, 'utf-8', function (error, data) {
            if (error) {
                res.writeHead(404)
                res.write('Finns Ej')
            } else {
                res.write(data)
            }
            res.end()
        })
    }
}
module.exports = {
    handleRequest(req, res) {
        let path = url.parse(req.url).pathname;
        if (req.method === "GET") {
            switch (path) {
                case '/':
                    html.render('./index.html', res)
                    break;
                case '/om-oss':
                    html.render('./about-us.html', res)
                    break;
                default:
                    res.writeHead(404, {
                        'Content-Type': 'text/html; charset=utf-8'
                    })
                    res.write('Sidan Finns inte')
                    res.end()
            }
        }
        else if (req.method === "POST") {
            switch (path) {
                case '/':
                    res.writeHead(200)
                    res.write('Inside POST')
                    res.end()
            }
        }
        else {
            res.write('Ej tillåtet:' + req.method)
            res.end()
        }
    }
}