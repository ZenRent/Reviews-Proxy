const express = require('express')
const path = require('path')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 4000;
app.use(cors())

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/reviews', createProxyMiddleware({ target: `http://localhost:8003`, changeOrigin: true }));
app.use('/api/more', createProxyMiddleware({ target: `http://localhost:3004`, changeOrigin: true }));
app.use('/api/galleries', createProxyMiddleware({ target: `http://localhost:3001`, changeOrigin: true }));

app.use('/api/listings', createProxyMiddleware({ target: `http://localhost:3002`, changeOrigin: true }));


app.listen(port, () => console.log("Running on Port: 4000"));