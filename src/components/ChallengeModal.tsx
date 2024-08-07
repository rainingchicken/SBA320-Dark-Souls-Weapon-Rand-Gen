import { forwardRef, useImperativeHandle, useState } from "react";
import { IRequirements } from "../Interface";

const ChallengeModal = (props: IRequirements, ref: any) => {
  const [modalState, setModalState] = useState(false);
  useImperativeHandle(ref, () => ({
    openModal: () => setModalState(true),
  }));

  if (!modalState) return null;

  const handleClick = () => {
    setModalState(false);
  };

  const build = (min: number, max: number) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };
  return (
    <div>
      <h3>This build should not exceed</h3>
      <h4>Vitality : {build(8, 50)}</h4>
      <h4>Attunement : {build(8, 50)}</h4>
      <h4>Endurance : {build(8, 40)}</h4>
      <h4>Strength : {build(props.strength, 40)}</h4>
      <h4>Dexterity : {build(props.dexterity, 45)}</h4>
      <h4>Resistence : {build(8, 30)}</h4>
      <h4>Intelligence : {build(props.intelligence, 50)}</h4>
      <h4>Faith : {build(props.faith, 50)}</h4>
      <button onClick={handleClick}>Nope</button>
    </div>
  );
};

export default forwardRef(ChallengeModal);
