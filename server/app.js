require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { connectToMongoDb } = require('./connect.js')
const bookRoute = require('./routes/book.js');
const userRoute = require('./routes/user.js')
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { restrictToLoggedInUserOnly } = require('./middlewares/auth.js');
const cartRoutes = require('./routes/cart.js');


app.use(cors({
    origin: 'https://booksywebclient.onrender.com',  // your React frontend
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// for book routes.
app.use('/book', bookRoute);


// for user routes.
app.use('/user', userRoute);

//for cart routes.
app.use('/cart', cartRoutes);




app.get('/', (req, res) => {

    res.send('Hi! from Server!');
});


app.get('/protected', restrictToLoggedInUserOnly, (req, res) => {
    return res.json({ ok: true });
})







connectToMongoDb();

app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));





