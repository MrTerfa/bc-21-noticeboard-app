const firebase = require("../helper/firebase.js");
const auth = firebase.auth();
const db = firebase.database();
const ref = db.ref('/');

module.exports.signup = (req, res) => {
    let fullName = req.body.fullName;
    let email = req.body.email;
    let group = req.body.group;
    let password = req.body.password;

    auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {

        }).catch((error) => {
            let userId = user.uid;
            let userRefs = ref.child("users/" + userId)
        });
}