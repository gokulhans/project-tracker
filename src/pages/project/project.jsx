import React from 'react'
import Projecttable from './Projecttable'
import Projecttablerow from './Projecttablerow'
import Progress from '../../components/progress/progress'
import { Link } from 'react-router-dom'

function project() {
  return (
    <div>
      <Progress />
      <Link to="/add-task" className="flex md:order-2">
        <button type="button" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><b>Add Task</b></button>
      </Link>
      <div className="mx-4 sm:mx-12 lg:mx-24 overflow-x-auto relative shadow-md sm:rounded-lg">
        <Projecttable />
      </div>
    </div>
  )
}

export default project