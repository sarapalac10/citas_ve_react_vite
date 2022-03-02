import Header from "./components/Header"
import Form  from "./components/Form"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState, useEffect} from "react";

function App() {
  const [patient, setPatient] = useState([]);
  const [patientEdit, setPatientEdit] = useState({});

  useEffect(() => {
    const obtLS = () => {
      const patientLS = JSON.parse(localStorage.getItem('patient')) ?? [];
      setPatient(patientLS);
    }
    obtLS();
  }, [])
  
  useEffect(() => {
    localStorage.setItem('patient', JSON.stringify(patient))
  }, [patient])
  

  const deletePatient = (id) =>{
    const patientUpdate = patient.filter(patient => patient.id !== id )
    setPatient(patientUpdate)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Form 
          patient= {patient}
          setPatient = {setPatient}
          patientEdit = {patientEdit}
          setPatientEdit = {setPatientEdit}
        />
        <ListadoPacientes 
          patient={patient}
          setPatientEdit={setPatientEdit}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  )
}

export default App

