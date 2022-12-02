export const Statistics = ({
  title,
  types,
  totalFeedback,
  positivePercentage,
}) => {
  const { good, neutral, bad } = types;

  return (
    <>
      <h2>{title}</h2>
      <ul>
        <li>
          Good:
          <span>{good}</span>
        </li>
        <li>
          Neutral:
          <span>{neutral}</span>
        </li>
        <li>
          Bad:
          <span>{bad}</span>
        </li>
        <li>
          Total:
          <span>{totalFeedback}</span>
        </li>
        <li>
          Positive feedback:
          <span>{positivePercentage}%</span>
        </li>
      </ul>
    </>
  );
};
