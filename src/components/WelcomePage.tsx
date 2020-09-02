import React from 'react'
import {MDBCol, MDBRow} from 'mdbreact';


const WelcomePage = () =>{
    return (
        <React.Fragment>
        <div className ="full">
            <MDBRow className = "bad=gateway-row">
            <MDBCol md="8">
            <h4 className ="h4-resonsive mt-3 mb-2">
            Welcome to </h4>
            <h2>Basic React Crud Tutorial</h2>
            </MDBCol>
            </MDBRow>
        </div>
        </React.Fragment>
    )
}

export default WelcomePage;