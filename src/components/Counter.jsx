import { connect } from 'react-redux';
import * as actions from '../redux/counter/counter-actions';
import Value from './Value';
import Controls from './Controls';
const Counter = ({ value, step, onIncrement, onDecrement }) => {
  return (
    <div>
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
};
const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: value => dispatch(actions.increment(value)),
  onDecrement: value => dispatch(actions.decrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
