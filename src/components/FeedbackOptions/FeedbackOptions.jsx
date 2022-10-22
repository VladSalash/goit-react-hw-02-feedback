
import PropTypes from "prop-types";
import { Button } from './FeedbackOptions.styled';


const FeedbackOptions = ({ options, onLeaveFeedback }) => {

  return options.map(button => {
    return (
      <Button
        key={button}
        name={button}
      type="button"
      onClick={onLeaveFeedback}>
      {button}
    </Button>
    )


});



};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;

