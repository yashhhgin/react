import React, {Component, useEffect, useState} from 'react'

function Image(){

    // const [myinterval,setMyInterval] = useState(null)

    useEffect(() => {
        const myinterval = setInterval(() => {
                console.log("Hello");
            },1000)

        return () => {
            clearInterval(myinterval);
        }
    },[])

    return (
        <img style={{"width":"280px"}} src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"/>
    )
}

// class Image extends Component
// {
//     constructor(props){
//         super(props);
//         this.state = {interval: null};
//     }
//
//     componentDidMount() {
//         this.setState({
//             interval:setInterval(() => {
//                 console.log("Hello")
//             },1000)
//         })
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.state.interval);
//         console.log("Image is Unmount")
//     }
//
//     render(){
//         return (
//             <img style={{"width":"280px"}} src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"/>
//         )
//     }
// }

export default Image;