import PropTypes from 'prop-types';

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

FeedbackList.propTypes = {
  title: PropTypes.string.isRequired,
  types: PropTypes.node.isRequired,
  onChangeFeedback: PropTypes.func.isRequired,
};
