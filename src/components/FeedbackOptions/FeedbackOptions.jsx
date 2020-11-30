import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(({ id, label }) => {
        return (
          <button
            key={id}
            type="button"
            onClick={() => {
              onLeaveFeedback(label);
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
