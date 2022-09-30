// Imports dependencies
import express from 'express'
// App configuration
const app = express();

// View Engine EJS
app.set('view engine', 'ejs');


// Application Startup
const startUp = () => {

    const port = process.env.PORT || 3001
    app.listen(port, () => console.log(`Server listening at ${port}..`))

}

startUp()

