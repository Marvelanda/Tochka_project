require('dotenv').config();
const express = require('express');
const cors = require('cors');

const hbs = require('hbs');
const path = require('path');

const indexRoute = require('./src/routes/index');
const menusRoute = require('./src/routes/menus');
const bookingsRoute = require('./src/routes/bookings');
const contactsRoute = require('./src/routes/contacts');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src', 'views'));
hbs.registerPartials(path.join(__dirname, 'src', 'views', 'partials'));

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', indexRoute);
app.use('/menus', menusRoute);
app.use('/bookings', bookingsRoute);
app.use('/contacts', contactsRoute);

app.listen(PORT, () => {
  console.log('Server has been started on port: ', PORT);
});
