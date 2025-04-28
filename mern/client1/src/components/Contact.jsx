import React, { useState } from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  padding: 80px 20px;
  max-width: 400px;
  margin: 0 auto;
  background: linear-gradient(to right, #f8f9fa, #e9ecef);
  border-radius: 15px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 14px 18px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #3498db;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
  }
`;

const TextArea = styled.textarea`
  padding: 14px 18px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  resize: vertical;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #3498db;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
  }
`;

const SubmitButton = styled.button`
  padding: 16px;
  background: linear-gradient(to right, #3498db, #6dd5fa);
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.4s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: linear-gradient(to right, #6dd5fa, #3498db);
    transform: translateY(-3px);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // Reset form after submit
    setFormData({ name: "", email: "", message: "" });
    alert("Message sent successfully!");
  };

  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          rows="6"
          placeholder="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
