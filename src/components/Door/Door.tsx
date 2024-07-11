import {useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import './Door.css';

const Door = () => {
  const doorValue = useSelector((state: RootState) => state.door);
  return (
    <div className='door'>
      <div className='door-pass'>

      </div>
      {doorValue.symbol.map((symbol) => (
        <button key={symbol}>{symbol}</button>
      ))}
    </div>
  );
};

export default Door;