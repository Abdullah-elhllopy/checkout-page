/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './styles.scss'

const Payment = () => {
    return (
       <div className ="mt-5">
           <h1>Shipping and Payment</h1>
       <div className ="row  mt-5 ">
             

            <div className="col-12 col-md-5 ">
                <div class="container">
                <form>
                   
                    <div class="row">
                    <div class=" col-md-6">
                        <div class="form-group">
                        <label for="first">First Name</label>
                        <input type="text" class="form-control" placeholder="" id="first"/>
                        </div>
                    </div>
                    

                    <div class="col-md-6">
                        <div class="form-group">
                        <label for="last">Last Name</label>
                        <input type="text" class="form-control" placeholder="" id="last"/>
                        </div>
                    </div>
                    </div>


                    <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                        <label for="company">Company</label>
                        <input type="text" class="form-control" placeholder="" id="company"/>
                        </div>


                    </div>

                    <div class="col-md-6">

                        <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" class="form-control" id="phone" placeholder="phone"/>
                        </div>
                    </div>
                    </div>
                    


                    <div class="row">
                    <div class=" col-md-6">

                        <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="email"/>
                        </div>
                    </div>
                    

                    <div class="col-md-6">
                        <div class="form-group">
                        <label for="url">Your Website</label>
                        <input type="url" class="form-control" id="url" placeholder="url"/>
                        </div>

                    </div>
                    
                    </div>

                </form>
                </div>
            </div>
            
            <div className="col-12 col-md-4">
                <h2>Payment Method</h2>
                <div class="row  ">
                        <div class="col-sm-4 col-4">
                            <div class='radio selected mx-auto' data-value="dk"> <img class="fit-image" src="https://i.imgur.com/5TqiRQV.jpg" width="105px" height="55px"/> </div>
                        </div>
                        <div class="col-sm-4 col-4">
                            <div class='radio mx-auto' data-value="visa"> <img class="fit-image" src="https://i.imgur.com/OdxcctP.jpg" width="105px" height="55px"/> </div>
                        </div>
                        <div class="col-sm-4 col-4">
                            <div class='radio mx-auto' data-value="master"> <img class="fit-image" src="https://i.imgur.com/WIAP9Ku.jpg" width="105px" height="55px"/> </div>
                        </div>
                        <div class="col-sm-4 col-4">
                            <div class='radio mx-auto' data-value="paypal"> <img class="fit-image" src="https://i.imgur.com/cMk1MtK.jpg" width="105px" height="55px"/> </div>
                        </div> 
                        <div class="col-sm-4 col-4">
                            <div class='radio mx-auto' data-value="paypal"> <img class="fit-image" src="https://i.imgur.com/cMk1MtK.jpg" width="105px" height="55px"/> </div>
                        </div> 
                        <div class="col-sm-4 col-4">
                            <div class='radio mx-auto' data-value="visa"> <img class="fit-image" src="https://i.imgur.com/OdxcctP.jpg" width="105px" height="55px"/> </div>
                        </div>
                </div>
                <h2 className ="my-5">Delivery Methods</h2>
                <div class="row  ">
                        <div class="col-sm-5 m-1 border rounded border  ">
                            <div class='radio selected mx-auto' data-value="dk"> <img class="fit-image" src="https://i.imgur.com/5TqiRQV.jpg" width="100px" height="55px"/> </div>
                        </div>
                        <div class="col-sm-5 m-1 border rounded border ">
                            <div class='radio mx-auto' data-value="visa"> <img class="fit-image" src="https://i.imgur.com/OdxcctP.jpg" width="100px" height="55px"/> </div>
                        </div>
                        <div class="col-sm-5 m-1 border rounded border">
                            <div class='radio mx-auto' data-value="master"> <img class="fit-image" src="https://i.imgur.com/WIAP9Ku.jpg" width="100px" height="55px"/> </div>
                        </div>
                        <div class="col-sm-5 m-1 border rounded border ">
                            <div class='radio mr-2 mx-auto' data-value="paypal"> <img class="fit-image" src="https://i.imgur.com/cMk1MtK.jpg" width="100px" height="55px"/> </div>
                        </div> 
                      
                </div>
                   

            </div>
            <div className="col-12 col-md-3 ">
                <h1>Your Chart</h1>
                <div className="row mb-5">
                    <div className="row col">
                        <img src="https://s.cdpn.io/3/dingo-dog-bones.jpg" width ="50" height ="20" alt="" className="img-fluid col-12 col-lg-4  rounded-circle" />
                        <h4 className ="t-shirt col-12 col-lg-5 ">T-Shirt <br/> Summer Vibes</h4>
                        <h3 className ="col-12 col-lg-3">$12</h3>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="row col">
                        <img src="https://s.cdpn.io/3/dingo-dog-bones.jpg" width ="50" height ="20" alt="" className="img-fluid col-12 col-lg-4  rounded-circle" />
                        <h4 className ="t-shirt col-12 col-lg-5 ">T-Shirt <br/> Summer Vibes</h4>
                        <h3 className ="col-12 col-lg-3">$12</h3>
                    </div>
                </div>
                <div className="roundedoff ">
                    hello
                </div>
                
            </div>
           
        </div>
        </div>
    )
}

export default Payment
