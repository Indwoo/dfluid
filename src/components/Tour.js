import React, { useState } from "react";
import styled from "styled-components";

const FilterCardSection = styled.section`
  padding: 40px 80px;
`;

const Title = styled.h2`
  width: 750px;  
  height: auto;
  flex-grow : 0;
  font-family: 'Exo 2';
  font-size: 48px;
  font-weight: normal;
  line-height: 72px;
  letter-spacing: -0.72px;
  padding: 80px 0 60px 0;
`;

const FilterSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px; 
  margin-bottom: 30px;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 30px;
  padding: 5px;
  width: fit-content;
`;

const YearFilterContainer = styled.div`
  position : relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 30px;
  padding: 5px;
  width: fit-content;
  gap : 80px;
`;

const YearFilterTrack = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  right: 5%;
  height: 4px;
  background: linear-gradient(
    to right,
    #000 ${({ progress }) => progress}%,
    #aaa ${({ progress }) => progress}%
  );
  transform: translateY(-50%);
  z-index: 0;
`;

const FilterButton = styled.button`
  background: ${({ active }) => (active ? "#000" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-family : 'Exo 2';
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${({ active }) => (active ? "#000" : "#ddd")};
  }
`;

const YearFilterButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family : 'Exo 2';
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  z-index: 1;

  background: ${({ active }) => (active ? "#000" : "#aaa")};
  color: #fff;

  &:hover {
    background: ${({ active }) => (active ? "#000" : "#888")};
  }
`;

const CardList = styled.div`
  display: flex;
  gap : 40px;
  overflow-x: auto;
  padding-bottom: 10px; 
  
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const Card = styled.div`
  flex: 0 0 auto;
  width: 400px; 
  height: 415px;
  background: #f5f5f5;
  padding: 15px 20px 23px;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #d9d9d9;
    border-radius: 10px;
    opacity: 0.5;
    z-index: -1;
  }
`;

const CardImage = styled.img`
  width : 100%;
  height: 230px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom : 20px;
  flex-grow: 0;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 9px;
  padding: 0 5px 0 3px;
`;

const CardTitle = styled.span`
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.24px;
  color : #000;
`;

const CardYear = styled.span`
  width: 30px;
  height: 20px;
  flex-grow: 0;
  font-family: Montserrat;
  font-size: 16px;
  letter-spacing: -0.24px;
  text-align: right;
  color: #000;
`;

const CardDescription = styled.span`
  font-family: Montserrat;
  font-size: 14px;
  padding: 0 3px;
  letter-spacing: -0.21px;
  color: #000;
  
  display: -webkit-box;
  -webkit-line-clamp: 6; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
  flex-grow: 1; 
  word-break: break-word; 
   min-height: 8.4em;
`;

export default function Tour() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState(1000);

  const yearOptions = [1000, 1300, 1700, 2000];

  const progress = ((yearOptions.indexOf(selectedYear)) / (yearOptions.length - 1)) * 100;


  const cards = [
    { id: 1, title: "Italy, Pisa", year: 1173, category: "Europe", img: "img/tour/Italy_Pica.png", desc: "The Leaning Tower of Pisa, or simply the Tower of Pisa (torre di Pisa), is the campanile, or freestanding bell tower, of Pisa Cathedral. It is known for its nearly four-degree lean, the result of an unstable foundation. The tower is one of three structures in the Pisa's Cathedral Square (Piazza de..." },
    { id: 2, title: "Spain, Sagrada Família", year: 1882, category: "Europe", img: "img/tour/Spain_Sagrada_Famillia.png", desc: "The Basílica i Temple Expiatori de la Sagrada Família, otherwise known as Sagrada Família, is a church under construction in the Eixample district of Barcelona, Catalonia, Spain. It is the largest unfinished Catholic church in the world. Designed by Catalan architect Antoni Gaudí (1852–1926), in 20..." },
    { id: 3, title: "US, Fallingwater", year: 1935, category: "America", img: "img/tour/US_FallingWater.png", desc: "Fallingwater is a house designed by the architect Frank Lloyd Wright in 1935. Situated in the Mill Run section of Stewart township, in the Laurel Highlands of southwest Pennsylvania, about 70 miles (110 km) southeast of Pittsburgh in the United States, it is built partly over a waterfall on the Bear Run river. T..." },
    { id: 4, title: "Russia, Saint Basil's Cathedral", year: 1561, category: "Asia", img: "img/tour/Russia_Saint_Basil's_Cathedral.png", desc: "The Cathedral of Vasily the Blessed (Russian: Собор Василия Блаженного, romanized: Sobor Vasiliya Blazhennogo), known in English as Saint Basil's Cathedral, is an Orthodox church in Red Square of Moscow, and is one of the most popular cultural symbols of Russia." },
  ];

  const filteredCards = cards.filter(
    (card) =>
      (selectedCategory === "All" || card.category === selectedCategory) &&
      card.year <= selectedYear
  );

  return (
    <FilterCardSection>
      <Title>Duis tincidunt ut ligula vitae mollis.</Title>
      <FilterSection>
        <FilterContainer>
          {["All", "Asia", "Europe", "America", "Oceania"].map((category) => (
            <FilterButton key={category} active={selectedCategory === category} onClick={() => setSelectedCategory(category)}>
              {category}
            </FilterButton>
          ))}
        </FilterContainer>

        <YearFilterContainer>
          <YearFilterTrack progress={progress} />
          {yearOptions.map((year) => (<YearFilterButton key={year} active={selectedYear >= year} onClick={() => setSelectedYear(year)}>
            {year}
          </YearFilterButton>
          ))}
        </YearFilterContainer>
      </FilterSection>

      <CardList>
        {filteredCards.map((card) => (
          <Card key={card.id}>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardYear>{card.year}</CardYear>
            </CardHeader>
            <CardImage src={card.img} alt={card.title} />
            <CardDescription>{card.desc}</CardDescription>
          </Card>
        ))}
      </CardList>
    </FilterCardSection>
  );
}
