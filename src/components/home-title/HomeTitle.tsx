import pageSection from "@/HOC/pageSection";
import styled from "@emotion/styled";
import Image from "next/image";

const StyledTitle = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  padding: 2rem;
  gap: 2rem;

  @media screen and (min-width: 1200px) {
    justify-content: flex-start;
    gap: 4rem;
    padding: 10rem;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15%;
  overflow: hidden;
  width: 350px;
  height: 350px;
`;

const StyledHeader = styled.h1`
  overflow-wrap: anywhere;
  padding: 0.5rem;

  @media screen and (max-width: 600px) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 600px) {
    font-size: 3rem;
  }
`;

const StyledSubHeader = styled.p`
  font-size: 2rem;
  padding: 0.5rem;
  color: #b0a40a;
`;

const StyledInfo = styled.div`
  height: 350px;
  width: 350px;
`;

const Description = styled.p`
  font-size: 1.5rem;
  padding: 2.5rem 0.5rem;
  max-width: 440px;
`;

const NodejsStyle = styled.span`
  color: #3c873a;
`;

function HomeTitle() {
  return (
    <StyledTitle>
      <ImageWrapper>
        <Image src="/me.jpg" width={350} height={450} alt="" />
      </ImageWrapper>
      <StyledInfo>
        <StyledHeader>Artem Snytko</StyledHeader>
        <StyledSubHeader>Full Stack Engineer</StyledSubHeader>
        <Description>
          I am developing in creating productive and scalable applications on{" "}
          <NodejsStyle>Nodejs</NodejsStyle>
        </Description>
      </StyledInfo>
    </StyledTitle>
  );
}

export default pageSection(HomeTitle);
