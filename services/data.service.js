user={
    1000:{acno:1000,uname:"jeena",password:"userone",balance:3000,transaction:[]},
    1001:{acno:1001,uname:"Anju",password:"usertwo",balance:5000,transaction:[]},
    1002:{acno:1002,uname:"Ashna",password:"userthree",balance:6000,transaction:[]},
    1003:{acno:1003,uname:"Akhila",password:"userfour",balance:7000,transaction:[]}
  }
 const register =(acno,uname,password)=>{
     console.log("register clicked");
    // console.log(user);
    // return

    if(acno in user){
      return {
      statusCode:422,
      status:false,
      message:"User already exists!!!!! please login...."
      }
    }
    else{
      user[acno]={
        acno,
        uname,
        password,
        balance:0,
        transaction:[]
      }
      return {
        statusCode:200,
        status:true,
        message:"Registration Sucessfull...."
        }
    }
  }
  const login=(acno,pswd)=>{
    if(acno in user)
    {
      if(pswd == user[acno]["password"]){
      currentUser=user[acno]["uname"]
      currentAcc=acno
       return {
        statusCode:200,
        status:true,
        message:"Login Successful"
        }
      }
      else{
      return {
        statusCode:422,
        status:false,
        message:"Incorrect Password"
        }
      }
    }
    else{
      return {
        statusCode:422,
        status:false,
        message:"Invalid User"
        }
  }
  }
   const deposit=(acno,pswd,amt)=>{
     var amount=parseInt(amt)

   if(acno in user){
    if(pswd == user[acno]["password"]){
      user[acno]["balance"]+=amount

    user[acno].transaction.push({
        amount:amount,
       type:"CREDIT"
     })

     return {
      statusCode:200,
      status:true,
      message: amount + " Deposited Successful and new balance is :" + user[acno]["balance"]
      }
    }
    else{
      return {
        statusCode:422,
        status:false,
        message:"Incorrect Password"
        }
    }
   }
   else{
    return {
      statusCode:422,
      status:false,
      message:"Invalid User"
      }
   }
   }
  const withdraw=(acno,pswd,amt)=>{
    var amount=parseInt(amt)
   if(acno in user){
    if(pswd == user[acno]["password"]){
      if(user[acno]["balance"]>amount){
      user[acno]["balance"]-=amount
      user[acno].transaction.push({
        amount:amount,
       type:"DEBIT"
     })
     return {
      statusCode:200,
      status:true,
      message: amount + " Withdraw Successful and new balance is :" + user[acno]["balance"]
      }
    }
    else{
      return {
        statusCode:422,
        status:false,
        message:"Insufficient Balance"
        }
    }
  }
    else{
      return {
        statusCode:422,
        status:false,
        message:"Incorrect Password"
        }
    }
   }
   else{
    return {
      statusCode:422,
      status:false,
      message:"Invalid User"
      }
   }
  }
  module.exports={
      register,
      login,
      deposit,
      withdraw
  }