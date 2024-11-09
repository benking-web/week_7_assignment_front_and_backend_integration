const { sequelize, users, doctors, patients, appointments, admins } = require('./models');
const express = require('express');
const bcrypt = require('bcrypt');
const path = require('path');

const app = express();
const port = 3001;

// Middleware to parse JSON requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.get('/users', async (req, res) => {
    res.render('users');
});

app.get('/signup', async (req, res) => {
    res.render('signup');
});

app.get('/login', async (req, res) => {
    res.render('login'); // Consider sending an actual view instead of the HTML file
});

// User Signup
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Name, email, and password are required.' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await users.create({ name, email, password: hashedPassword });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// User Creation Endpoint
app.post('/users', async (req, res) => {
    try {
        const { firstName, lastName, email, password, phoneNumber } = req.body;
        const user = await users.create({ firstName, lastName, email, password, phoneNumber });
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

// Other routes can be added similarly
// Make sure to handle appointments, doctors, patients, etc. logically
app.post('/dashboard', async (req, res) => {
    const { name, email, password } = req.body;


    try {
        // Simple validation
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Name, email, and password are required.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await user.create({ name, email, password: hashedPassword });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/users', async (req, res) => {
    try {
        const { firstName, lastName, email, password, phoneNumber } = req.body;

        // Create the user using an object
        const user = await sequelize.models.User.create({
            firstName,
            lastName,
            email,
            password,
            phoneNumber
        });

        // Respond with the created user and a 201 status code
        res.status(201).json(user);
    } catch (error) {
        // Handle errors, such as validation errors
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

app.post('/patients', async (req, res) => {
    try {
        const { firstName, lastName, email, password, phoneNumber } = req.body;

        // Create the user using an object
        const user = await sequelize.models.User.create({
            firstName,
            lastName,
            email,
            password,
            phoneNumber
        });

        // Respond with the created user and a 201 status code
        res.status(201).json(user);
    } catch (error) {
        // Handle errors, such as validation errors
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

app.post('/doctors', async (req, res) => {
    try {
        const { firstName, lastName, email, password, phoneNumber, specialization, availability } = req.body;

        // Create the user using an object
        const user = await sequelize.models.User.create({
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
            specialization,
            availability
        });

        app.post('/appointments', async (req, res) => {
            try {
                const { firstName, lastName, email, password, phoneNumber,description,status,date,time } = req.body;
        
                // Create the user using an object
                const user = await sequelize.models.User.create({
                    firstName,
                    lastName,
                    email,
                    password,
                    phoneNumber,
                    description,
                    status,
                    date,
                    time
                });

                app.post('/admin', async (req, res) => {
                    try {
                        const { name, email, password, } = req.body;
                
                        // Create the user using an object
                        const user = await sequelize.models.User.create({
                            name,
                            email,
                            password
                            
                        });
                
                        // Respond with the created user and a 201 status code
                        res.status(201).json(user);
                    } catch (error) {
                        // Handle errors, such as validation errors
                        console.error(error);
                        res.status(400).json({ error: error.message });
                    }
                });
        
                // Respond with the created user and a 201 status code
                res.status(201).json(user);
            } catch (error) {
                // Handle errors, such as validation errors
                console.error(error);
                res.status(400).json({ error: error.message });
            }
        });

        // Respond with the created user and a 201 status code
        res.status(201).json(user);
    } catch (error) {
        // Handle errors, such as validation errors
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});


// Start the server
app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected');
        console.log(`App listening at http://localhost:${port}`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
