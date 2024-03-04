import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR4P76VK8MhBNr_USQp2JrDcY6PkLX6-0",
  authDomain: "task-management-b9527.firebaseapp.com",
  projectId: "task-management-b9527",
  storageBucket: "task-management-b9527.appspot.com",
  messagingSenderId: "927835389371",
  appId: "1:927835389371:web:c6b8d86663bbf4b2ed989e",
  measurementId: "G-22QTNHF006",
};

const app = initializeApp(firebaseConfig);
const database = getDatabases(app);
const auth = getAuth(app);

//Variable Declarations
const submitButton = document.getElementById("submit");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById(
  "confirm-password-signup"
);

const createacctbtn = document.getElementById("create-acct-btn");
const returnBtn = document.getElementById("return-btn");
const signupButton = document.getElementById("sign-up");

document.addEventListener("DOMContentLoaded", function () {
  const signupEmailIn = document.getElementById("email-signup");
  const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
  const signupPasswordIn = document.getElementById("password-signup");
  const confirmSignUpPasswordIn = document.getElementById(
    "confirm-password-signup"
  );

  const createacctbtn = document.getElementById("create-acct-btn");

  createacctbtn.addEventListener("click", function () {
    var isVerified = true;

    const signupEmail = signupEmailIn.value;
    const confirmSignupEmail = confirmSignupEmailIn.value;

    // Check if email fields match
    if (signupEmail !== confirmSignupEmail) {
      window.alert("Email fields do not match. Try again.");
      isVerified = false;
    }

    const signupPassword = signupPasswordIn.value;
    const confirmSignUpPassword = confirmSignUpPasswordIn.value;

    // Check if password fields match
    if (signupPassword !== confirmSignUpPassword) {
      window.alert("Password fields do not match. Try again.");
      isVerified = false;
    }

    // If all checks pass, attempt to create a user
    if (isVerified) {
      createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          window.alert("Success! Account created.");
          // Redirect to createTask.html
          window.location = "./createTask.html";
        })
        .catch((error) => {
          // Handle errors during user creation
          const errorCode = error.code;
          const errorMessage = error.message;
          window.alert("Error occurred. Try again.");
          window.alert(errorMessage);
        });
    }
  });
});

submitButton.addEventListener("click", function () {
  email = emailInput.value;
  password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.alert("Success! Welcome back!");
      // Redirect to createTask.html after successful login
      window.location = "./createTask.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert("Error occurred. Try again.");
    });
});

signupButton.addEventListener("click", () => {
  // Show the account creation form and hide the login form
  main.style.display = "none";
  createacct.style.display = "block";
});

returnBtn.addEventListener("click", function () {
  // Show the login form and hide the account creation form
  main.style.display = "block";
  createacct.style.display = "none";
});
