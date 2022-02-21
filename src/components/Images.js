import React, {useState, useRef, useEffect} from 'react'
import Image from './image';
import useFetchImage from './../utilt/hooks/useFetchImage'
import Loading from "./Loading";
import useScroll from "../utilt/hooks/useScroll";
import InfiniteScroll from 'react-infinite-scroll-component';
import useDebounce from './../utilt/hooks/useTimeout';

function Images(){

    const [page,setPage] = useState(1);
    const [search,setSearch] = useState(null);

    const [imageList,setImageList,error,isLoading] = useFetchImage(page,search)

    const [newImage,setNewImage] = useState("");

    const scrollPosition = useScroll();

    const isRef = useRef(null);

    function handleImage(index){
        setImageList(imageList.filter((val,ind) => ind !== index));
    }

    function ShowImage(){
        return (
            <InfiniteScroll className="flex flex-wrap" dataLength={imageList.length} next={() => setPage(page + 1)} hasMore={true}>
                {
                    imageList.map((image,index) => <Image key={index} handleImage={handleImage} img={image.urls.regular} ind={index}/>)
                }
            </InfiniteScroll>
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

    const debounce = useDebounce();

    function handleInput(e){
        const text = e.target.value;
        debounce(() => setSearch(text));
    }

    return (
            <section>
                <div>
                    <input type="text" onChange={handleInput} className="w-full order rounded shadow p-2" placeholder="Search Photo Here"/>
                </div>
                <div className="flex flex-wrap">
                    <ShowImage />
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
                { isLoading && <Loading /> }
            </section>
    )
}

export default Images;
