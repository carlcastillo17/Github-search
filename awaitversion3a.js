const http = new EasyHttp;

// //Get users
// http.get('http://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

//User Data POST Method

const data = {
    name:'Boy George',
    username:'boygeorge',
    email:'boygeorge.gmail.com'
}

// http.post('http://jsonplaceholder.typicode.com/users/', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

http.put('https://jsonplaceholder.typicode.com/users/5',data)
    .then(data => console.log(data))
    .catch(err => console.log(err));
  
