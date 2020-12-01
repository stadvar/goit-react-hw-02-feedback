import PropTypes from 'prop-types';
import './Statistics.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <ul className="list">
        <li className="item">
          <span>Good:</span>
          <span>{good}</span>
        </li>
        <li className="item">
          <span>Neutral:</span>
          <span>{neutral}</span>
        </li>
        <li className="item">
          <span>Bad:</span>
          <span>{bad}</span>
        </li>
        <li className="item">
          <span>Total:</span>
          <span>{total}</span>
        </li>
        <li className="item">
          <span>Positive feedback:</span>
          <span>{positivePercentage}%</span>
        </li>
      </ul>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
