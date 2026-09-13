import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Players from "./components/players/Players";
import type { IPlayer } from "./types/playerType";

const playersFetch = async (): Promise<IPlayer[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

// console.log(fetchPromise);

function App() {
  // const playersPromise = playersFetch();  
  // Preventing every loading or data fetching every time during rendering
  const [playersPromise] = useState(() => playersFetch());

  const [coin, setCoin] = useState(3000);

  return (
    <>
      <Nav coin={coin} />
      <Banner coin = {coin} setCoin={setCoin}/>
      <Suspense fallback={<h2>Loading....</h2>}>
        <Players
          playersPromise={playersPromise}
          coin={coin}
          setCoin={setCoin}
        />
      </Suspense>
    </>
  );
}

export default App;
