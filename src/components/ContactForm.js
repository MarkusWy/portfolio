import React, { useState }  from "react"
import axios from "axios";
import styled from "@emotion/styled";
import LoadingSpinner from './LoadingSpinner';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    overflow: hidden;
`;

const TextInput = styled.input`
    font-size: 1rem;
    padding: 10px;
    margin: 10px 0;
    width: 100%;
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
    box-sizing: border-box;

    &:focus {
        border-color: #000;
    }
    &::placeholder {
        color: #000;
    }
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const TextArea = styled.textarea`
    font-size: 1rem;
    padding: 10px;
    width: 100%;
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
    box-sizing: border-box;
    
    &:focus {
        border-color: #000;
    }
    &::placeholder {
        color: #000;
        top: 0;
    }
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const DropdownSelector = styled.select`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;;
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
    &:focus {
        border-color: #000;
    }
    &::placeholder {
        color: #000;
    }
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const SendButton = styled.button`
    background-color: #0073ec;
    color: #fff;
    font-size: 1rem;
    padding: 10px;
    margin: 10px 0;
    width: 100%;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
        background-color: #0067d6;
    }
    @media (max-width: 768px) {
        font-size: 1rem;
    }

    &:disabled {
        background-color: gray;
        color: #fff;
        cursor: not-allowed;
    }
`;

const ConsentWrapper = styled.div`
    padding: 20px 0;
`;

const LoadingOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
`;

const LoadingSpinnerWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ThankYouText = styled.p`
    font-size: 1.5rem;
    text-align: center;
    margin: 20px 0;
`;

const ThankYouWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ContactForm = () => {
    
    const [serverState, setServerState] = useState({
      submitting: false,
      status: null
    });

    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        form.reset();
      }
    };

    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "post",
        url: "https://getform.io/f/0f667cae-db07-4018-8c7e-8f88ebcb2bf7",
        data: new FormData(form)
      })
        .then(r => {
          handleServerResponse(true, "Thanks!", form);
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error, form);
        });
    };

    console.log(serverState);

    return (
        <div>
            { serverState.submitting &&
                <LoadingOverlay>
                    <LoadingSpinnerWrapper>
                        <LoadingSpinner/>
                    </LoadingSpinnerWrapper>
                </LoadingOverlay>
            }
            { serverState.status?.ok &&
                <ThankYouWrapper>
                    <ThankYouText>
                        The form has been submitted successfully.<br/>
                        Thank you for getting in touch.<br/>
                        I will get back to you shortly!
                    </ThankYouText>
                </ThankYouWrapper>
            }
            <Form onSubmit={handleOnSubmit}>
                {/* dropdown asking reason for contact */}
                <label>
                    Select a reason for contact
                <DropdownSelector required name="reason" id="reason">
                    <option value="">Reason for Contact</option>
                    <option value="freelance">Freelance.</option>
                    <option value="job">Job oppurtunity.</option>
                    <option value="other">Other.</option>
                </DropdownSelector>
                </label>

                <label>Your first and last name</label>
                <TextInput required type="text" name="name" placeholder="Your Name*"/>
                <label>The email address you wish to be contacted on</label>
                <TextInput required type="email" name="email" placeholder="Your Contact Email*"/>
                <label>Your mobile phone number</label>
                <TextInput type="text" name="number" placeholder="Phone number"/>
                <label>A message you wish to send to me</label>
                <TextArea type="text" name="message" placeholder="Message"/>
                <ConsentWrapper>
                    <input required type="checkbox" name="consent" id="consent"/>
                    <label htmlFor="consent">I consent to the content of this form being stored and used for contact*</label>
                </ConsentWrapper>
                <input type="hidden" name="_gotcha"/>
                <SendButton disabled={serverState.status?.ok ? "disabled" : null} type="submit">Send</SendButton>
            </Form>
        </div>
    );
  };
  
  export default ContactForm;