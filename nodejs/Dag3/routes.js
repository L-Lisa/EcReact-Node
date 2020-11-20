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

        res.writeHead(200, {
            'Content-Type': ' text/html; charset-utf-8'
        })
        let path = url.parse(req.url).pathname;

        switch (path) {
            case '/':
                html.render('./index.html', res)
                break;
            case '/om-oss':
                html.render('./about-us.html', res)
                break;
            default:
                res.writeHead(404)
                res.write('Sidan Finns inte')
                res.end()
        }
    }
}