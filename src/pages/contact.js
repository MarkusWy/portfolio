import React from "react"
import Layout from "../components/layout";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import styled from "@emotion/styled";
import Seo from "../components/seo";

const ComponentsWrapper = styled.div`
  margin: auto;
  max-width: 1200px;
  padding: 0 32px;
  align-items: center;
`;

const Contact = () => {
    return (
        <Layout>
            <Header/>
            <Hero subtitle="Get in contact with me"/>
            <ComponentsWrapper>
                <ContactForm/>
            </ComponentsWrapper>
            <Footer/>
        </Layout>
    );
};

export function Head() {
    return (
      <Seo/>
    )
}
  
export default Contact;