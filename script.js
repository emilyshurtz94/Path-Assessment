//Page Selectors
const headerEl= document.getElementById('header');
const formEl = document.getElementById('form');
const quizEl = document.getElementById('quiz');
const resultsEl = document.getElementById('results');

//Button Selectors
const startBtn = document.getElementById('start');
const endBtn = document.getElementById('end');

// Link to Google Sheet Excel Sheet- Post route
const url ='https://script.google.com/macros/s/AKfycby88NzNMh3HEiVJXDygvDFkHPqmXfC7WQ4pRKycDpd2Cha-PycyEtN3TJaSP-fnBjA/exec'

// Input Elements
const nameEl = document.getElementById('inputName');
const email= document.getElementById('inputEmail');
const label1= document.createTextNode('Name:');
const label2 = document.createTextNode('Email:');
const label3= document.createTextNode('Agency')
const label4 = document.createTextNode('Knowledge');
const label5 = document.createTextNode('Referral');



//Answer selectors
const securityEl = document.getElementById('security');
const opportunityEl = document.getElementById('opportunity');
const true1El = document.getElementById('true1');
const false1El = document.getElementById('false1');
const consumersEl = document.getElementById('consumers');
const ownersEl = document.getElementById('owners');
const true2El = document.getElementById('true2');
const false2El = document.getElementById('false2');
const true3El = document.getElementById('true3');
const false3El = document.getElementById('false3');
const speedEl = document.getElementById('speed');
const longEl = document.getElementById('long');
const potentialEl = document.getElementById('potential');
const sellableEl = document.getElementById('sellable');

function startQuiz() {
    quizEl.style.display="block";
    formEl.style.display="none";
    headerEl.classList.add("hide");
}

function sendData(){
    const formData = new FormData();
    formData.append('name', nameEl.value);
    formData.append('email', email.value);
    fetch(url,{
        method: 'POST',
        body: formData
    }).then(rep => rep.json())
}

function calculateScore (){
let referral= 0;
let knowledge= 0;
let agency= 0;

 if (securityEl.checked){
    agency+=2;
     knowledge+=1;
     referral +=0
 } else{
     agency +=0;
     knowledge+=2;
     referral+=3;
 }
 if (true1El.checked){
     agency +=0
     knowledge+=6;
     referral +=4
 } else{
     agency +=6;
     knowledge +=0;
     referral +=0
 }
 if (consumersEl.checked){
     agency+=0;
     knowledge+=2;
    referral+=4;
 } else{
     agency +=4;
     knowledge+=2;
     referral+=0;
 }
 if (true2El.checked){
    agency+=4;
     knowledge+=2;
     referral +=0;
 } else{
    agency +=0 ;
    knowledge+=0;
     referral+=6;
 }
 if (true3El.checked){
    agency +=0 ;
    knowledge+=8;
     referral+=0;
 } else{
    agency +=0; 
    knowledge+=0;
     referral+=0;
 }
 if (speedEl.checked){
    agency +=4; 
    knowledge+=0;
     referral+=0;
 } else{
    agency +=0 
    knowledge+=2;
     referral+=2;
 }
 if (potentialEl.checked){
    agency +=0;
    knowledge+=2;
     referral+=6;
 } else{
    agency +=6; 
    knowledge+=2;
     referral+=0;
 }
 quizEl.style.display="none";
 formEl.style.display="none";
 headerEl.classList.add("hide");
 resultsEl.style.display="block";
 
 let agencyEl= Math.round((agency/26)*100);
 let knowledgeEl= Math.round((knowledge/24)*100);
 let referralEl= Math.round((referral/25)*100);
 
 const agencyScoreEl= document.getElementById('agency-score');
 agencyScoreEl.innerText = agencyScoreEl.innerText+ "Agency is " + `${agencyEl}` +"%"
 const knowledgeScoreEl= document.getElementById('knowledge-score');
 knowledgeScoreEl.innerText = knowledgeScoreEl.innerText+ "Knowledge is " + `${knowledgeEl}` +"%"
 const referralScoreEl= document.getElementById('referral-score');
 referralScoreEl.innerText = referralScoreEl.innerText+ "Referral is " + `${referralEl}` +"%"
 
     const formData = new FormData();
     formData.append('agency', `${agencyEl}`);
     formData.append('knowledge', `${knowledgeEl}`);
     formData.append('referral', `${referralEl}`)
     fetch(url,{
         method: 'POST',
         body: formData
        }).then(rep => rep.json())
        .then(data =>{
            console.log(data)
        })
    
}
    startBtn.onclick =() => {
        startQuiz();
        sendData();
    }

endBtn.onclick = () => {
    calculateScore();
}
