const express = require('express');
const app = express();
const port = process.env.PORT || 1963;
const routes = require('./routes');

app.use(express.json());
routes(app);

app.listen(port, () => {
    console.log(`Server initialized on port ${port}`);
})