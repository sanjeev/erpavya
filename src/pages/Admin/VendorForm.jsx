import React, { useState, useEffect } from 'react';
import SubmitButton from '../../components/common/SubmitButton';
import SearchAddress from '../../components/form/SearchAddress';

import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { get } from '../../helpers/api';

const VendorForm = ({ initialValues, onSubmit, action }) => {
  const [selectedAddress, setSelectedAddress] = useState([]); // State to store the selected address
  const [selectedAddressesArray, setSelectedAddressesArray] = useState([]); // State to store an array of selected addresses

  // Handle when an address is selected
  const handleAddressSelect = (selectedOption) => {
    setSelectedAddress(selectedOption);
    
    if(selectedOption !== null) {
      setSelectedAddressesArray([...selectedAddressesArray, selectedOption]);
    }
  };

  let rules = {
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required'),
    phone: Yup.string().required('Phone is required')
  };

  //console.log(selectedAddress);

  const validationSchema = Yup.object(rules);

  return (
   
    <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue }) => (
      <Form className='p-6.5'>

        <div className='gap-5.5 mb-4'>
          <SearchAddress 
          //onOptionSelect={(selectedOption) => setSelectedAddress(selectedOption)} // Pass the callback function 
          onOptionSelect={handleAddressSelect} // Pass the callback function
          />
        </div>

        {/* Display the selected addresses in a table */}
        <div className='gap-5.5 mb-4'>
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Address
                </th>
              </tr>
            </thead>
            <tbody>
              {selectedAddressesArray.map((address, index) => (
                <tr key={index}>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <input type="checkbox" value={address.value} name="address_id" id="address_id" />
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">{address.label}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        <div className='flex gap-5.5 mb-4'>
          <SubmitButton labelText={action} />
        </div>
        

        </Form>
      )}
      </Formik>
        
  );
};

export default VendorForm;