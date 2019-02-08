const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

const userFunctions = require('./userFunctions');
const groupFunctions = require('./groupFunctions');

//User Functions
exports.newUser = userFunctions.newUser;
exports.addRegistrationToken = userFunctions.addRegistrationToken;
exports.userLogin = userFunctions.userLogin;
