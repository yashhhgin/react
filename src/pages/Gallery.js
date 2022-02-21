import React, {useRef, useState} from "react";
import Images from "../components/Images";

export default function Gallery(){

    const [data,setData] = useState("Hello World");
    const checkRef = useRef(null);

    return (
        <section className="flex justify-center">
            <div className="w-10/12">
                <div className="text-center">
                    <div className="my-4">
                        {data}
                    </div>
                </div>
                <Images />
            </div>
        </section>
    );
}