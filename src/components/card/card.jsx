import React from 'react'
import Progress from '../progress/progress'
import Smallprogress from '../progress/smallprogress'

function Card(props) {
    console.log(props);
    return (
        <>
            <a className="relative block p-8 border border-gray-50 hover:border-gray-100 hover:shadow-xl rounded-xl" href="" > <span className="absolute right-4 top-4 rounded-full w-4 h-4 bg-green-300 text-green-600 font-medium text-xs" > </span>
                <div className="mt-4 text-gray-500 sm:pr-8">
                    <h5 className="mt-4 text-xl font-bold text-gray-900"> {props.goal.data.name}</h5>
                    <p className="hidden mt-2 text-sm sm:block">
                        You can manage phone, email and chat conversations all from a single
                        mailbox.
                    </p>
                    <div className="mt-3">
                    <Smallprogress />
                    </div>
                </div>
            </a>
        </>
    )
}

export default Card