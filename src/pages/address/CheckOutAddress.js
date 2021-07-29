import './address.css';
import { AddressCard } from '../../components/address/AddressCard';
import { useProductContext } from '../../context/ProductContext';
import { useNavigate } from 'react-router';
import { useHomeContext } from '../../context/HomeContext';

export const CheckOutAddress = () => {
  const { setToastText, setToastShow } = useProductContext();
  const { state } = useHomeContext();
  const navigate = useNavigate();

  const clickHandler = () => {
    setToastShow(true);
    setToastText('Order has been placed');
    navigate('/');
  };

  return (
    <div className="address-page">
      <h1>Select your address</h1>

      <button className="add-address-button">Add new address</button>

      <div>
        {state.address &&
          state.address.map((address) => {
            return (
              <>
                <button className="card-button" onClick={clickHandler}>
                  <AddressCard address={address} />
                </button>
              </>
            );
          })}
      </div>
    </div>
  );
};
