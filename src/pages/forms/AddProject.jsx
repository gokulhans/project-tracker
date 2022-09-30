import React, { useState } from 'react'
import { db } from '../../firebase'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";


function AddProject() {

  const [newName, setNewName] = useState("");
  const goalsCollection = collection(db, "goals");

  const createUser = async () => {
    await addDoc(goalsCollection, { name: newName });
  };

  return (
    <div className='mx-4 sm:mx-40 shadow-lg p-8 rounded-md '>

      <div>

        <div className="mb-4">
          <label htmlFor="name-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"><b>Name</b></label>
          <input name='name' type="text" id="name-input" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Goal Name.." onChange={(event) => { setNewName(event.target.value);}} />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"><b>Type</b></label>
          <select id="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option className='font-medium py-2' value="project">Project</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"><b>Description</b></label>
          <textarea rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='desc' placeholder="Leave a comment..."></textarea>
        </div>
        <button onClick={createUser} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </div>

    </div>
  )
}

export default AddProject