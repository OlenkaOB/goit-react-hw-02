import s from "./Feedback.module.css";

const Feedback = () => {
  return (
    <ul className={s.listFeedback}>
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

export default Feedback;
