import React from "react";
import Banner from "./layout/Banner";

const Contact = () => {
  return (
    <>
      <Banner
        src="https://res.cloudinary.com/dknhwuhzh/image/upload/v1682940769/ShopITAssets/bg2_a9w4ja_rp1hmn.png"
        search="false"
        text="Contact Us"
      />
      <section className="contact-section pt-100 pb-100">
        <div className="container">
          <div className="row justify-content-center mb-40">
            <div className="col-md-6 text-center">
              <h5 className="title-25 text-uppercase">
                Get in touch! <br />
                will contact you soon
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="contact-form-area">
                <div className="form-wrap box--shadow">
                  <h4 className="title-25 contact-form-title mb-8">Get In Touch</h4>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <form
                    className="contact-form-title"
                    action="https://formsubmit.co/mp626329@gmail.com"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-inner">
                          <label>Your Name</label>
                          <input
                            type="text"
                            name="fname"
                            placeholder="Your name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-inner">
                          <label>Email</label>
                          <input
                            type="text"
                            name="email"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="col-12 mb-40">
                        <div className="form-inner">
                          <textarea
                            name="message"
                            placeholder="Your message"
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12 pb-3">
                        <a href="#" className="primary--btn contact-btn">
                          <button
                            type="submit"
                            style={{
                              border: "none",
                              background: "none",
                              color: "white",
                            }}
                          >
                            Send Message
                          </button>
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row contact-info-area g-4 justify-content-center pt-100">
            <div className="col-lg-4 col-md-6">
              <div className="branch-info-item">
                <div className="branch-info-header">
                  <h4>Branch No 01</h4>
                </div>
                <div className="branch-info-body box--shadow">
                  <ul className="text-center">
                    <li>Address: hai address mai kue batau India</li>
                    <li>Email: mp626329@gmail.com</li>
                    <li>Phone: +91 1234567890</li>
                    <li>Web: www.yourwebsite.com</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="branch-info-item">
                <div className="branch-info-header">
                  <h4>Branch No 02</h4>
                </div>
                <div className="branch-info-body box--shadow">
                  <ul className="text-center">
                    <li>
                      Address: hai kuch address mai kue batau, India
                    </li>
                    <li>Email: mp626329@gmail.com</li>
                    <li>Phone: +91 1234567890</li>
                    <li>Web: www.yourwebsite.com</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="branch-info-item">
                <div className="branch-info-header">
                  <h4>Branch No 03</h4>
                </div>
                <div className="branch-info-body box--shadow">
                  <ul className="text-center">
                    <li>
                      Address: hai kuch address mai kue batau, India
                    </li>
                    <li>Email: mp626329@gmail.com</li>
                    <li>Phone: +91 1234567890</li>
                    <li>Web: www.yourwebsite.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;