import React from 'react'
import Card from '../../components/card/card'
import Form from '../../components/form/form'
import Progress from '../../components/progress/progress'
import Search from '../../components/search/search'

function home() {
  return (
    <>
      <div className="mx-4 sm:mx-16 mb-12">
        <Search />
      </div>
      <Progress />
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:mx-12">
        <Card />
      </div>
    </>
  )
}

export default home