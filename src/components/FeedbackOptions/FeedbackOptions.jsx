import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul>
        {options.map(option => {
          return (
            <li key={option}>
              <button type="button" onClick={() => onLeaveFeedback(option)}>
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.node.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
