import PropTypes from 'prop-types';
import {
  StatisticsItem,
  StatisticsList,
  StatisticsSpan,
} from 'components/Statistics/Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticsList>
        <StatisticsItem>
          <StatisticsSpan> Good:</StatisticsSpan>

          <StatisticsSpan>{good}</StatisticsSpan>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsSpan> Neutral:</StatisticsSpan>

          <StatisticsSpan>{neutral}</StatisticsSpan>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsSpan> Bad:</StatisticsSpan>

          <StatisticsSpan>{bad}</StatisticsSpan>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsSpan> Total:</StatisticsSpan>
          <StatisticsSpan>{total}</StatisticsSpan>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsSpan> Positive feedback:</StatisticsSpan>
          <StatisticsSpan>{positivePercentage}%</StatisticsSpan>
        </StatisticsItem>
      </StatisticsList>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
