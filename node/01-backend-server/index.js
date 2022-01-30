const express = require('express');

// Create server
const app = express();

// Server running on 8080 port
app.listen(8080, () => {
    console.log('Server running on port ' + 8080);
});