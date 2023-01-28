import Image from "next/image";
import { styled } from "@mui/material";
import Link from "next/link";

const StyledAvatar = styled("div")(() => ({
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "30px",
  height: "30px",
  overflow: "hidden",
}));

const StyledImage = styled(Image)`
  padding-bottom: 0;
`;

export default function Avatar() {
  return (
    <Link href="/">
      <StyledAvatar>
        <StyledImage
          src="/avatar.jpg"
          width={30}
          height={50}
          alt=""
          quality={100}
        />
      </StyledAvatar>
    </Link>
  );
}
