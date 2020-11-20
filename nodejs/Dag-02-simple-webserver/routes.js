// routes.js  (Google node.js.documentation)

const fs = require('fs');
const url = require('url');

html = {
    render(path, response) {
        fs.readFile(path, 'utf-8', function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write('Sidan finns ej');
            } else {
                response.write(data);
            }
            response.end();
        })
    }
}
// gör filen möjlig att exportera
module.exports = {
    handleRequest(request, response) {
        response.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        let path = url.parse(request.url).pathname;
        //routing
        switch (path) {
            case '/':
                html.render('./index.html', response);
                break;
            case '/om-oss':
                html.render('./about-us.html', response);
                break;
            case '/bulma':
                html.render('./index-2.html', response);
                break;
            default:
                response.writeHead(404); // write head skickar kod ha en , kan ha flera .write
                response.write('Sidan finns ej');
                response.end();
        }
    }
} 