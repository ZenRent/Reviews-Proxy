const express = require('express')
const path = require('path')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 4000;
app.use(cors())

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/reviews', createProxyMiddleware({ target: `http://localhost:1000/`, changeOrigin: true }));
// app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/api/more', createProxyMiddleware({ target: `http://localhost:3000/`, changeOrigin: true }));
// app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/api/galleries', createProxyMiddleware({ target: `http://localhost:3001/`, changeOrigin: true }));
// EROLL
app.use('/', express.static(path.join(__dirname, './client/public')));
app.use('/api/listings', createProxyMiddleware({ target: `http://localhost:3003/1`, changeOrigin: true }));


app.listen(port, () => console.log("Running on Port: 4000"));