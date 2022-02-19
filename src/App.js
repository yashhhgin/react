import React, {useEffect, useState, useRef} from "react";
import "./assets/css/tailwind.css"
import Images from "./components/Images";

function App(){

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
//                             <Images />
//                             : null
//                     }
//                     <button onClick={this.handleClick}>Click</button>
//                 </div>
//             </div>
//         );
//     }
// }

export default App;
