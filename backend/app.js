const express = require('express');
const cors = require('cors');
const rewriteRoute = require('./routes/rewrite');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/rewrite', rewriteRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API server listening on port ${PORT}`));