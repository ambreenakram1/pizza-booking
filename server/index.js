const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const insertUser = require("./database/dao/users_dao/insert_user");
const findUser = require("./database/dao/users_dao/find_user");
const insertOrder = require('./database/dao/order/Order_pizza');
const app = express();
const port = 3000;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/api/register-user', (req, res) => {
    const {first_name, last_name, email, password} = req.body;

    insertUser(
        first_name,
        last_name,
        email,
        password,
        data => {
            res.json({
                status: 'SUCCESS',
                data: data
            });
        },
        err => {
            res.json({
                status: 'FAILURE',
                data: null
            });
        }
    )
});
app.post('/api/login-user', (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;

    findUser(
        email,
        user => {
            if (user === null) {
                res.json({
                    status: 'NO_USER_EXIST',
                });
            } else {
                if (user.password !== password) {
                    res.json({
                        status: 'INCORRECT_PASSWORD',
                    });
                } else {
                    res.json({
                        status: 'SUCCESS',
                        data: user
                    });
                }
            }
            console.log(user);
        },
        err => {
            res.json({
                status: 'FAILURE',
                data: err.message
            });
        }
    )

});
app.post('/api/add-to-cart', (req, res) => {
    const { userId, pizzaType, size, price } = req.body;

    insertOrder(
        userId,
        pizzaType,
        size,
        price,
        data => {
            res.json({
                status: 'SUCCESS',
                data: data
            });
        },
        err => {
            res.json({
                status: 'FAILURE',
                data: null
            });
        }
    );
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});