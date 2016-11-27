import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import * as actionCreators from './NewsDucks';

// Components
import Search from 'components/presentational/Search';

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

const mapStateToProps = (state) => ({
  inputValue: state.search.inputValue,
  errorMessage: state.search.errorMessage
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
