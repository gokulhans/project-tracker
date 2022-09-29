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


function Crud() {
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0);

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "goals");

    const createUser = async () => {
        await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
        getUsers();
    };

    const updateUser = async (id, age) => {
        const userDoc = doc(db, "goals", id);
        const newFields = { age: age + 1 };
        await updateDoc(userDoc, newFields);
        getUsers();
    };

    const deleteUser = async (id) => {
        const userDoc = doc(db, "goals", id);
        await deleteDoc(userDoc);
        getUsers();
    };

    const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="Crud">
            <input
                placeholder="Name..."
                onChange={(event) => {
                    setNewName(event.target.value);
                }}
            />
            <input
                type="number"
                placeholder="Age..."
                onChange={(event) => {
                    setNewAge(event.target.value);
                }}
            />

            <button onClick={createUser}> Create User</button>
            {users.map((user) => {
                return (
                    <div>
                        {" "}
                        <h1>Name: {user.name}</h1>
                        <h1>Age: {user.age}</h1>
                        <button
                            onClick={() => {
                                updateUser(user.id, user.age);
                            }}
                        >
                            {" "}
                            Increase Age
                        </button>
                        <button
                            onClick={() => {
                                deleteUser(user.id);
                            }}
                        >
                            {" "}
                            Delete User
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default Crud;