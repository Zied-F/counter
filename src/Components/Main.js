import React from 'react'
import {connect} from 'react-redux'


const Main = (props) => {
    console.log(props)
    
    const plus = () => {
        props.dispatch( { type : "PLUS"} )
        };
   
   const moins = () => {
    props.dispatch( { type : "MOINS"} )
};


    return(
            <div>
                <h1>This is a Redux application</h1>
                <h2>{props.count}</h2>
                <button onClick = {()=>{plus()}}>+</button>
                <button onClick = {()=>{moins()}}>-</button>
            </div>
    )

    }


const mapStateToProps = (state) => {
return {
  count : state.count
};

};
    export default connect (mapStateToProps)(Main)