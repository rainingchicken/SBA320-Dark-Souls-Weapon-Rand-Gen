import { useRef } from "react";
import ChallengeModal from "./ChallengeModal";
import { IWeaponData } from "../Interface";
interface IData {
  data: Array<IWeaponData>;
}

const Display = ({ data }: IData) => {
  const loaded = () => {
    const max = data.length;
    const randomNum = Math.floor(Math.random() * max);

    const weaponName = data[randomNum].name;
    const weaponType = data[randomNum].weapon_type;
    const attackType = data[randomNum].attack_type;

    const weaponStrength = data[randomNum].requirements.strength;
    const weaponDex = data[randomNum].requirements.dexterity;
    const weaponInt = data[randomNum].requirements.intelligence;
    const weaponFaith = data[randomNum].requirements.faith;

    const modalRef = useRef<HTMLDivElement>(null);

    const handleOpenModal = () => {
      modalRef.current.openModal();
    };

    return (
      <>
        <h2 id="weaponName">{weaponName}</h2>
        <h3>
          {weaponType} | {attackType}{" "}
        </h3>
        <h4>
          <u>Requirements</u>
        </h4>
        <h4>strength : {weaponStrength}</h4>
        <h4>dexterity : {weaponDex}</h4>
        <h4>intelligence : {weaponInt}</h4>
        <h4>faith : {weaponFaith}</h4>

        <button onClick={handleOpenModal} type="button">
          EXTRA CHALLENGE
        </button>
        <ChallengeModal
          strength={weaponStrength}
          dexterity={weaponDex}
          intelligence={weaponInt}
          faith={weaponFaith}
          ref={modalRef}
        />
      </>
    );
  };
  const loading = () => {
    <h2>Loading...</h2>;
  };

  return data ? loaded() : loading();
};

export default Display;
