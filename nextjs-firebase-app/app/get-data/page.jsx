"use client"

import { useEffect, useState } from "react";
import { collection, getDocs, query, where, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebase";

const GetData = () => {
    const [students, setStudents] = useState([]);
    const [loader, setLoader] = useState(false);
    const [updateloader, setUpdateLoader] = useState(false);

    const [id, setId] = useState();

    const fetchDocs = async () => {
        try {
            const collectionName = collection(db, "users");

            // to conditionally get data /to get specific data

            // const queryRef = query(collectionName, where("email", "==", "test@gmail.com"))
            // const docs = await getDocs(queryRef); //sirf whi data aega jispa condition apply ki ha.

            const docs = await getDocs(collectionName); // sara data aega


            const studentsData = [];
            // docs.forEach((doc) => {
            //     studentsData.push(doc.data());
            // });
            /////////////////////////////////////////////////////////////////////////////////////////
            //to update document we need id of the document ->jo hum run time pa ider lenga
            docs.forEach((doc) => {
                studentsData.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            console.log(students)

            setStudents(studentsData);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        fetchDocs();
    }, []);

    const onDeleteHandler = async (id) => {

        try {
            setId(id);
            setLoader(true);
            const docRef = doc(db, "users", id);
            await deleteDoc(docRef);
            setLoader(false);
            // fetchDocs(); => it will take sometime so we will update data from local instead of fetching updated data from database(ye data ko refetch nhi krega jis sa time save hoga.)


            const newStudents = students.filter((student) => id !== student.id);
            setStudents(newStudents);



        } catch (error) {
            console.log("error", error)
        }


    }

    const onUpdateHandler = async (id) => {
        try {
            setId(id);
            setUpdateLoader(true);

            const updatedData = {
                name: "Arshad",
                email: "dadi@gmail.com",
                course: "driving",
            };

            // Update the data in the Firestore database
            const docRef = doc(db, "users", id);
            await updateDoc(docRef, updatedData);

            //////////////////1st Method////////////////////////////////////////////////////
            // Update the local state with the modified data
            // setStudents((prevStudents) =>
            //     prevStudents.map((student) =>
            //         student.id === id ? { ...student, ...updatedData } : student
            //     )
            // );
            ///////////////////////////////2nd Method/////////////////////////////////////
            const updatedStudents = students.map((student) => student.id === id ? { ...student, ...updatedData } : student)
            setStudents(updatedStudents);

            setUpdateLoader(false);
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <div>
            <h1>Get data in Next.js</h1>
            <h1>List of Students</h1>

            <table>
                <tbody>
                    <tr>
                        <td>student id</td>
                        <td>student Name</td>
                        <td>student Email</td>
                        <td>student Course</td>
                        <td>Delete</td>
                        <td>Update</td>
                    </tr>

                    {students?.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.course}</td>
                            <td>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => onDeleteHandler(student.id)}>
                                    {student.id == id && loader ? "Loading......." : "Delete"}
                                </button>
                            </td>

                            <td>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => onUpdateHandler(student.id)}>
                                    {student.id == id && updateloader ? "Loading......." : "Update"}
                                </button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GetData;
