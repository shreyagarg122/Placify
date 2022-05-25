import { db } from "../firebase";
import{
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} from "firebase/firestore";

const studentCollectionRef=collection(db,"students");

class StudentDataService {
    addStudents = (newStudent) => {
        return addDoc(studentCollectionRef, newStudent);
    }
    updateStudent = (id, updatedStudent) => {
        const studentDoc = doc(db, "students", id);
        return updateDoc(studentDoc, updatedStudent);
    };
    getAllStudents = () => {
        return getDocs(studentCollectionRef);
    };
    getStudents = (id) => {
        const studentDoc = doc(db, "students", id);
        return getDoc(studentDoc);
    };
    deleteStudent = (id) => {
        const studentDoc = doc(db, "students", id);
        return deleteDoc(studentDoc);
    };
}

export default new StudentDataService();