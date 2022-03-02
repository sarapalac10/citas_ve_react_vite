import {React, useEffect, useState} from 'react'
import Error from './Error';

const Form = ({patient, setPatient, patientEdit, setPatientEdit}) => {
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [symptom, setSymptom] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if(Object.keys(patientEdit).length > 0){
            console.log("hay registro")
            setName(patientEdit.name)
            setOwner(patientEdit.owner)
            setEmail(patientEdit.email)
            setDate(patientEdit.date)
            setSymptom(patientEdit.symptom)
        }
    }, [patientEdit])
    
    const generateId = () => {
        const random = Math.random().toString(36).substr(2);
        const date = Date.now().toString(36)
        return random + date
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if([name, owner, email, date, symptom].includes("")){
            setError(true)
            return;
        }

        setError(false);

        //Create an objet for the patient history
        const objPatient = {
            name, 
            owner, 
            email, 
            date, 
            symptom
        }

        if(patientEdit.id) {
            objPatient.id = patientEdit.id;

            const patientUpdate = patient.map( patientState => patientState.id === patientEdit.id ? objPatient : patientState  )
            setPatient(patientUpdate)
            setPatientEdit({})

        } else {
            objPatient.id = generateId();
            setPatient([...patient, objPatient])
        }

        //Reset the form
        setName('')
        setOwner('')
        setEmail('')
        setDate('')
        setSymptom('')
    }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
        <h2 className='font-black text-3xl text-center'>Patient Monitoring</h2>

        <p className='text-lg mt-5 mb-10'>Add Patient and {" "}
        <span className='text-indigo-600 font-bold'>Manage</span></p>

        <form 
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5'>
            {error && <Error mensaje="All the fields need to be completed" />}
            <div className='mb-5'>
                <label htmlFor='namePet' className='block text-gray-600 uppercase font-bold'>Pet's Name</label>

                <input id='namePet' value={name} onChange={ (e) => setName(e.target.value)} type="text" placeholder='Pets name' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
            </div>

            <div className='mb-5'>
                <label htmlFor='nameOwner' className='block text-gray-600 uppercase font-bold'>Owner's Name</label>

                <input id='nameOwner' value={owner} onChange={ (e) => setOwner(e.target.value)} type="text" placeholder='Owner name' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
            </div>

            <div className='mb-5'>
                <label htmlFor='emailOwner' className='block text-gray-600 uppercase font-bold'>Owner's Email</label>

                <input id='emailOwner' value={email} onChange={ (e) => setEmail(e.target.value)} type="email" placeholder='Owner email' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
            </div>

            <div className='mb-5'>
                <label htmlFor='discharged' className='block text-gray-600 uppercase font-bold'>Discharged date</label>

                <input id='discharged' value={date} onChange={ (e) => setDate(e.target.value)} type="date" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
            </div>

            <div className='mb-5'>
                <label htmlFor='symptom' className='block text-gray-600 uppercase font-bold'>Symptoms</label>

                <textarea id="symptom" value={symptom} onChange={ (e) => setSymptom(e.target.value)} placeholder='Describe the symptoms of your pet' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
            </div>

            <input type="submit" className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all' value={patientEdit.id ? "Edit Patient" : "Add Patient"} />
        </form>
    </div>
  )
}

export default Form;