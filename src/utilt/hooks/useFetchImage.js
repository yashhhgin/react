import React, {useState , useEffect} from "react";
import Axios from "axios"

const url = process.env.REACT_APP_URL;
const key = process.env.REACT_APP_KEY;

const onlyImage = "/photos"
const searchImage = "/search/photos"

export default function useFetchImage(page,search){

    const [imageList,setImageList] = useState([])

    const [error,setError] = useState([])

    const [isLoading,setIsLoading] = useState(false)

    function fetch(){

        const query = search == null
                        ? '/photos?'
                        : `/search/photos?query=${search}&`;

        Axios.get(`${url}${query}client_id=${key}&page=${page}`)
            .then(res => {
                search == null ? fetchRandom(res) : fetchSearch(res)
            }).catch(e => {
                setError(e.response.data.errors)
                setIsLoading(false);
            });
    }

    function fetchRandom(res){
        setImageList([...imageList,...res.data])
    }

    function fetchSearch(res){
        page == 1 ? setImageList(res.data.results) : setImageList([...imageList,...res.data.results]);
    }

    useEffect(() => {
        setIsLoading(true);

        fetch();
    }, [page,search]);


    return [imageList,setImageList,error,isLoading];
}
