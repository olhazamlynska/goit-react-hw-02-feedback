import PropTypes from 'prop-types';

export const Statistics = ({
  title,
  types: { good, neutral, bad },
  totalFeedback,
  positivePercentage,
}) => {
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

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  types: PropTypes.shape(
    PropTypes.exact({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }).isRequired
  ),
  totalFeedback: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
