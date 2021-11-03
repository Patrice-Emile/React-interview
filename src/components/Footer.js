import styled from "@emotion/styled";
import React from "react";

// FOOTER STYLE
const List = styled.footer`
  text-align: center;
  background-color: #e6d5b8;
  width: 100%;
  margin:0;
  padding:150px;
  bottom:0;
  box-shadow: 1px 1px 5px #000;
`;

// COMPONENT'S FOOTER
const Footer = () => (
  <List>
    &copy; By CATTIER Patrice-Emile <br />
    All right reserved 2021
  </List>
);

export default Footer;
