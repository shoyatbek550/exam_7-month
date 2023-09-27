import Intro from "../components/Intro/intro";
import Statistics from "../components/Statistics/Statistics";
import Mobile from "../components/Mobile/Mobile";
import Restorant from "../components/Restorant/Restorant";
import Purchase from "../components/Purchase/Purchase";
import Discount from "../components/Discount/Discount";

export default function Home() {
  return (
    <main>
      <Intro />
      <Statistics />
      <Mobile/>
      <Restorant/>
      <Purchase/>
      <Discount/>
    </main>
  );
}
