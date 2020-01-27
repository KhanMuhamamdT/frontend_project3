import React from "react";

function Footer() {
  return <p style={footerStyle}>by A.A.S.M. | copyright &copy; 2020</p>;
}

const footerStyle = {
  textAlign: "center",
  backgroundColor: "#543C52",
  color: "beige",
  marginTop: "-10px",
  padding: "20px",
  position: "relative",
  height: "20px",
  clear: "both",
  fontFamily: "worker, sans-serif",
  fontWeight: "200",
  fontSize: "2vw"
};

// const footerLinkStyle = {
//   color: "beige"
// };
export default Footer;
