import {useState} from "react";

export default function useTimeout(){
    const [typingTimeout,setTypingTimeout] = useState("");

    function debounce(func,wait = 1000){
        clearTimeout(typingTimeout)
        setTypingTimeout(setTimeout(func,wait))
    }

    return debounce;
}