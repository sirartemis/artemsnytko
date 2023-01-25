import { useTheme, styled } from "@mui/material/styles";
import Image from "next/image";

const StyledWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  padding: "20px",
}));

export default function Contacts() {
  const theme = useTheme();

  return (
    <StyledWrapper>
      <Image src="/github.svg" alt="" width={20} height={20} />
      <Image src="/linkedin.svg" alt="" width={20} height={20} />
      <Image src="/telegram.svg" alt="" width={20} height={20} />
      <Image src="/email.svg" alt="" width={20} height={20} />
    </StyledWrapper>
  );
}
