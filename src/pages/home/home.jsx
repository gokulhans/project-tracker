import React from 'react'
import Card from '../../components/card/card'
import Form from '../../components/form/form'
import Progress from '../../components/progress/progress'
import Search from '../../components/search/search'
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { query, orderBy, onSnapshot } from "firebase/firestore"

function Home() {

  const [goals, setGoals] = useState([]);
  const goalsCollection = collection(db, "goals");

  const getGoals = async () => {
    const data = await getDocs(goalsCollection);
    setGoals(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  // useEffect(() => {
  //   getGoals();
  // }, []);

  useEffect(() => {
    const q = query(collection(db, 'goals'))
    onSnapshot(q, (querySnapshot) => {
      setGoals(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }, [])

  return (
    <>
      <div className="mx-4 sm:mx-16 mb-12">
        <Search />
      </div>
      <Progress />
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:mx-12">

        {goals.map((goal) => {
          return (
            <Card />
          )
        })}
      </div>
    </>
  )
}

export default Home;