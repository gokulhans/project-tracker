import React from 'react'
import Card from '../../components/card/card'
import Form from '../../components/form/form'
import Progress from '../../components/progress/progress'

function home() {
  return (
    <>
        <Progress />
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:mx-12">
        {/* <Form /> */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default home