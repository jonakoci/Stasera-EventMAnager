import React from 'react'

function Footer() {
  return (
    <div>
                  <footer
                class="text-center text-lg-start text-dark"
                style={{ backgroundColor: "white", padding: "20px" }}
            >
                <section class="">
                    <div class="container text-center text-md-start mt-5">
                        <div class="row mt-3">
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold" style={{color: "#D9027D"}}>Stasera</h6>
                                <hr
                                    class="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: " #7c4dff", height: "2px" }}
                                />
                                <p>
                                Discover the hidden gems of your city's nightlife scene by accessing detailed event listings with comprehensive information. Find out about upcoming shows, guest DJs, ticket prices, venue details, and more. 
                                </p>
                            </div>
                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold" style={{color: "#D9027D"}}>Contact</h6>
                                <hr
                                    class="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                />
                               
                                <p>
                                    <a href="#!" class="text-dark">Contact Us</a>
                                </p>
                                
                            </div>
                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold" style={{color: "#D9027D"}}>Company</h6>
                                <hr
                                    class="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                                <p>
                                    <a href="#!" class="text-dark" style={{color: "#D9027D"}}>About Us</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-dark" style={{color: "#D9027D"}}>Management</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-dark">Help</a>
                                </p>
                            </div>
                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 class="text-uppercase fw-bold" style={{color: "#D9027D"}}>Legal</h6>
                                <hr
                                    class="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                                <p><i class="fas fa-home mr-3"></i> Cookie Policy</p>
                                <p><i class="fas fa-envelope mr-3"></i> Cookie Preferences</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div
                    class="text-center p-3" 
                >
                    © 2023 Copyright:
                    <a class="text-dark" href="https://greenspots.com/"
                    >Stasera.com</a>
                </div>
            </footer>
    </div>
  )
}

export default Footer
