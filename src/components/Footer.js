import React from "react";
import styled from "@emotion/styled";

const FooterWrapper = styled.div`
  background: #0073ec;
`;

const CopyrightText = styled.div`
  color: white;
  font-size: 14px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
        <CopyrightText>Copyright © 2023 Markus Wyrin.</CopyrightText>
    </FooterWrapper>
  );
};

export default Footer;