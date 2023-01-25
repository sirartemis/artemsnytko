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
      <Image src="/github.svg" alt="" width={30} height={30} />
      <Image src="/linkedin.svg" alt="" width={30} height={30} />
      <Image src="/telegram.svg" alt="" width={30} height={30} />
      <Image src="/email.svg" alt="" width={30} height={30} />
    </StyledWrapper>
  );
}
