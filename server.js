// server.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.lisen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});
