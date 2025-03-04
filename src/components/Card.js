import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CardGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  margin: 34px 80px 110px;
  padding: 0;
`;

const CardBox = styled.div`
  width: auto;
  height: auto;
  flex-grow: 0;
`;

const ImgElipse = styled.img`
  width: auto;
  height: auto;
  object-fit: contain;
`;

const CardTitle = styled.div`
  width: 493px;
  height: 36px;
  flex-grow: 0;
  margin: 40px 0 24px;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.36px;
  text-align: left;
  color: #000;
`;

const CardSubTitle = styled.div`
  flex-grow: 0;
  margin: 24px 0;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 30px;
  letter-spacing: -0.27px;
  text-align: left;
  color: rgba(0, 0, 0, 0.8);
`;

const LearnMore = styled.a`
  width: auto;
  height: auto;
  flex-grow: 0;
  font-family: 'Exo 2';
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: -0.27px;
  text-align: left;
  color: #18a0fb;
  text-decoration-line : none;
`;



export default function Card() {

  const initialCards = [
    {
      img: "img/card/card_first/ellipse.png",
      title: "Sed ut perspiciatis",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit\n aspernatur aut odit aut fugit, sed quia consequuntur\n magni dolores eos qui ratione voluptatem.",
    },
    {
      img: "img/card/card_second/ellipse.png",
      title: "Lorem ipsum dolor",
      desc: "Amet, consectetur adipiscing elit, sed do eiusmod\n tempor incididunt ut labore et dolore magna aliqua. Ut\n enim ad minim veniam, quis.",
    },
    {
      img: "img/card/card_third/ellipse.png",
      title: "Nemo enim ipsam",
      desc: "Consequuntur magni dolores eos qui ratione\n voluptatem sequi nesciunt. Neque porro quisquam est,\n qui dolorem ipsum quia dolor.",
    },
  ];

  const [cards, setCards] = useState([]);

  const shuffleCards = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setCards(shuffleCards([...initialCards]));
  }, []);

  return (
    <CardGroup>
      {cards.map((card, index) => (
        <CardBox key={index}>
          <ImgElipse src={card.img} alt={card.title} />
          <CardTitle>{card.title}</CardTitle>
          <CardSubTitle>
            {card.desc.split("\n").map((line, i) => (
              <span key={i}> {line} <br /> </span>
            ))}
          </CardSubTitle>
          <LearnMore href="#">LEARN MORE</LearnMore>
        </CardBox>
      ))}
    </CardGroup>
  );
}