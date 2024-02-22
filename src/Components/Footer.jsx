import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    const date = new Date().getFullYear()
  return (
    <>
    <footer className="bg-dark text-white text-center py-4">
       
    <p>&copy; {date}  Tickets 🎟️ Buy. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Footer;
