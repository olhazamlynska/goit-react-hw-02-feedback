export const FeedbackList = ({ title, types, onChangeFeedback }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {types.map(type => {
          return (
            <li key={type}>
              <button type="button" onClick={() => onChangeFeedback(type)}>
                {type}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
