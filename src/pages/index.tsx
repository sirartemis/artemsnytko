import { HomeTitle } from "@/components/home-title";
import page from "@/HOC/page";

function Home() {
  return (
    <>
      <HomeTitle />
      <HomeTitle />
      <HomeTitle />
      <HomeTitle />
      <HomeTitle />
    </>
  );
}

export default page(Home);
