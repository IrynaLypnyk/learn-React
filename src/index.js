import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// function Hello(){
//     let phrase = "World";
//     return(
//         <h1>Hello, {phrase}!</h1>
//     )
// }
// function SayFullName(props){
//     return(
//         <div>
//             <h3>Мое имя - {props.name}, моя фамилия - {props.surname} </h3>
//             <a href={props.link}>Ссылка на мой профиль</a>
//         </div>
//     )
// }
// function MeetAll(){
//     return(
//         <div>
//             <SayFullName name="Ирина" surname="Лыпник" link="#"/>
//             <SayFullName name="Сергей" surname="Лыпник" link="#"/>
//             <SayFullName name="Тихон" surname="Лыпник" link="#"/>
//         </div>
//     )
// }
//

//const elem = <SayFullName name="Ирина" surname="Лыпник" link="#"/>;

// ReactDOM.render(<SayFullName name="Ирина" surname="Лыпник" link="#"/>, document.getElementById('root'));
// registerServiceWorker();
//ReactDOM.render(<MeetAll />, document.getElementById('root'));
//registerServiceWorker();
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
