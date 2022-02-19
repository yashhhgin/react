import React, {Component, useEffect, useState, useRef ,useLayoutEffect} from 'react'
import Image from './image';
import Axios from 'axios'
import useScroll from './../utilt/hooks/useScroll'
import useFetchImage from './../utilt/hooks/useFetchImage'

function Images(){

    const [page,setPage] = useState(1);

    const [imageList,setImageList,error] = useFetchImage(page)

    const [newImage,setNewImage] = useState("");

    const isRef = useRef(null);

    // const setScrollPosition = useScroll();

    // useEffect(() => {
    //     Axios.get(`${process.env.REACT_APP_URL}?client_id=${process.env.REACT_APP_KEY}`).then(res => setImageList(res.data));
    // },[]);

    // useLayoutEffect(() => {
        // console.log('useLayoutEffect')
        // countOfImg.current = imageList.length
    // });

    function handleImage(index){
        setImageList(imageList.filter((val,ind) => ind !== index));
        // setImageList([...imageList.slice(0,index),...imageList.slice(index + 1,imageList.length - 1)])
    }

    function ShowImage(){
        return (imageList.map((image,index) => <Image handleImage={handleImage} img={image.urls.regular} ind={index}/>)
        )
    }

    function handleClick(){
        if(newImage != ""){
            setImageList([newImage,...imageList])
            setNewImage("");
        }
    }

    function handleChange(e){
        setNewImage(e.target.value);
    }

    return (
        <section>
            <div className="" style={{columnCount:5}}>
                <ShowImage />
                {
                    error.length === 0 && <button onClick={() => setPage(page + 1)}>Load More</button>
                }
            </div>
            {
                error.length === 0 ?
                    <div className="flex justify-between my-5">
                        <div className="w-full">
                            <input ref={isRef} value={newImage} type="text" className="w-full p-2 border border-gray-800 shadow rounded" onChange={handleChange}/>
                        </div>
                        <div>
                            <button disabled={newImage === ""} className={`p-2 ml-2 text-white ${newImage ? "bg-green-600" : "bg-green-300"}`} onClick={handleClick}>Add</button>
                        </div>
                    </div>
                : error[0]
            }

        </section>
    )
}

export default Images;
