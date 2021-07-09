import { removeAddress } from '../../services/address';
import './addressCard.css';

export const AddressCard = ({ address }) => {
  const removeHandler = async () => {
    const id = address._id;
    const response = await removeAddress({ id });
    console.log(response);
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
