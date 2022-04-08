import {useState} from 'react'
import styled from 'styled-components'
import {Deals} from "../../data"

const Container = styled.div`
  width: 100%;
  
`;

const Arrow = styled.div`
  /* width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0; */
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  /* margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  */
`; 

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
   display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 2px;
        overflow: hidden;
        /* margin-left: 30px; */
        height: 100%;
        margin-left: 50px;
`;

const ImgContainer = styled.div`
  /* height: 100%;
  flex: 1; */
`;

const Image = styled.img`
  /* height: 80%; */
`;

const InfoContainer = styled.div`
  margin: 10px;
          margin-left: 30px;
          /* display: flex; */
          /* flex-direction: column; */
          /* align-items: center; */
          width: 230px;
          height: 230px;
          background-color: hsla(0, 0%, 93.3%, 0.9);
          border-radius: 5px;
          overflow: hidden;
`;

const Title = styled.h1`
  font-size: 24px;
            font-weight: 500;
            color: black;
            margin-top: 20px;
            margin-left: 15px;
`;

const Desc = styled.p`
  margin: 10px 20px;
            font-size: 12px;
            font-weight: 400;
            color: black;
`;
const Num = styled.h2`
     font-family: "Times New Roman", Times, serif;
            font-size: 20px;
            margin-left: 30px;
            color: gray;
`



const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    };


  return (
    <Container>
      <Wrapper slideIndex = {slideIndex}>
        {Deals.map((item) => (
          <Slide key={item.id}>
            <InfoContainer>
              <Num>{item.num}</Num>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Slider