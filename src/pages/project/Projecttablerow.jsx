import React from 'react'

function Projecttablerow() {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th className="py-4 px-6 text-base font-bold">
                Neil Slim
            </th>
            <td className="py-4 px-6">
                React Developer
            </td>
            <td className="py-4 px-6">
                <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Completed
                </div>
            </td>
            <td className="py-4 px-6">
                <a href="#" type="button" data-modal-toggle="editUserModal">
                <button type="button" className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"><b>Edit</b></button>
                </a>
            </td>
        </tr>
    )
}

export default Projecttablerow