import type { Dispatch, SetStateAction } from "react";
import type { IPlayer } from "../../types/playerType";
import { TbTrash } from "react-icons/tb";

interface ISelectedPlayerCardProps {
  player: IPlayer;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: IPlayer[];
  setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
}

const SelectedPlayerCard = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
  player,
}: ISelectedPlayerCardProps) => {
  const handleRemovePlayer = (singlePlayer: IPlayer) => {
    const restPlayers = selectedPlayers.filter(
      (singlePlayer) => singlePlayer.playerName != player.playerName,
    );
    console.log(restPlayers, "rest players");
    setSelectedPlayers(restPlayers);

    setCoin(coin + singlePlayer.price);
    console.log(coin);
  };

  return (
    <div className="flex gap-2 justufy-between items-center border-2 border-gray-200 rounded-3xl py-2 px-4">
      <div className="flex gap-2">
        <img src={player.playerImg} alt="" className="h-[60px] w-[40px]" />
      </div>
      <div>
        <h2 className="font-bold text-2xl">{player.playerName}</h2>
        <p>{player.playerType}</p>
      </div>
      <span
        className="text-red-500 font-bold cursor-pointer"
        onClick={() => handleRemovePlayer(player)}
      >
        <TbTrash />
      </span>
    </div>
  );
};

export default SelectedPlayerCard;
