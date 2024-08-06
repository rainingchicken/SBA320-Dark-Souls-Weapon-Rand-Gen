import { FormEvent } from "react";

interface IData {
  onGetData: Function;
}

const Form = ({ onGetData }: IData) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onGetData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="RandomGenButton" type="submit" value="Get Random Weapon" />
      </form>
    </div>
  );
};

export default Form;
