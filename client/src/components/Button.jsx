import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ name, path, className }) {
  return (
    <Link to={path} className={className}>
      {name}
    </Link>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
