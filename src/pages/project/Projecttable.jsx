import React from 'react'
import Projecttablerow from './Projecttablerow'

function Projecttable() {
    return (
        <div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Position
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Status
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <Projecttablerow />
                    <Projecttablerow />
                    <Projecttablerow />
                    <Projecttablerow />
                    <Projecttablerow />
                    <Projecttablerow />
                    <Projecttablerow />
                    <Projecttablerow />
                </tbody>
            </table>
        </div>
    )
}

export default Projecttable