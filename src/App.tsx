import {Recriteur} from './Recriteur';
import {FormResponse} from './FormResponse';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';

function App() {
  return (
   <>
      <Router>
          <Routes>
          <Route path="/" element={<Recriteur/>}/>
          <Route path="/Recriteur" element={<Recriteur/>}/>
          <Route path="/FormResponse" element={<FormResponse/>}/>
          </Routes>      
      </Router>
   </>
  );
}

export default App;

// //import React, {useEffect, useState } from 'react';
// //import axios from 'axios';
// //import { ToastContainer, toast } from 'react-toastify';
// //import 'react-toastify/dist/ReactToastify.css';
// // import book from "./books.png";
// // import logout from "./logout.png";
// // import photo from "./userlogo.png";
// //import {useNavigate} from "react-router-dom"

// export  function Recriteur() {

//   // const baseURL ="http://localhost:5000/api/v1/add";
//   // const [isbn, setIsbn] = useState('');
//   // const [titre, setTitre] = useState('') ;
//   // const [auteur, setAuteur] = useState('');
//   // const [categorie, setCategorie] = useState('') ;
//   // const[open, setOpen] = useState(false);
//   // const navigate = useNavigate();
  
//   // const navbook =() =>
//   // {
//   //     navigate("/Books");
//   // }
  
//   // const navlogout =() =>
//   // {
//   //     navigate("/Login");
//   // }
  
  
//   // useEffect(() => {
//   //   axios.get(`${baseURL}/1`).then((response) => {
//   //     setIsbn(response.data);
//   //   });
//   // }, []);
  
//   // const add = () => {
//   //   if(isbn.length > 7 && titre!=='' && auteur!=='' && categorie!=='' )
//   //   {
//   //       axios.post(baseURL, {
//   //         isbn : isbn,
//   //         titre : titre,
//   //         auteur : auteur,
//   //         categorie: categorie,
//   //       }).then((response) => {
//   //         if (response.data.data){
//   //               if(response.data.data ==='ISBN exist !!')
//   //             {    toast('ISBN exist !!')
                    
//   //             }        
//   //               else 
//   //             { 
//   //                     toast('Add successfully ^_^')
//   //             }
//   //             }
//   //       } )
//   //   }
//   //   else
//   //   {
//   //     if(isbn.length < 8)
//   //     toast(" Length of ISBN should be > 7")
//   //     else
//   //     {
//   //         toast("the values shouldn't be null")
//   //     }
//   //   }
//   // };
//     return ( 
//       <body className="body">
//           <header>
                  
//           </header> 
//           <h1 className="text">Formulaire de recrutement</h1> 
//           <div className="form">
//               Nom et prénom<text className="co">*</text><br/><br/>
//               <input type="text" className="input" placeholder="Votre réponse" required 
//                onFocus={(e) =>
//                  e.target.placeholder=""} 
//                onBlur={(e) =>
//                  e.target.placeholder="Votre réponse"}  
//               //  onChange={(e) => {
//               //    setTitre(e.target.value)
//               // }}
//               />
//               </div>
//               <br/>
//               <div className="form">
//               Email <text className="co">*</text><br/><br/>
//               <input type="email" className="input" placeholder="Votre réponse" required 
//                 onFocus={(e) => 
//                   e.target.placeholder=""} 
//                 onBlur={(e) => 
//                   e.target.placeholder="Votre réponse"} 
//               //   onChange={(e) => {
//               //     setAuteur(e.target.value)
//               //   }}
//               />
//               </div>
//               <br/>
//               <div className="form">
//               Numéro de téléphone <text className="co">*</text><br/><br/>
//               <input type="text" className="input" placeholder="Votre réponse" required 
//                 onFocus={(e) => 
//                   e.target.placeholder=""}
//                 onBlur={(e) => 
//                   e.target.placeholder="Votre réponse"}
//               //   onChange={(e) => {
//               //     setCategorie(e.target.value)
//               // }}
//               />
//               </div>
//               <br/>
//               <div className="form">
//               Date de naissance <text className="co">*</text><br/><br/>
//               <input type="date" className="input" required  
//                 onBlur={(e) =>
//                    e.target.placeholder="Date de naissance"} 
//               //   onChange={(e) => {
//               //     setIsbn(e.target.value)
//               //   }}
//               />
//               </div>
//               <br/>
//               <div className="form">
//               Etablissement <text className="co">*</text><br/><br/>
//               <input type="text" className="input" placeholder="Votre réponse" required 
//                 onFocus={(e) => 
//                   e.target.placeholder=""} 
//                 onBlur={(e) =>
//                    e.target.placeholder="Votre réponse"} 
//               //   onChange={(e) => {
//               //     setIsbn(e.target.value)
//               //   }}
//               />
//               </div>
//               <br/>
//               <div className="form">
//               Filière <text className="co">*</text><br/><br/>
//               <input type="text" className="input" placeholder="Votre réponse" required 
//                 onFocus={(e) => 
//                   e.target.placeholder=""} 
//                 onBlur={(e) =>
//                    e.target.placeholder="Votre réponse"} 
//               //   onChange={(e) => {
//               //     setIsbn(e.target.value)
//               //   }}
//               />
//               </div>
//               <br/>
//               <div className="form">
//               Niveau d'étude <text className="co">*</text><br/><br/>
//               <input type="text" className="input" placeholder="Votre réponse" required 
//                 onFocus={(e) => 
//                   e.target.placeholder=""} 
//                 onBlur={(e) =>
//                    e.target.placeholder="Votre réponse"} 
//               //   onChange={(e) => {
//               //     setIsbn(e.target.value)
//               //   }}
//               />         
//               </div>
//               <br/>
//               <div className="form">
//              <p> Vous avez maitrisez un ou des language de programmation ? <text className="co">*</text></p>
//                   <div  className="text">
//                       <input type="radio" value="Oui" name="onl"/>Oui
//                       <input type="radio" value="Non"  name="onl"/>Non
//                   </div>
//                   </div>
//                   <br/>
//               <div className="form">
//               <p > Avez-vous déjà une expérience dans la vie associative ? <text className="co">*</text></p>
//               <div className="text">
//                       <input type="radio" value="Oui" name="one"/>Oui
//                       <input type="radio" value="Non" name="one"/>Non
//                   </div>
//                   </div>
//                   <br/>
              
//               <button className="button" > ENVOYER </button>
//              {/*  <button className="button" onClick={add}>Add book</button>
//               <ToastContainer /> */}
  
//           {/* <div className='container'>
//             <div className='trigger' onClick={()=>{setOpen(!open)}}>
//             <img src ={photo}  alt=""/> 
//             </div>
//             <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
//                 <h3>MY ACCOUNT</h3>
//                 <ul>
//                   <DropdownItem image={book} text={"Books"} click={navbook}/> 
//                   <DropdownItem image={logout} text={"Logout"} click={navlogout}/>
//                 </ul>
//             </div>
//           </div> */}
//         </body>
//     );
//   }
  
//   {/* function DropdownItem(props : any)
//   {
//     return( 
//       <li className="dropdownItem">
//         <img src={props.image} alt="" width="20px"></img> &nbsp;&nbsp;
//         <text onClick={props.click}> {props.text} </text>     
//       </li>
//     );
//   } */}
  
  
  
  