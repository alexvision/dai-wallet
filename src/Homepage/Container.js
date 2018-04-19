// Vendor
import { connect } from "react-redux";

// Internal
import Homepage from "./Homepage";

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Homepage);
