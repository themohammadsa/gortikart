import './addressCard.css';
import { useHomeContext } from '../../context/HomeContext';

export const AddressCard = ({ address }) => {
  const { dispatch } = useHomeContext();

  const removeHandler = () => {
    dispatch({ type: 'REMOVE_ADDRESS', payload: { address } });
  };

  return (
    <div className="address-card">
      <button className="button-remove" onClick={removeHandler}>
        ×
      </button>
      <p>
        <strong>{address.name}</strong>
      </p>
      <p>{address.flat}</p>
      <p>{address.area}</p>
      <p>{address.city} </p>
      <p>
        {address.state} - {address.pin}
      </p>
      <p>{address.country}</p>
      <p>Phone Number - {address.mobile}</p>
    </div>
  );
};
