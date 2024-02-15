import React, { useState } from "react";
import { Link } from "react-router-dom";

function Forgot() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const generateOtp = () => {
    // Here you can implement logic to generate and send OTP to the user's email
    // You can use a library like `nanoid` or any other method to generate a unique OTP
    // For simplicity, let's assume the OTP is a 6-digit number
    const generatedOtp = Math.floor(100000 + Math.random() * 900000);
    setOtp(generatedOtp.toString());
    setIsOtpSent(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Here you can implement logic to verify the entered OTP and set the new password
    // For simplicity, we're just logging the data to the console in this example
    console.log("Email:", email);
    console.log("OTP:", otp);
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);

    // You can make an API call to your server to handle OTP verification and password update
    // Reset the state after form submission
    setEmail("");
    setOtp("");
    setNewPassword("");
    setConfirmPassword("");
    setIsOtpSent(false);
  };

  return (
    <>
      <section className="account-section bg_img">
        <div className="container">
          <div className="padding-top padding-bottom">
            <div className="account-area">
              <div className="section-header-3">
                <h2 className="title">Forgot Password</h2>
              </div>
              <form className="account-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="email">
                    Email<span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {isOtpSent ? (
                  <div className="form-group">
                    <label htmlFor="otp">
                      OTP<span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      id="otp"
                      required
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                ) : null}

                {!isOtpSent ? (
                  <div className="form-group text-center">
                    <button type="sumnit" onClick={generateOtp}>
                      Generate OTP
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="form-group">
                      <label htmlFor="newPassword">
                        New Password<span>*</span>
                      </label>
                      <input
                        type="password"
                        placeholder="Enter New Password"
                        id="newPassword"
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirmPassword">
                        Confirm Password<span>*</span>
                      </label>
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        id="confirmPassword"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                  </>
                )}

                <div className="form-group text-center">
                  <input type="submit" value="Submit" />
                </div>
              </form>
              <div className="option">
                <Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Forgot;
