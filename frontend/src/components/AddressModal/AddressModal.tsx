import React, { FormEvent, useContext, useEffect, useState } from 'react';
import cn from 'classnames';
import './AddressModal.scss';

import { updateUserAddress } from '../../api/user';
import { Address } from '../../types/User';
import { AuthContext } from '../../context/AuthContext';
import { Loader } from '../Loader';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import { LocationField } from '../LocationField/LocationField';
import { WarehouseField } from '../WarehouseField/WarehouseField';
import { getCities } from '../../api/novaPost';
import { validatePhone } from '../../helpers/validateFormFields';

interface Props {
  onClose: (value: boolean) => void;
}

export interface Location {
  city: string;
  cityRef: string;
}

const AddressModal: React.FC<Props> = React.memo(({ onClose }) => {
  const { setAuthUser, authUser } = useContext(AuthContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState<Location>({
    city: '',
    cityRef: ''
  });
  const [warehouse, setWarehouse] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    if (authUser?.phone_number) {
      setPhone(authUser.phone_number);
    }

    if (authUser?.city) {
      const city = authUser.city.split(',')[0];
      const area = authUser.city.split(',')[1].slice(1);
      let cityRef = '';

      getCities(city)
        .then((resp) => resp.json())
        .then((data) => {
          cityRef = data.data.find((c: any) => c.AreaDescription === area).Ref;
          setLocation({ city: authUser.city, cityRef });
        })
        .catch((e) => {
          console.log(e);
        });
    }

    if (authUser?.nova_post_department) {
      setWarehouse(authUser.nova_post_department);
    }
  }, [authUser]);

  const handleSubmitAddress = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errorMessage = validatePhone(phone);
    setIsSubmitting(true);

    if (errorMessage) {
      setError(errorMessage);
      setIsSubmitting(false);
      return;
    }

    const address: Address = {
      city: location.city,
      nova_post_department: warehouse,
      phone_number: phone
    };

    updateUserAddress(address)
      .then(() => {
        if (authUser) {
          const updatedUser = {
            ...authUser,
            city: location.city,
            nova_post_department: warehouse,
            phone_number: phone
          };
          setAuthUser(updatedUser);
          onClose(false);
        }
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="AddressModal">
      <div className="AddressModal__header">
        <h2 className="AddressModal__title">Add address</h2>
        <button
          type="button"
          className="AddressModal__button"
          onClick={() => onClose(false)}
        >
          <div className="icon icon--close" />
        </button>
      </div>

      <form
        onSubmit={handleSubmitAddress}
        className="Form AccountDetailsPage__form"
      >
        <div className="Form__container">
          <input
            type="tel"
            name="phone_number"
            placeholder={authUser?.phone_number || 'Add Phone'}
            className={cn('Form__field', {
              'is-error': error.length
            })}
            onChange={(e) => setPhone(e.target.value)}
            onBlur={() => {}}
            value={phone}
          />
          {error && <div className="Form__error-message">{error}</div>}
        </div>

        <div className="Form__container">
          <LocationField
            setLocation={setLocation}
            location={location}
            setWarehouse={setWarehouse}
          />
        </div>

        <div className="Form__container">
          <WarehouseField
            cityRef={location.cityRef}
            setWarehouse={setWarehouse}
            warehouse={warehouse}
          />
        </div>

        <button type="submit" disabled={isSubmitting} className="Form__button">
          {isSubmitting ? <Loader /> : 'add address'}
        </button>
      </form>
    </div>
  );
});

export default ModalWrapper(AddressModal);
