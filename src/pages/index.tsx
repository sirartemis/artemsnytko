import page from "@/HOC/page";
import pageSection from "@/HOC/pageSection";
import { styled } from "@mui/material/styles";
import { tools } from "@/mock/components/tools-and-software";
import { color } from "@/styles/colors";
import Image from "next/image";

const StyledTitle = styled("div")(({ theme }) => ({
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-evenly",
  alignItems: "center",
  padding: "40px",
  paddingTop: "60px",
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

const Header = styled("h1")(({ theme }) => ({
  overflowWrap: "anywhere",
  padding: "0.5rem",

  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },

  [theme.breakpoints.up("sm")]: {
    fontSize: "3rem",
  },
}));

const Subheader = styled("p")(({ theme }) => ({
  fontSize: "2rem",
  padding: "0.5rem",
  color: theme.palette.text.secondary,
}));

const Info = styled("div")(() => ({
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

const ToolsList = styled("ul")(() => ({
  listStyleType: "none",
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: "20px",
  padding: "10px 20px",
}));

const Tool = styled("li")(({ theme }) => ({
  padding: "10px",
  color:
    theme.palette.mode === "light"
      ? theme.palette.text.primary
      : theme.palette.text.secondary,
  fontSize: "2rem",
}));

const Head = styled("h1")(() => ({
  padding: "40px",
  fontSize: "3rem",
}));

const Wrapper = styled("div")(() => ({
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "40px 0",
}));

function ToolsWithoutAnimation() {
  return (
    <Wrapper>
      <Head>Tools and Software</Head>
      <ToolsList>
        {tools.map((tool) => (
          <Tool key={tool}>{tool}</Tool>
        ))}
      </ToolsList>
    </Wrapper>
  );
}

const Tools = pageSection(ToolsWithoutAnimation);

function TitleWithoutAnimation() {
  return (
    <StyledTitle>
      <ImageWrapper>
        <Image src="/me.jpg" width={350} height={450} alt="" />
      </ImageWrapper>
      <Info>
        <Header>Artem Snytko</Header>
        <Subheader>Full Stack Engineer</Subheader>
        <Description>
          I am developing in creating productive and scalable applications on{" "}
          <NodejsStyle>Nodejs</NodejsStyle>
        </Description>
      </Info>
    </StyledTitle>
  );
}

const Title = pageSection(TitleWithoutAnimation);

function Home() {
  return (
    <>
      <Title />
      <Tools />
    </>
  );
}

export default page(Home);
