import { useState } from 'react';
import './addAddress.css';
import { addAddress } from '../../services/address';

export const AddAddress = () => {
  const [address, setAddress] = useState({});

  const inputHandler = (e) => {
    address[e.target.id] = e.target.value;
    setAddress(address);
    console.log(address);
  };

  const clickHandler = async () => {
    const data = await addAddress({ address });
    console.log(data);
  };

  return (
    <div className="address-page">
      <div className="address-box">
        <h1>Add a new address</h1>
        <div className="address-content">
          <label for="name">Name </label>
          <input
            className="input-address-field"
            type="text"
            id="name"
            onChange={inputHandler}
          />

          <label for="mobile">Mobile Number </label>
          <input
            className="input-address-field"
            type="number"
            placeholder="10-digit mobile number"
            id="mobile"
            onChange={inputHandler}
          />

          <label for="pin">PIN code </label>
          <input
            className="input-address-field"
            type="number"
            placeholder="6 digit"
            id="pin"
            onChange={inputHandler}
          />

          <label for="flat">Flat/House no</label>
          <input
            className="input-address-field"
            type="text"
            id="flat"
            onChange={inputHandler}
          />

          <label for="area">Area/Colony </label>
          <input
            className="input-address-field"
            type="text"
            id="area"
            onChange={inputHandler}
          />

          <label for="city">Town/City </label>
          <input
            className="input-address-field"
            type="text"
            id="city"
            onChange={inputHandler}
          />

          <label for="state">State</label>
          <input
            className="input-address-field"
            type="text"
            id="state"
            onChange={inputHandler}
          />

          <label for="country">Country </label>
          <input
            className="input-address-field"
            type="text"
            id="country"
            onChange={inputHandler}
          />

          <button className="primary-button" onClick={clickHandler}>
            Add Address
          </button>
        </div>
      </div>
    </div>
  );
};
