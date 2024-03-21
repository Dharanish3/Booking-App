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


// Booking Confirmation Mail
const bookingConfirmation = async (
  email, name, movieName,  date,time,theater, totalPrice, seatNumber,screen
) => {
  try {
    let html = `<div>
        <h3>Hello Mr. ${name},</h3>
        <p>Your Movie Booking Successfully 
        </p>
        <div>
           <p>Enjoy Your Movie</p>
           <table>
               
                <tr>
                    <td>Movie : </td>
                    <td>${movieName}</td>
                </tr>
                <tr>
                    <td>Date : </td>
                    <td>${date}</td>
                </tr>
                <tr>
                    <td>Screen : </td>
                    <td>${screen}</td>
                </tr>
                <tr>
                    <td>Time : </td>
                    <td>${time}</td>
                </tr>
                <tr>
                    <td>Theater : </td>
                    <td>${theater}</td>
                </tr>
                <tr>
                    <td>Total Price : </td>
                    <td>${totalPrice}</td>
                </tr>
                <tr>
                    <td>Seat No : </td>
                    <td>${seatNumber}</td>
                </tr>
            </table>
        </div>
        <div>
            --<br>
            Thanks,<br>
            Tickets 🎟️ Buy 
            
        </div>
    </div>`;
    await details(email, "Movie Booked Successfully", html);
  } catch (error) {
    throw error;
  }
};




// Signup Email (Admin)
const sendAdminEmail = async (email, name) => {
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
    await details(
      "dharanishsk9698@gmail.com",
      "You have received your request",
      html
    );
  } catch (error) {
    throw error;
  }
};



export default {
  sendWelcomeEmail,
  sendAdminEmail,
  bookingConfirmation,
};
