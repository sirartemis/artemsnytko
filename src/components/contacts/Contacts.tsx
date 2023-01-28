import { styled } from "@mui/material/styles";
import Image from "next/image";

const StyledWrapper = styled("div")(() => ({
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
  padding: "20px",
}));

export default function Contacts() {
  return (
    <StyledWrapper>
      <a href="https://github.com/sirartemis">
        <Image src="/github.svg" alt="" width={30} height={30} />
      </a>
      <a href="https://www.linkedin.com/in/artem-snytko/">
        <Image src="/linkedin.svg" alt="" width={30} height={30} />
      </a>
      <a href="https://t.me/sirArtemis91">
        <Image src="/telegram.svg" alt="" width={30} height={30} />
      </a>
      <a href="mailto:sirartemis91@gmail.com">
        <Image src="/email.svg" alt="" width={30} height={30} />
      </a>
    </StyledWrapper>
  );
}
