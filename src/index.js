import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//we can also declare the html element in var
// const element = <h1>Hello, world!</h1>;
//we can add a jsx to our react by decalaring a variable
//then add it to a string
// const user ='Hamdaoui Mariem';
//*ReactDOM.createRoot(document.getElementById('root')).render(<h1>Hello, {user}!</h1>);*/

//we can add any type of valid JS expression to our jsx
function fullName(user){
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName : 'Mariem',
  lastName : 'Hamdaoui'
}

//const htmlEl = <h1>hello {fullName(user)}</h1>
/*ReactDOM.createRoot(document.getElementById('root')).render(htmlEl);*/

//we can use if statements or for loops inside our jsx code
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {fullName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
//specifying attributes with jsx
//const el = <a href='https://www.reactjs.org'>link</a>
//or use string literals
//const element = <img src={user.avatarUrl}></img>;
//jsx prevent injection attacks
//const title = response.potentiallyMaliciousInput
ReactDOM.createRoot(document.getElementById('root')).render(getGreeting(user));




reportWebVitals();