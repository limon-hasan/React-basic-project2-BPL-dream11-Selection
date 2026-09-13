import type { Dispatch, SetStateAction } from "react";
import { type IPlayer } from "../../types/playerType";
import SelectedPlayerCard from "./SelectedPlayerCard";

interface ISelectedPlayerProps {
  selectedPlayers: IPlayer[];
  setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}
const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}: ISelectedPlayerProps) => {
  console.log(selectedPlayers, "from selec compoo");
if (selectedPlayers.length === 0) {
  return (
    <h2 className="text-center font-bold text-3xl mt-10 text-red-500">
      No players selected yet!
    </h2>
  );
}
  return (
    <div className="grid grid-cols-1 gap-7 mt-6">
      {selectedPlayers.map((player: IPlayer, index: number) => {
        return (
          <SelectedPlayerCard
            coin={coin}
            setCoin={setCoin}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            player={player}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default SelectedPlayers;
