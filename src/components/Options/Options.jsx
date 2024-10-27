import s from "./Options.module.css";

const Option = () => {
  return (
    <ul className={s.listOption}>
      <li>
        <button>Good</button>
      </li>
      <li>
        <button>Neutral</button>
      </li>
      <li>
        <button>Bad</button>
      </li>
      <li>
        <button>Reset</button>
      </li>
    </ul>
  );
};

export default Option;
