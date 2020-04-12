const express = require('express');
const user = require('./routes/user');
// Model imports
//const User = require('./models/User');
//DB Connection
const sequelize = require('./config/db');

// App Data
const PORT = process.env.PORT || 5500;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/register', user);

// Routes
app.get('/', (req, res) => {
    res.json({ msg: "At index"});
});


//Connect to DB -- Sequelize
sequelize
    .sync({force: true})
    .then(result => {
        //console.log(result);

        // App waiting for requests
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('DB Error:', err);
    });