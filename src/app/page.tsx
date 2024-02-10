import Banner from "@/components/Banner";
import Challenges from "@/components/Challenges";
import TechServices from "@/components/TechServices";
import Organizations from "@/components/Organizations";
import Reviews from "@/components/Reviews";
import Success from "@/components/Success";
import Crew from "@/components/Crew";
import GetStarted from "@/components/GetStarted";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1488px]">
      <Banner/>
      <Challenges/>
      <TechServices/>
      <Organizations/>
      <Reviews/>
      <Success/>
      <Crew/>
      <GetStarted/>
    </main>
  );
}
