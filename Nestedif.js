let username = 'admin';
let password = 'admin';
let status ;

if(username == 'admin'){
    if(password == 'admin'){
        status = 'Succesfull login';
    }else{
        status = 'Wrong password';
    }
}else{
    status = 'wrong username';
}

console.log(status);