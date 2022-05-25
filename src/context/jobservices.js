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

const jobCollectionRef=collection(db,"jobs");

class JobDataService {
    addJobs = (newJob) => {
        return addDoc(jobCollectionRef, newJob);
    }
    updateJob = (id, updatedJob) => {
        const jobDoc = doc(db, "jobs", id);
        return updateDoc(jobDoc, updatedJob);
    };
    getAllJobs = () => {
        return getDocs(jobCollectionRef);
    };
    getJobs = (id) => {
        const jobDoc = doc(db, "jobs", id);
        return getDoc(jobDoc);
    };
    deleteJob = (id) => {
        const jobDoc = doc(db, "jobs", id);
        return deleteDoc(jobDoc);
    };
}

export default new JobDataService();