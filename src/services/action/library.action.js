
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebaseconfig';

export const loading = () => {
    return {
        type: "LOADING"
    }
}

export const addNewlibrary = () => {
    return {
        type: "ADD_NEW_LIBRARY",
    }
}

export const addlibraryRej = (msg) => {
    return {
        type: "ADD_NEW_LIBRARY_REJ",
        payload: msg
    }
}


export const getAlllibrarys = (data) => {
    return {
        type: "GET_ALL_LIBRARYS",
        payload: data
    }
}

export const singlelibrary = (data) => {
    return{
        type: "SINGLE_LIBRARY",
        payload: data
    }
}

export const updatelibrary = () => {
    return {
        type: "UPDATE_LIBRARY",
    }
}


export const addlibraryAsync = (data) => {
   
    return async(dispatch) => {
        dispatch(loading())
        try {
            let addNewDoc = await setDoc(doc(db, 'librarys', `${data.id}`), data)
            dispatch(addNewlibrary())

        } catch (err) {
            console.log(err)
        }
    }
}

export const getAlllibraryAsync = () => {
    return async(dispatch) => {
        dispatch(loading());
        try {
            let librarys = await getDocs(collection(db, "librarys"))

            let result = librarys.docs.map((library) => {
                return {
                    id: library.id,
                    ...library.data()
                }
            })
            dispatch(getAlllibrarys(result))
        } catch (err) {
            console.log(err);
        }

    }
}

export const deletelibraryAsync = (id) => {
    return async(dispatch) => {
        try {
            let record = await deleteDoc(doc(db, 'librarys', `${id}`))
            dispatch(getAlllibraryAsync())
        } catch (error) {
            console.log(err);  
        }
    }
}

export const singlelibraryAsync = (id) => {
    return async(dispatch) => {
        try {
            let res = await getDoc(doc(db, 'librarys', `${id}`))
            let result = res.data();
            result.id = res.id;
            dispatch(singlelibrary(result))
        } catch (err) {
            console.log(err);
        }
    }   
}

export const updatelibraryAsync = ( data) => {
    return async(dispatch) => {
        try {
                        await updateDoc(doc(db, 'librarys', `${data.id}`), data);
                        dispatch(updatelibrary())
                    } catch (error) {
                        console.log(error);
                    }
    }
}

