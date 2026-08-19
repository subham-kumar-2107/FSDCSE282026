// console.log("hello... using JS")
// function sum (a,b){
//     return a+b;
// }console.log(sum (20,30));

// var a=34;
// if(a>20){
//     var a=45;
//     console.log("a inside a "+a);
// }console.log("a outside a "+a);

// let b=34;
// if(b>20){
//     let b=45;
//     console.log("b inside b "+b);
// }console.log("b outside b "+b);





// // console.log("helllo i am using js "); // console.log

// // function sum(a,b){
// //     return a+b;

// // }
// // sum(23,30);
// // console.log( sum(23,30));

// var a=34;
// if(a>20){
//     var=45;
//     console.log("a inside a ")
// }
// const sum =function sum(a,b){
//     return a+b;
// }
// sum(23,30)

// console.log(sum(23,30));
// const sum=(msg)=>{
//     return 20+90+msg
// }
// sum("hey...");
// console.log(sum("hey..."));



//IIFE
// {()=>{
//     console.log("hiiii")
// }}



// CALLBACK HELL function

// function sum(a,b){
//     return a+b;

// }
// function sumWIthMsg(clbk,msg){
//     const result=clbk(12,40);
//     console.log("Hiii"+msg+""+result)
// }
// sumWIthMsg(sum,"Ram");



// function login(msg, err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(msg);
//     }
// }

// function loginhandler(clbk) {
//     let username = "ptomer40";
//     let password = "12345";

//     if (username === "ptomer40" && password === "12345") {
//         clbk("success", null);
//     } else {
//         clbk(null, "Username or password is incorrect");
//     }
// }


// loginhandler(login);
// // loginhandler("sonu","123",login);


setTimeout(() => { console.log("One");
}, 2000);

// promise

 const myPromise=new Promise((resolve,reject)=>{
    let username="sonu";
    let password="1234";
    if(username=="sonu"&& password=="1234"){
        resolve("sucess")
    }
    else{
        reject("invalid")
    }
    

})
// console.log(myPromise);
// myPromise.then((msg)=>{console.log(msg)})
// .catch(msg=>{console.log(msg)})
// .finally(console.log("Resource closed"));



// async function handleLogin(){
//     const status=await myPromise;
//     console.log(status)
// }
// handleLogin();

async function orderRecieved(){
    return await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("one order recieved")
        },1000)
    })
}

async function orderHandover(){
     return await new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve("order handover");
        },1000)
    })
}

function orderCompleted(){
    console.log("oder successfully completed")
}

let otp;

function OTP(){
    otp = Math.floor(Math.random()*10)+1;
    console.log("otp")
    if(otp==8){
        console.log("finally order completed")
    }
}

async function orderPrepared(){
    return await new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve("order prepared");
        },1000)
    })
}

async function handleLogin(){
    const status=await myPromise;
    console.log(status)

if(status=="sucess"){
    console.log("hi, inside success");
    
    const orderStatus= await orderRecieved();
    console.log(orderStatus)

    const orderPrepareStatus=await orderPrepared();
    console.log(orderPrepareStatus)
    
    const orderCompletedStatus=await orderCompleted();
    console.log(orderCompletedStatus)

    const orderHandoverStatus=await orderHandover();
    console.log(orderHandoverStatus)
}}
handleLogin();   