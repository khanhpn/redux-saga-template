import { connect } from 'react-redux';
import Counter from '../counter';
import { add } from '../actions';

const mapStateToProps = (state) => {
   return {
      value1: state,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      addValueA: () => dispatch(add())
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
