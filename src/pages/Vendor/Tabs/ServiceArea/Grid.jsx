import React from 'react';
import {pars_address} from '../../../../helpers/common'
import IconMap from '../../../../components/Icons/Map'
import CancelButton from '../../../../components/common/TransButton';

const handleClick = () => {
  alert('clicked on edit');
};

const Grid = ({data}) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {data && data.length>0 && data.map(({ _id, ...item }) => (
          <div key={_id}>
            <div
              htmlFor={`address-${_id}`}
              className={`block transition duration-300 ease-in-out transform p-2`}
            >
              <div className='flex gap-2'>
              <IconMap />
              {pars_address(item.address)}
              </div>

            </div>
          </div>
        ))}
      </div>
      <div className='mt-5'>
      <CancelButton labelText={'Edit'} onClick={handleClick} />
      </div>
    </>
  );
};

export default Grid;