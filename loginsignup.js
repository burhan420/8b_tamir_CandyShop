const UsersData = [
    {
      fname: "Bayalagmaa",
      lname: "Bayarmaa",
      email: "bayalagmaa@nhs.edu.mn",
      password: "Nest12345678",
      secretQ: "fav color?",
      secretAns: "purple",
    },
    {
      fname: "nest",
      lname: "nestee",
      email: "nest@gmail.com",
      password: "Nest12345678",
      secretQ: "name?",
      secretAns: "nest",
    },
     {
      fname: "Tamir",
      lname: "Tamir",
      email: "bishreltamir20@gmail.com",
      password: "Tamir12345678",
      secretQ: "r u tamir?",
      secretAns: "no",
    },
  
  ];
  
  function Signup() {
    let passOne = document.getElementById("passOne").value;
    let passTwo = document.getElementById("passTwo").value;
    if (passOne.length >= 8) {
      if (passOne === passTwo) {
        if (passOne != passOne.toLowerCase()) {
          console.log("pass ok");
          Adduser(passOne);
        } else {
          alert("should have one upper case");
        }
      } else {
        alert("password doesnt match");
      }
    } else {
      alert("too short pass");
    }
    window.location.replace("./index.html");
  }
  
  function Adduser(password) {
    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let secQ = document.getElementById("secretQuestion").value;
    let secA = document.getElementById("secretAnswer").value;
  
    let newUser = {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      secretQ: secQ,
      secretAns: secA,
    };
    UsersData.push(newUser);
  }
  
  function Login() {
    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPass").value;
  
    for (let i = 0; i < UsersData.length; i++) {
      if (UsersData[i].email == email && UsersData[i].password == pass) {
        console.log("user found and ready to go next page");
        window.location.replace("./index.html");
      }
    }
  }
  
  function Forgot() {
    let email = document.getElementById("forgotEmail").value;
  
    for (let i = 0; i < UsersData.length; i++) {
      if (UsersData[i].email == email) {
        document.getElementById("secQ").innerHTML = UsersData[i].secretQ;
      } else {
        alert("no user found");
      }
    }
  }
  function Check() {
    let email = document.getElementById("forgotEmail").value;
    let answer = document.getElementById("secAns").value;
    for (let i = 0; i < UsersData.length; i++) {
      if (UsersData[i].email == email) {
        if (UsersData[i].secretAns == answer) {
          document.getElementById("pas").innerHTML = UsersData[i].password;
        } else {
          alert("wrong answer");
        }
      } else {
        alert("no user found1");
      }
    }
  }
  function loginruu() {
    window.location.replace("login.html");
  }
 
