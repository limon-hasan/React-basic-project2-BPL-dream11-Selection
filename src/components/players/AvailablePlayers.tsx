import type { Dispatch, SetStateAction } from "react";
import type { IPlayer } from "../../types/playerType";
import PlayerCard from "./PlayerCard";

interface IAvailablePlayersProps {
  players: IPlayer[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: IPlayer[];
  setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
}

const AvailablePlayers = ({
  players,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}: IAvailablePlayersProps) => {
  // console.log(coin, setCoin, "from Availabe players");
  return (
    <div className="grid grid-cols-3 gap-7 mt-6">
      {players.map((player: IPlayer, index: number) => {
        return (
          <PlayerCard
            key={index}
            player={player}
            coin={coin}
            setCoin={setCoin}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        );
      })}
    </div>
  );
};

export default AvailablePlayers;