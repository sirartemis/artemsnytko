import pageSection from "@/HOC/pageSection";
import { styled } from "@mui/material/styles";
import { color } from "@/styles/colors";
import Image from "next/image";

const StyledTitle = styled("div")(({ theme }) => ({
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-evenly",
  alignItems: "center",
  padding: "2rem",
  gap: "2rem",
  [theme.breakpoints.up("lg")]: {
    padding: "10rem",
  },
}));

const ImageWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "15%",
  overflow: "hidden",
  width: "350px",
  height: "350px",
  [theme.breakpoints.down("sm")]: {
    width: "250px",
    height: "250px",
  },
}));

const StyledHeader = styled("h1")(({ theme }) => ({
  overflowWrap: "anywhere",
  padding: "0.5rem",

  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },

  [theme.breakpoints.up("sm")]: {
    fontSize: "3rem",
  },
}));

const StyledSubHeader = styled("p")(({ theme }) => ({
  fontSize: "2rem",
  padding: "0.5rem",
  color: theme.palette.text.secondary,
}));

const StyledInfo = styled("div")(() => ({
  height: "350px",
  width: "350px",
}));

const Description = styled("p")(() => ({
  fontSize: "1.5rem",
  padding: "2.5rem 0.5rem",
  maxWidth: "440px",
}));

const NodejsStyle = styled("span")(() => ({
  color: color.node,
}));

const ChevronWrapper = styled("div")(() => ({
  width: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

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
      <ChevronWrapper></ChevronWrapper>
    </StyledTitle>
  );
}

export default pageSection(HomeTitle);
