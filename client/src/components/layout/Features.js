import React from "react";

const Features = () => {
  return (
    <div className="feature-area feature-style-one mb-100 pt-76">
      <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="feature-card-alpha">
              <div className="feature-icon">
                <img
                  src="https://res.cloudinary.com/dknhwuhzh/image/upload/v1682941254/ShopITAssets/feature-i1_kuhehk_coay9x.svg"
                  alt=""
                />
              </div>
              <div className="feature-content">
                <h5>Fast Free Shipping</h5>
                <p>Around the world</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="feature-card-alpha">
              <div className="feature-icon">
                <img
                  src="https://res.cloudinary.com/dknhwuhzh/image/upload/v1682941298/ShopITAssets/feature-i2_a22qln_fq2mmu.svg"
                  alt=""
                />
              </div>
              <div className="feature-content">
                <h5>24/7 Supports</h5>
                <p>Contact us 24 hours</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="feature-card-alpha">
              <div className="feature-icon">
                <img
                  src="https://res.cloudinary.com/dknhwuhzh/image/upload/v1682941342/ShopITAssets/feature-i3_n1cql4_v9cpq4.svg"
                  alt=""
                />
              </div>
              <div className="feature-content">
                <h5>100% Money Back</h5>
                <p>Guarantee of money retun</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="feature-card-alpha">
              <div className="feature-icon">
                <img
                  src="https://res.cloudinary.com/dknhwuhzh/image/upload/v1682941375/ShopITAssets/feature-i4_aavhpz_it4a7f.svg"
                  alt="avatar"
                />
              </div>
              <div className="feature-content">
                <h5>100% Secure Payment</h5>
                <p>Your payment are safe with us.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
