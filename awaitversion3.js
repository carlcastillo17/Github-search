class EasyHttp {
    //make andd http GET request
    //version 3
     async get(url){
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
// return new Promise((resolve, reject) => {
//     fetch(url)
//     .then(res => res.json())
//     .then(data => resolve(data))
//     .catch(err => reject(err));
// });
}


//Make an HTTP POST request
//version 3
async post(url, data){
const response = await fetch(url,{
   method: 'POST',
   headers: {
       'Content-type': 'application/json'
   },
   body: JSON.stringify(data)
});
const resData = await response.json();
return resData;
//     // return new Promise((resolve, reject) => {
//     // fetch(url,{
//     // method: 'POST',
//     // headers: {
//     //     'Content-type': 'application/json'
//     // },
//     // body: JSON.stringify(data)
//     // })
//     // .then(rs => res.json())
//     // .then(data => resolve(data))
//     // .catch(err => reject(err));
//     // });
}


//Make an HTTP PUT request
//version 3
async put(url, data){
const response = await fetch (url,{
    method: 'PUT',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
});
const resData = await response.json();
return resData;
// return new Promise((resolve, reject) => {
//     fetch(url,{
//     method: 'PUT',
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify(data)
//     })
//     .then(rs => res.json())
//     .then(data => resolve(data))
//     .catch(err =>(err));
// });
}
} 

// delete(url {}
//     return new Promise
//     this.http.open('DELETE', url, true);

//     let self = this;
// this.http.onload = function(){
//     if(self.http.status === 200){
//     callback(null, 'Post Deleted');
//     } else{
//         callback('Error', + self.http.status);
//     }
// }
// this.http.send();
// }
