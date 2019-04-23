const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
let todos = [
    {
        userName: 'Taha',
        todo: 'Item 1'
    },
    {
        userName: 'Taha',
        todo: 'Item 2'
    },
    {
        userName: 'Ali',
        todo: 'Item 3'
    }
];

// {
//     userName: 'ABC',
//     todo: 'item 1'
// }
// let todos = [
//     {
//         id: 9,
//         userId: 1,
//         text: 'abc'
//     }

// ]
// let users = [
//     {
//         name: 'user 1',
//         id: 1
//     }
// ];

// function parser(x){
//     return function(req, res, next){
//         next();
//     }
// }

app.get('/file', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

// app.use(parser('abc'))

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     console.log("GET Executed.");
//     res.send(todos);
//     // res.render('./index');
// });
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// app.use((req, res) => {
//     console.log(new Date())
//     console.log(req.method);
//     console.log(req.url);
// })

// app.use((req, res, next) => {
//     console.log("Todo 1");
//     var userName = req.query.user;
//     console.log(userName);
//     if (users.indexOf(userName) != -1) {
//         console.log("USER FOUND");
//         req.x = userName;
//         next();
//     } else {
//         next(true);
//     }
// });


// app.get('/todo', (req, res) => {
//     console.log("post Executed.");
//     console.log("user from next() ", req.x);
//     res.send('Hello World');
//     console.log(req.body);
//     todos.push({ userName: req.x, todo: req.query.todoValue });
//     console.log('TODOS ====>>> ', todos);
// });


//Rest APIs     FOR PRACTICE...
// app.get('/user', (req, res) => {

// })
// '/user/Taha/todos/1243463'
app.get('/user/:id/todos/:todoId', (req, res) => {
    console.log("uId ", req.params.id); //user id
    console.log("todoId ", req.params.todoId); //todo id
})
// app.delete('/user/:id/todos/:todoId', (req, res) => {

// })
// app.post('/user', (req, res) => {

// })
// app.delete('/user/:id', (req, res) => {

// })
// app.put('/user/:id', (req, res) => {

// })

app.get('/xyz/:data', (req, res) => {
    console.log("XYZ Executed.");
    res.send('Request complete')
});

app.get('/getByUser', (req, res) => {
    console.log("1 ------ ", req.x);
    console.log("2 ------ ", todos);
    // res.status(500).send('Something broke!')
    // const userData = todos.find((obj) => {
    //     if (req.x == obj.userName) {
    //         return obj;
    //     }
    // })
    // console.log("userData ", userData);

    const userData = todos.filter((obj) => {
        return obj.userName == req.x;
    });
    console.log("userData ", userData);
    res.send(userData);

});


app.post('/abc', (req, res) => {
    console.log("GET Executed.");
    res.send('Hello World');
    console.log(req.body);
});


app.delete('/', (req, res) => {
    console.log("--------- ", req.query)
    let index = todos.indexOf(req.query.todo);
    if (index != -1) {
        todos.splice(index, 1);
        res.send('Delete Successfully.');
    } else {
        console.log('error');
        res.send('Delete Unsuccessfully.');
    }
});

app.use('**', (req, res) => { res.send('404') });

app.use('/todo', function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(port, () => { console.log('Running') });


// Middlewares in express
// Configurable functions
// URL Mounting

// Configurable Function
// function memorize(a) {
//     return function (b) {
//         return a + b;
//     }
// }

// var sumby2 = memorize(2);
// console.log(sumby2(5));