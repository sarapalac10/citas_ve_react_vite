// import { useEffect } from 'react';
import Patients from './Patients';

const ListadoPacientes = ({patient, setPatientEdit, deletePatient}) => {

  // useEffect(() => {
  //   if (patient.length > 0){
  //     console.log("nuevo paciente")
  //   }  
  // }, [patient])
  

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
        {patient && patient.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>Patients List</h2>
          <p className='text-xl mt-5 mb-10'>Manage your  {" "}
            <span className='text-indigo-600 font-bold'>Patients and Appointments</span>
          </p>

          {patient.map((patient) =>{
          return(
            <Patients 
              key={patient.id}
              patient={patient}
              setPatientEdit={setPatientEdit}
              deletePatient={deletePatient}
            />
          )
          })}
        </>
        ) : (
          <>
            <h2 className='font-black text-3xl text-center'>There are no patients</h2>
            <p className='text-xl mt-5 mb-10'>Start adding patients {" "}
              <span className='text-indigo-600 font-bold'>to be show at this list</span>
            </p>
          </>
        ) }

    </div>
  )
}

export default ListadoPacientes;