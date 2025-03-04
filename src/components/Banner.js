import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  position: relative;
  width: auto;
  height: 740px;
  background: ${({ $bgImage }) => `url(${$bgImage}) no-repeat center/cover`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* 반투명한 어두운 배경 */
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  padding-right : 80px;
  padding-left : 80px;
`;

const Title = styled.h4`
  font-family: Montserrat;
  font-size: 28px;
  text-align : center;
  font-weight: bold;
  line-height: 36px;
  letter-spacing : -0.36px;
  margin-bottom: 15px;
  color : #ffffff;
`;

const Description = styled.p`
  font-family: Montserrat;
  font-size: 18px;
  text-align : center;
  line-height: 30px;
  letter-spacing : -0.27px;
  color : #ffffffcc;
`;

const Separator = styled.hr`
  width: auto;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  margin: 32px auto;
`;

const SubDescription = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  text-align : center;
  line-height: 22px;
  letter-spacing : -0.21px;
  color : #ffffff99;
`;

const EmailTitle = styled.p`
  font-family: 'Exo 2';
  font-weight: bold;
  font-size: 16px;
  text-align : center;
  letter-spacing : -0.24px;
  margin-top: 95px;
  color : #ffffff;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 500px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  width : 500px;
  height : 50px;
  margin: 0 auto;
  border : solid 1px ${({ $isValid }) => ($isValid === null ? "#fff" : $isValid ? "#00C300" : "#ff6633")};
  border-radius: 7px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  padding: 4px;
  transition: border-color 0.3s ease-in-out;
`;

const EmailInput = styled.input`
  width : 446px;
  height : 42px;
  font-family: 'Exo 2';
  font-size: 16px;
  text-align : left;
  margin : 0 8px 0 0;
  letter-spacing : -0.24px;
  padding: 10px;
  border: none;
  outline: none;
  background: transparent;
  color: white;
  &::placeholder {
    color: rgba(255, 255, 255);
  }
`;

const SubmitButton = styled.button`
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  background : none;
`;

const ErrorMessage = styled.p`
  font-family: Exo2;
  font-size: 14px;
  color: #ff6633;
  margin-top: 5px;
  padding-left: 12px;
  align-self: flex-start; 
  visibility: ${({ $isValid }) => ($isValid === false ? "visible" : "hidden")};
  opacity: ${({ $isValid }) => ($isValid === false ? "1" : "0")};
  transition: opacity 0.3s ease-in-out;
`;

export default function Banner() {
  const [bgImage, setBgImage] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    const savedImage = localStorage.getItem("bgImage");

    if (savedImage) {
      setBgImage(savedImage);
    } else {
      fetch(
        "https://api.unsplash.com/photos/random?client_id=RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM&orientation=landscape&query=nature"
      )
        .then((res) => res.json())
        .then((data) => {
          const imageUrl = data.urls.full;
          setBgImage(imageUrl);
          localStorage.setItem("bgImage", imageUrl);
        })
        .catch((err) => console.error("Failed to fetch image:", err));
    }
  }, []);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    if (inputValue === "") {
      setIsValid(null);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(inputValue));
  };

  return (
    <SectionContainer $bgImage={bgImage}>
      <Overlay />
      <Content>
        <Title>Sed ut perspiciatis unde omnis</Title>
        <Description>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
        </Description>
        <Separator />
        <SubDescription>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
        </SubDescription>
        <EmailTitle>
          Subscribe to our newsletter
        </EmailTitle>
        <FormContainer>
          <Form $isValid={isValid}>
            <EmailInput type="email" placeholder="Enter your email" value={email} onChange={handleInputChange} />
            <SubmitButton>
              <img src="/img/email/paper-plane-1.png" alt="Send Email" />
            </SubmitButton>
          </Form>
          <ErrorMessage $isValid={isValid}>
            Please enter a valid email!
          </ErrorMessage>
        </FormContainer>
      </Content>
    </SectionContainer>
  );
}
