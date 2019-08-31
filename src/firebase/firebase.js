import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDLiPwRKL-6IONMqpNxJs38IdRyhZmvvxs",
    authDomain: "bills-9802b.firebaseapp.com",
    databaseURL: "https://bills-9802b.firebaseio.com",
    projectId: "bills-9802b",
    storageBucket: "",
    messagingSenderId: "191615803176",
    appId: "1:191615803176:web:d3262dc050df2249"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();


export {firebase, db as default};

// db.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

//
// db.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach(childSnapshot => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses);
//     });

//
// const expenses = [{
//     description: 'Water bill',
//     note: 'Pay till Sunday',
//     amount: 1000,
//     createdAt: moment().valueOf()
// },
//     {
//         description: 'Gas bill',
//         note: 'Pay till Sunday',
//         amount: 3000,
//         createdAt: moment().valueOf()
//     }   ,
//     {
//         description: 'Rent',
//         note: 'Pay till Saturday',
//         amount: 35000,
//         createdAt: moment().valueOf()
//     }
// ]
//
// expenses.forEach(e => db.ref('expenses').push(e));
//


// const notes = [{
//     id: 12,
//     title: 'First',
//     body: 'This is my note'
// }, {
//
//     id: `761ase`,
//     title: 'Another',
//     body: 'This is my note'
// }]
//
//
// firebase.database().ref().set(notes);


// db.ref('notes').push({
//     title: 'Second',
//     body: 'This is my note5'
// })

