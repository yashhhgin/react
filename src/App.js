import React, {useEffect, useState} from "react";
import "./assets/css/tailwind.css"
import Image from "./components/Image";

function App(){

    const [data,setData] = useState("Hello World");
    const [toggle,setToggle] = useState(false);
    const [didMount,setDidMount] = useState(false);

    function handleClick(){
        setToggle(!toggle);
        setData(data == "Hello sss" ? "Hello World" : "Hello sss");
    }

    useEffect(() => {
        if(didMount){
            console.log('on update')
        }
    },[toggle]);

    useEffect(() => {
        setDidMount(true);
    },[]);


    return (
        <div>
            <div  className="bg-gray-600 text-white p-5 border">
                <h1>{data}</h1>
            </div>
            <div>
                {
                    toggle == true ?
                        <Image />
                        : null
                }
                <button onClick={handleClick}>Click</button>
            </div>
        </div>
    )
}

// class App extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {data:"Hello World",toggle:false}
//         // console.log('CON')
//         // this.handleClick = this.handleClick.bind(this);
//     }
//
//     handleClick = () => {
//         this.setState({toggle: !this.state.toggle});
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log(prevState)
//         console.log(prevProps)
//         console.log(snapshot)
//     }
//
//     componentDidMount() {
//         this.setState({data:"Hello Yash"})
//         // console.log("componentDidMount")
//     }
//
//     componentWillUnmount() {
//         // console.log("componentWillUnmount")
//     }
//
//     render() {
//         // console.log('Render')
//         return (
//             <div>
//                 <div  className="bg-gray-600 text-white p-5 border">
//                     <h1>{this.state.data}</h1>
//                 </div>
//                 <div>
//                     {
//                         this.state.toggle == true ?
//                             <Image />
//                             : null
//                     }
//                     <button onClick={this.handleClick}>Click</button>
//                 </div>
//             </div>
//         );
//     }
// }

export default App;
