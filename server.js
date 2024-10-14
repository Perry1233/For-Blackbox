const http = require('http')

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain')
    response.end('Connecting Backend');
})

const PORT = 4500;

server.listen(PORT, () => {
    console.log('Server is running.')
})

const apiRoutes = require('./path-to-your-router-file');
app.use('/api', apiRoutes);
