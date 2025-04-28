// src/components/AboutPage.jsx
import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 60px 20px;
  text-align: center;
  background: #f9f9f9;
  min-height: 90vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <Title>About Us</Title>
      <Description>
        Welcome to our Food Recipe App! 🍽️<br />
        We are passionate about sharing delicious recipes from around the world. 
        Our mission is to make cooking easy, fun, and accessible for everyone.
        <br /><br />
        Whether you're a beginner or a pro chef, you’ll find recipes here 
        that will delight your taste buds. Thank you for being a part of our food journey! ❤️
      </Description>
    </AboutContainer>
  );
};

export default AboutPage;
