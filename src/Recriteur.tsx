import React,{useState} from 'react';
import {Button , Modal, ModalBody, ModalFooter, ModalHeader} from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Recriteur.css';
import {useNavigate} from "react-router-dom"
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBRadio,
  MDBBtn,
} from 'mdb-react-ui-kit'

export  function Recriteur() {

  const baseURL = "http://localhost:5000/api/v1/addRecruteur";
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [nomp, setNomp] = useState('');
  const [numtel, setNum] = useState('');
  const [dns, setDns] = useState('');
  const [etablissement, setEtab] = useState('');
  const [filiere, setFiliere] = useState('');
  const [etude, setEtude] = useState('');
  const [mlanguage, setMlanguage] = useState('');
  const [experience, setExperience] = useState('');
  const [modal, setModal] = useState(false); 

  const [formValue, setFormValue] = useState({
    nomp: '',
    email: '',
    numtel: '',
    dns: '',
    etablissement: '',
    filiere: '',
    etude: '',
    mlanguage: '',
    experience: '',
  });

  

  const add = () => {

    if(email!=='' && nomp!=='' && numtel!=='' && dns!=='' && etablissement!=='' && filiere!=='' && etude!=='' && mlanguage!=='' && experience!=='')
    {
              axios.post(baseURL, {
                email : email,
                nomp : nomp,
                numtel : numtel,
                dns : dns,
                mlanguage : mlanguage,
                experience : experience,
                etablissement : etablissement,
                filiere : filiere,
                etude : etude
              }).then((response) => {
                console.log(response.data.data)
                if (response.data.data){
                      if(response.data.data ==='exist')
                    {   
                      toast('Email exist !!')                
                    }        
                      else 
                    { 
                      navigate("/FormResponse");
                    }
                    }
              } )
    }
    else
    {
      toast("Les valeurs ne doivent pas être null !!")
    }
  }
      const click = ()=>{
        setModal(!modal)  
        }

  return (
    <body className='body'>  
      <header>
        
      </header>      
        <div className="form1" id="classicformpage" >
          <h1 className="text">Formulaire de recrutement</h1> 
              <MDBValidation className='row g-3' isValidated>
                      <MDBValidationItem feedback='Svp saisir votre nom et prénom.' className='input4' invalid>
                          <MDBInput
                                      value={formValue.nomp}
                                      name='nomp'
                                      id='validationCustom01'
                                      required
                                      label='Nom et prénom'
                                      onChange={(e) => {
                                        setNomp(e.target.value);
                                        setFormValue({ ...formValue, [e.target.name]: e.target.value });
                                      }}
                              />
                        </MDBValidationItem>
                        </MDBValidation>
                      {/* Nom et prénom<text className="co">*</text><br/><br/>
                      <input type="text" className="input" placeholder="Votre réponse" required 
                      onFocus={(e) =>
                        e.target.placeholder=""} 
                      onBlur={(e) =>
                        e.target.placeholder="Votre réponse"}
                      onChange={(e) => {
                        setNomp(e.target.value)
                      }}     
                        /> */}
                      <br/><br/><br/>
                      <MDBValidation className='row g-3' isValidated>
                      <MDBValidationItem feedback='Svp saisir un email.' className='input4' invalid>
                            {/* Email <text className="co">*</text><br/><br/>
                            <input type="email" className="input" placeholder="Votre réponse" required 
                              onFocus={(e) => 
                                e.target.placeholder=""} 
                              onBlur={(e) => 
                                e.target.placeholder="Votre réponse"}
                              onChange={(e) => {
                                setEmail(e.target.value)
                              }} /> */}
                              <MDBInput
                                      value={formValue.email}
                                      type='email'
                                      name='email'
                                      onChange={(e) => {
                                        setEmail(e.target.value);
                                        setFormValue({ ...formValue, [e.target.name]: e.target.value });
                                      }}
                                      id='validationCustom01'
                                      required
                                      label='Email'
                              />
                        </MDBValidationItem>
                        </MDBValidation>
                      <br/><br/><br/>
                      <MDBValidation className='row g-3' isValidated>
                      <MDBValidationItem  feedback='Svp saisir votre numéro de téléphone.' className='input4' invalid>
                        <MDBInput
                                      value={formValue.numtel}
                                      name='numtel'
                                      onChange={(e) => {
                                        setNum(e.target.value);
                                        setFormValue({ ...formValue, [e.target.name]: e.target.value });
                                    }}
                                      id='validationCustom01'
                                      required
                                      label='Numéro de téléphone'
                              />
                        </MDBValidationItem>
                      {/* Numéro de téléphone <text className="co">*</text><br/><br/>
                      <input type="text" className="input" placeholder="Votre réponse" required 
                        onFocus={(e) => 
                          e.target.placeholder=""}
                        onBlur={(e) => 
                          e.target.placeholder="Votre réponse"}
                          onChange={(e) => {
                            setNum(e.target.value);
                            setFormValue({ ...formValue, [e.target.name]: e.target.value });
                        }}
                        /> */}
                          </MDBValidation>
                      <br/><br/><br/>
                      <MDBValidation className='row g-3' isValidated>
                        
                      <input type="date" className="" required  
                        onBlur={(e) =>
                          e.target.placeholder="Date de naissance"} 
                          onChange={(e) => {                  
                            setDns(e.target.value)
                        }}
                          />
                          Date de naissance
                      </MDBValidation>
                      <br/>
                      <MDBValidation className='row g-3' isValidated>
                      <MDBValidationItem feedback='Svp saisir votre Etablissement.' className='input4' invalid>
                        <MDBInput
                                      value={formValue.etablissement}
                                      name='etablissement'
                                      onChange={(e) => {
                                        setEtab(e.target.value);
                                        setFormValue({ ...formValue, [e.target.name]: e.target.value });
                                    }}
                                      id='validationCustom01'
                                      required
                                      label='Etablissement'
                                      
                              />
                        </MDBValidationItem>
                      {/* Etablissement <text className="co">*</text><br/><br/>
                      <input type="text" className="input" placeholder="Votre réponse" required 
                        onFocus={(e) => 
                          e.target.placeholder=""} 
                        onBlur={(e) =>
                          e.target.placeholder="Votre réponse"}
                          onChange={(e) => {
                            setEtab(e.target.value)
                        }}
                          /> */}
                        </MDBValidation>
                      <br/><br/><br/>
                      <MDBValidation className='row g-3' isValidated>
                      <MDBValidationItem feedback='Svp saisir votre Filière.' className='input4' invalid>
                        <MDBInput
                                      value={formValue.filiere}
                                      name='filiere'
                                      onChange={(e) => {
                                        setFiliere(e.target.value)
                                        setFormValue({ ...formValue, [e.target.name]: e.target.value });
                                    }}
                                      id='validationCustom01'
                                      required
                                      label='Filière'
                              />
                        </MDBValidationItem>
                      {/* Filière <text className="co">*</text><br/><br/>
                      <input type="text" className="input" placeholder="Votre réponse" required 
                        onFocus={(e) => 
                          e.target.placeholder=""} 
                        onBlur={(e) =>
                          e.target.placeholder="Votre réponse"} 
                        onChange={(e) => {
                            setFiliere(e.target.value)
                        }}
                          /> */}
                      </MDBValidation>
                      <br/><br/><br/>
                      <MDBValidation className='row g-3' isValidated>
                      <MDBValidationItem feedback="Svp saisir votre Niveau d'étude." className='input4' invalid>
                        <MDBInput
                                      value={formValue.etude}
                                      name='etude'
                                      onChange={(e) => {
                                        setEtude(e.target.value)
                                        setFormValue({ ...formValue, [e.target.name]: e.target.value });
                                    }}
                                      id='validationCustom01'
                                      required
                                      label="Niveau d'étude"
                              />
                        </MDBValidationItem>
                      {/* Niveau d'étude <text className="co">*</text><br/><br/>
                      <input type="text" className="input" placeholder="Votre réponse" required 
                        onFocus={(e) => 
                          e.target.placeholder=""} 
                        onBlur={(e) =>
                          e.target.placeholder="Votre réponse"}
                        onChange={(e) => {
                          setEtude(e.target.value)
                        }}
                          />    */}
                      </MDBValidation>  
                      <br/><br/><br/>
                      <MDBValidation className='' isValidated>
                    <p> Vous avez maitrisez un ou des language de programmation ? </p>
                    <MDBRadio label='Oui' value="Oui" required id='validationFormCheck2' name='answer' onClick={()=>{click()}} onChange={(e) => { setMlanguage(e.target.value) }} />
                      <MDBValidationItem invalid feedback='Il faut choisir un choix !!'>
                          <MDBRadio
                            label='Non'
                            required
                            value="Non"
                            id='validationFormCheck3'
                            name='answer'
                            onChange={(e) => {
                              setMlanguage(e.target.value)
                            }}/>
                          </MDBValidationItem>
                          {/* <div  className="text">
                          <label >Oui </label>
                              <input type="radio" value="Oui" name="answer" 
                              onClick={()=>{click()}}
                              />
                              <label >Non </label>
                              <input type="radio" value="Non" name="answer"
                              onChange={(e) => {
                                setMlanguage(e.target.value)
                              }}
                              />
                          </div> */}
                          </MDBValidation>
                          <br/>
                      <MDBValidation className="" isValidated>
                      <p > Avez-vous déjà une expérience dans la vie associative ? </p>
                      <MDBRadio label='Oui' value="Oui" required id='validationFormCheck3' name='one' onChange={(e) => { setExperience(e.target.value) }}/>
                      <MDBValidationItem invalid feedback='Il faut choisir un choix !!'>
                          <MDBRadio
                            label='Non'
                            required
                            id='validationFormCheck4'
                            name='one'
                            value="Non"
                            onChange={(e) => {
                              setExperience(e.target.value)
                            }}/>
                          </MDBValidationItem>
                      {/* <p > Avez-vous déjà une expérience dans la vie associative ? <text className="co">*</text></p>
                      <div className="text">
                              <label >Oui </label>
                              <input type="radio" value="Oui" name="one" 
                              onChange={(e) => {
                                setExperience(e.target.value)
                              }}
                              />
                              <label >Non </label>
                              <input type="radio" value="Non" name="one"
                              onChange={(e) => {
                                setExperience(e.target.value)
                              }}
                              />
                          </div> */}
                          </MDBValidation>
                          <br/>
                    <Modal show={modal}>
                    <ModalHeader  closeButton  onClick={()=>{click()}}><p className='citez'>Citez le ou les</p></ModalHeader>
                    <ModalBody>
                      <input type="text" 
                      onChange={(e) => {
                        setMlanguage(e.target.value)
                      }}/>
                    </ModalBody>
                    <ModalFooter>
                      <Button  onClick={()=>{click()}}> Close </Button>
                    </ModalFooter>
                    </Modal>
                    <MDBValidation className='row g-3' isValidated>
                      {/* <Button onClick={add}> ENVOYER </Button> */}
                
                <div className='col-12'>
                    <MDBBtn outline onClick={add}>ENVOYER</MDBBtn>
                </div>
                <ToastContainer />
                </MDBValidation>
      </div>
      </body>
  );
}




