import React from 'react';

const Footer = () => {
  return (
    <div class="container my-5">
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      
    <footer
            class="text-center text-lg-start text-dark"
            // style="background-color: #ECEFF1"
            style={ { backgroundColor: "#ECEFF1"}}
            >

      <section
               class="d-flex justify-content-between p-4 text-white"
               //  style="background-color: #21D192"
               style={ { backgroundColor: "#21D192"}}
               >
        <div class="me-5">
          <span>Get connected with us on social networks:</span>
        </div>
  
        <div>
          <a href="" className="text-white me-4">
            {/* <i className="fab fa-facebook-f"></i> */}
            <img src='./facebook.svg'/>            
          </a>
          <a href="" class="text-white me-4">
            <img src='./twitter.svg' />
          </a>
          <a href="" class="text-white me-4">
            <img src='./google.svg' />
          </a>
          <a href="" class="text-white me-4">
            <img src='./instagram.svg' />
          </a>
          <a href="" class="text-white me-4">
            <img src='./linkedin.svg' />
          </a>
          <a href="" class="text-white me-4">
            <img src='./github.svg' />
          </a>
        </div>
      </section>


      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold">Company name</h6>
              <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  // style="width: 60px; background-color: #7c4dff; height: 2px"
                  style={ { width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                  />
              <p>
                Pacha<br/>
                Non-profit organization (NPO)
              </p>
            </div>
  
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold">Products</h6>
              <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  // style="width: 60px; background-color: #7c4dff; height: 2px"
                  style={ { width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                  />
              <p>
                <a href="#!" class="text-dark">Mobile App</a>
              </p>
              <p>
                <a href="#!" class="text-dark">Web Site</a>
              </p>
              <p>
                <a href="#!" class="text-dark">DataBase</a>
              </p>
              <p>
                <a href="#!" class="text-dark">Bootstrap Angular</a>
              </p>
            </div>
  
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold">Useful links</h6>
              <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  // style="width: 60px; background-color: #7c4dff; height: 2px"
                  style={ { width: "60px", backgroundColor: "#7c4dff", height: "2px" } }
                  />
              <p>
                <a href="#!" class="text-dark">Your Account</a>
              </p>
              <p>
                <a href="#!" class="text-dark">Become an Affiliate</a>
              </p>
              <p>
                <a href="#!" class="text-dark">Shipping Rates</a>
              </p>
              <p>
                <a href="#!" class="text-dark">Help</a>
              </p>
            </div>
  
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold">Contact</h6>
              <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  // style="width: 60px; background-color: #7c4dff; height: 2px"
                  style={ { width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                  />
              <p><img src='house-heart-fill.svg'/> Dr. Manuel Belgrano, Jujuy, ARG</p>
              <p><img src='envelope.svg'/> pacha@gmail..com</p>
              <p><img src='telephone-fill.svg'/> + 54 9 388 567 8888</p>
              <p><img src='telephone-fill.svg'/> + 01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>

      <div
           class="text-center p-3"
          //  style="background-color: rgba(0, 0, 0, 0.2)"
          style={ { backgroundColor: "rgba(0, 0, 0, 0.2)"}}
           >
         2023 :  
        <a class="text-dark" href="https://mdbootstrap.com/"
           > PachaSystem.com</a>
      </div>


    </footer>
    </div>

  )
}

export default Footer