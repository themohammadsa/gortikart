import { useEffect, useState } from 'react';
import './address.css';
import { AddAddress } from '../../components/address/AddAddress';
import { getAddress } from '../../services/address';
import { AddressCard } from '../../components/address/AddressCard';
import { address } from 'faker';

export const Address = () => {
  const [addresses, setAddresses] = useState([]);

  useEffect(async () => {
    const response = await getAddress();
    setAddresses(response.address);
  }, []);

  return (
    <div className="address-page">
      <div>
        <AddAddress />
      </div>
      <h2>Your addresses</h2>
      <div>
        {addresses &&
          addresses.map((address) => {
            return (
              <>
                <AddressCard address={address} />
              </>
            );
          })}
      </div>
    </div>
  );
};
