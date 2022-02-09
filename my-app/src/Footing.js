import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footing.css'

function Footing() {
    return (

        <div className="footer">
            <MDBFooter color="blue" className="font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol className='footer_name' md="3">
                            <h5 className="title">Sand Illuminations</h5>
                            <p>
                                Making Memories Come to Light ✨
                            </p>
                        </MDBCol>

                        <MDBCol md="3">
                            <h5 className="title">Links</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="home">Home</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="shop">Shop</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="contact">Contact Us</a>
                                </li>
                                
                            </ul>
                        </MDBCol>

                        <MDBCol md="3">
                            <h5 className="title">Quides</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="assembly">Assembly</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="gallery">Gallery</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="discount">Discounts</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="process">Order Process</a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol md="3">
                            <h5 className="title">Legal</h5>
                            <ul>
                                {/*<li className="list-unstyled">
                                    <a href="#!">Terms of Service</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Privacy</a>
                                </li> */}
                                <li className="list-unstyled">
                                    <a href="#!">Refund Policy</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Warnings/Cautions</a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com">Sandilluminations.com </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </div>
    )
}

export default Footing
