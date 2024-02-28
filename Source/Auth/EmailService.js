"use strict";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


// Create Mail Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
  
    user: process.env.MAIL_ID,
    pass: process.env.MAIL_PASS,
  },
});



// Create Details of Html
const details = async (to, subject, html) => {
  const msg = {
    from: "dharanishsk9698@gmail.com", // Change to your verified sender
    to: to, // Change to your recipient
    subject: subject,
    html: html,
  };
  await transporter.sendMail(msg);
};



// Signup Email (User)
const sendWelcomeEmail = async (email, name, phone) => {
  try {
    let html = `<div>
        <h3>Welcome Mr. ${name},</h3>
        <p>Greetings for the day! You Logged In
        </p>
        <div>
            <table>
               
                <tr>
                    <td>Email:</td>
                    <td>${email}</td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td>${phone}</td>
                </tr>
            </table>
        </div>
        <div>
            --<br>
            Thanks,<br>
            Company
            
        </div>
    </div>`;
    await details(email, "We have received your request", html);
  } catch (error) {
    throw error;
  }
};



// Signup Email (Admin)
const sendAdminEmail = async (email, name,) => {
    try {
      let html = `<div>
          <h3>Hello Owner</h3>
          <p>You have reaceived a one customer
          </p>
          <div>
              <table>
                 
                  <tr>
                      <td>Email:</td>
                      <td>${email}</td>
                  </tr>
                  <tr>
                      <td>Name:</td>
                      <td>${name}</td>
                  </tr>
              </table>
          </div>
          <div>
              --<br>
              Thanks,<br>
              Company
              
          </div>
      </div>`;
      await details('dharanishsk9698@gmail.com', "You have received your request", html);
    } catch (error) {
      throw error;
    }
  };



export default {
  sendWelcomeEmail,sendAdminEmail
};
