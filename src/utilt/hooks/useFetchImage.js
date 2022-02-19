import React, {useState , useEffect} from "react";
import Axios from "axios"

const url = process.env.REACT_APP_URL;
const key = process.env.REACT_APP_KEY;

export default function useFetchImage(page){

    const [imageList,setImageList] = useState([])

    const [error,setError] = useState([])

    useEffect(() => {
        Axios.get(`${url}?client_id=${key}&page=${page}`).then(res => {
            setImageList([...imageList,...res.data])
        }).catch(e => {
            setError(e.response.data.errors)
        });
    }, [page]);

    return [imageList,setImageList,error];
}
