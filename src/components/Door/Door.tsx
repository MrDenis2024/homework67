import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import {add, del, entry, reset} from './doorSlice';
import './Door.css';

const Door = () => {
  const doorValue = useSelector((state: RootState) => state.door);
  const dispatch = useDispatch();

  const btnClick = (value: string) => {
    if (value === '<') {
      dispatch(del());
    } else if (value === 'E') {
      dispatch(entry());
    } else {
      dispatch(add(value));
    }
  };

  return (
    <div className='door'>
      <div className='door-pass' style={{backgroundColor: doorValue.bgColor}}>
        {doorValue.message ? (
          <>{doorValue.message}</>
        ) : (
          <>{doorValue.password.replace(/./g, '*')}</>
        )}
      </div>
      {doorValue.symbol.map((symbol) => (
        <button key={symbol} onClick={() => btnClick(symbol)}>{symbol}</button>
      ))}
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Door;