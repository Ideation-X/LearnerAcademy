import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./contact.css";
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 68vh;
`;

const FormContainer = styled.div`
  width: 35%;
  background-color: #ffffff;
  border-radius: 0.375rem;
  overflow: hidden;
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #D1D5DB;
  border-radius: 0.375rem;
  font-size: 0.875rem;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #D1D5DB;
  border-radius: 0.375rem;
  font-size: 0.875rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background-color: #667EEA;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #5A67D8;
  }
`;


const Contact = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const  [email, setEmail] = useState('');
    const navigate = useNavigate();
   
    return (
        <div className="contact-div">
            <div className="heading">
                <h1>Contact</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi velit cumque, quaerat at et veritatis vero id
                    deserunt provident exercitationem iusto ut facere, error rem
                    temporibus quis? Et dolor porro distinctio repellendus
                </p>
                <div>
                <br/>Mobile: 987643210<br/>Address : Learning Academy, New Delhi.
                </div>
            </div>

            <Container>
      <FormContainer>
        <Form >
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            name="name"
            id="name"
            autoComplete="given-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="message">Message</label>
          <Textarea
            id="message"
            name="message"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button type="submit">Send</Button>
        </Form>
      </FormContainer>
    </Container>
        </div>
    );
};

export default Contact;
