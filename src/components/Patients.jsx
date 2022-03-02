const Patients = ({patient, setPatientEdit, deletePatient}) => {
  const {name,owner,email,date,symptom,id} = patient;

  const handleDelete = () => {
    const response = confirm('Are you sure about delete this patient?');

    if(response){
      deletePatient(id)
    }
  }

  // console.log(patient);
  return (
    <>
        <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl '>
          <p className='font-bold mb-3 text-gray-700 uppercase'> Pet's Name: {" "}
            <span className='font-normal normal-case '>{name}</span>
          </p>

          <p className='font-bold mb-3 text-gray-700 uppercase'> Owners's Name: {" "}
            <span className='font-normal normal-case '>{owner}</span>
          </p>

          <p className='font-bold mb-3 text-gray-700 uppercase'> Owners's email: {" "}
            <span className='font-normal normal-case '>{email}</span>
          </p>

          <p className='font-bold mb-3 text-gray-700 uppercase'> Discharged Date: {" "}
            <span className='font-normal normal-case '>{date}</span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'> Symptoms: {" "}
            <span className='font-normal normal-case '>{symptom}</span>
          </p>

          <div className="flex justify-around mt-10">
            <button type="button" onClick={() => setPatientEdit(patient) } className="py2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase text-bold rounded-lg ">
              Edit
            </button>

            <button type="button" onClick={handleDelete} className="py2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase text-bold rounded-lg ">
              Delete
            </button>
          </div>

        </div>
    </>
  )
}

export default Patients