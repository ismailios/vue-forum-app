import { db } from "@/config/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";


export function fetchAll(commit, resources) {
    const q = query(collection(db, resources));
    onSnapshot(q, (querySnapshot) => {
        const resources = [];
        querySnapshot.forEach((doc) => {
            const data = {
                id: doc.id,
                ...doc.data()
            };
            resources.push(data);
        });
        commit("setItems", resources);

    });
}