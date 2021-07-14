import { useEffect, useState } from 'react';
import './address.css';
import { AddAddress } from '../../components/address/AddAddress';
import { getAddress } from '../../services/address';
import { AddressCard } from '../../components/address/AddressCard';
import { useProductContext } from '../../context/ProductContext';
import { useNavigate } from 'react-router';

export const CheckOutAddress = () => {
  const [addresses, setAddresses] = useState([]);
  const { setToastText, setToastShow } = useProductContext();
  const navigate = useNavigate();

  const clickHandler = () => {
    setToastShow(true);
    setToastText('Order has been placed');
    navigate('/');
  };

  useEffect(async () => {
    const response = await getAddress();
    setAddresses(response.address);
  }, []);

  return (
    <div className="address-page">
      <h1>Select your address</h1>

      <button className="add-address-button">Add new address</button>

      <div>
        {addresses &&
          addresses.map((address) => {
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
