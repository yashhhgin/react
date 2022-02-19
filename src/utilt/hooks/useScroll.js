import React, {useEffect, useState} from "react";

export default function useScroll(){
    const [scrollPosition,setScrollPosition] = useState(null);

    function handleScroll(){
        console.log(window.scrollY)
        setScrollPosition(window.scrollY)
    }

    useEffect(() => {
        document.addEventListener('scroll',handleScroll);

        return () => document.removeEventListener('scroll',handleScroll);
    },[]);

    return scrollPosition;
}
