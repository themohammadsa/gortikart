import './address.css';
import { AddAddress } from '../../components/address/AddAddress';
import { AddressCard } from '../../components/address/AddressCard';
import { useHomeContext } from '../../context/HomeContext';

export const Address = () => {
  const { state } = useHomeContext();

  return (
    <div className="address-page">
      <div>
        <AddAddress />
      </div>
      <h2>Your addresses</h2>
      <div>
        {state.address &&
          state.address.map((address) => {
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
