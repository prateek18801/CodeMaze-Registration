const valName = new RegExp("^[a-zA-Z ]{2,30}$");
const valEmail = new RegExp("^[a-zA-Z]*20[0-9]{5}@akgec\.ac\.in$");
const errCode = ["*Max. 30, Characters Only", "*Invalid Student Number", "*Use College Email ID", "*Invalid Contact Number", "*Enter Unique Student No.", "*Enter Unique Email ID", "*Enter Unique Contact No."];

const form = document.forms['registrationForm'];
const addBtn = document.getElementById("btn-add");
const mem2 = document.getElementById("member2");

addBtn.addEventListener("click", () => {

    form['mem2Name'].value='';
     form['mem2rollno'].value='';
    form['mem2Email'].value='';
    form['mem2Branch'].value='';
    form['mem2Section'].value='';

    mem2.classList.toggle("display-none");
    addBtn.classList.toggle("mb2");
    if (addBtn.classList.contains("mb2")) {
        addBtn.innerHTML = '<span class="material-icons-outlined">add</span> Add Member';
        addBtn.children[0].style.transform = "rotate(0deg)";
    }
    else {
        addBtn.innerHTML = '<span class="material-icons-outlined">add</span> Remove Member';
        addBtn.children[0].style.transform = "rotate(45deg)";
    }
});

function validateForm() {
    resetErr();

    let returnVal = true;

    const nameErr = document.getElementsByClassName("name-val")
    const rollnoErr = document.getElementsByClassName("rollno-val");
    const emailErr = document.getElementsByClassName("email-val");

    const mem1Name = form['mem1Name'].value;
    const mem1Email = form['mem1Email'].value;

    const mem2Name = form['mem2Name'].value;
    const mem2Email = form['mem2Email'].value;

    
   
    if (!valName.test(mem1Name)) {
        throwErr(nameErr[1], errCode[0]);
        returnVal = false;
    }

   
    if (!valEmail.test(mem1Email)) {
        throwErr(emailErr[1], errCode[2]);
        returnVal = false;
    }

   
    if (!valContact.test(mem1Contact)) {
        throwErr(contactErr[1], errCode[3]);
        returnVal = false;
    }

    if (leadEmail === mem1Email) {
        throwErr(emailErr[0], errCode[5]);
        throwErr(emailErr[1], errCode[5]);
        returnVal = false;
    }

    if (!addBtn.classList.contains("mb2")) {

        if (!valName.test(mem2Name)) {
            throwErr(nameErr[2], errCode[0]);
            returnVal = false;
        }

        if (!valEmail.test(mem2Email)) {
            throwErr(emailErr[2], errCode[2]);
            returnVal = false;
        }

        
        if (leadEmail === mem2Email) {
            throwErr(emailErr[0], errCode[5]);
            throwErr(emailErr[2], errCode[5]);
            returnVal = false;
        }
        if (mem1Email === mem2Email) {
            throwErr(emailErr[1], errCode[5]);
            throwErr(emailErr[2], errCode[5]);
            returnVal = false;
        }
    }

    return returnVal;
}

function throwErr(id, err) {
    id.innerHTML = err;
}

function resetErr() {
    const errors = document.getElementsByClassName("err");
    for (let error of errors) {
        error.innerHTML = "";
    }
}

function captchaCb(){
    document.getElementById("btn-submit").removeAttribute("disabled");
}
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function autofillEmail() {
  const name = document.forms[0].elements[0].value.split(" ")[0].toLowerCase();
  const stdno = document.forms[0].elements[1].value;
  document.forms[0].elements[2].value = name+stdno+"@akgec.ac.in";
}

// function toggleInfo(){
    
//     (document.getElementById("info-div").style.top==="5rem") ?
//         document.getElementById("info-div").style.top = "-20rem"
//         :
//         document.getElementById("info-div").style.top = "5rem";
// }

// function autoFillLeadEmail(){
//     const leadName = form['leadName'].value.replace(/ .*/,'').toLowerCase();
//     const leadStdno = form['leadStdno'].value;
//     if(leadName != '' && leadStdno != ''){
//         form['leadEmail'].value=`${leadName}${leadStdno}@akgec.ac.in`;
//     }
// }
// function autoFillMem1Email(){
//     const mem1Name = form['mem1Name'].value.replace(/ .*/,'').toLowerCase();
//     const mem1Stdno = form['mem1Stdno'].value;
//     if(mem1Name != '' && mem1Stdno != ''){
//         form['mem1Email'].value=`${mem1Name}${mem1Stdno}@akgec.ac.in`;
//     }
// }
// function autoFillMem2Email(){
//     const mem2Name = form['mem2Name'].value.replace(/ .*/,'').toLowerCase();
//     const mem2Stdno = form['mem2Stdno'].value;
//     if(mem2Name != '' && mem2Stdno != ''){
//         form['mem2Email'].value=`${mem2Name}${mem2Stdno}@akgec.ac.in`;
//     }
// }