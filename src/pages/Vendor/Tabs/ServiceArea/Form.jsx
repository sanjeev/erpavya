import React, { useState, useEffect } from 'react';
import SubmitButton from '../../../../components/common/SubmitButton';
import ResetButton from '../../../../components/common/ResetButton';
import InputText from '../../../../components/form/InputText';
import InputNumber from '../../../../components/form/InputNumber';
import TextArea from '../../../../components/form/TextArea';
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useCookies } from 'react-cookie';
import { get } from '../../../../helpers/api';
import CONFIG from '../../const';
import SearchAddress from '../../../../components/form/SearchAddress';
import ToggleSwitch from '../../../../components/form/ToggleSwitch';

const MyForm = ({ initialValues, onSubmit, action }) => {
  const [loading, setLoading] = useState(true);
  const [cookies] = useCookies('token');

  const [selectedAddress, setSelectedAddress] = useState([]); // State to store the selected address

  // Handle when an address is selected
  const handleAddressSelect = (selectedOption) => {
    setSelectedAddress(selectedOption);
    
    if(selectedOption!=null && selectedOption.full_address) {
      initialValues.locality = `${selectedOption.full_address.officeName}${', '}${selectedOption.full_address.taluk}`;
      initialValues.pincode = selectedOption.full_address.pincode;
      initialValues.city = selectedOption.full_address.districtName;
      initialValues.state = selectedOption.full_address.stateName;
    }
  };

  const validationSchema = Yup.object({
    locality: Yup.string().required('Locality is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    pincode: Yup.string().matches(/^\d{6}$/, 'Invalid pincode format'),
    delivery_cost: Yup.number()
    .integer('Price must be an integer')
    .min(0, 'Price must be a positive integer')
    .required('Price is required')
  });

  return (
   
    <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
      <Form>
       
       {action=='Create' ? (
       <div className='gap-5.5 mb-4'>
          <SearchAddress 
          //onOptionSelect={(selectedOption) => setSelectedAddress(selectedOption)} // Pass the callback function 
          onOptionSelect={handleAddressSelect} // Pass the callback function
          />
        </div>
        ):null}

        <div className='mb-4'>
            <TextArea name="locality" label="Locality" />
        </div>

        <div className='flex gap-5.5 mb-4'>
          <div className="w-1/2">
            <InputText name="city" label="City" />
          </div>

          <div className="w-1/2">
            <InputText name="state" label="State" />
          </div>
        </div>

        <div className='flex gap-5.5 mb-4'>
          <div className="w-1/2">
            <InputNumber name="pincode" label="Pincode" />
          </div>

          <div className="w-1/2">
            <InputNumber name="delivery_cost" label="Delivery Cost" />
          </div>
          
        </div>

        <div className='flex gap-5.5 mb-4'>
          

          <div className="w-1/2">
            <Field name="status" component={ToggleSwitch} />
          </div>
          
        </div>
        
        <div className='flex gap-5.5 mb-4'>
          <SubmitButton labelText={action} />
          {action=='Update' ? (
          <ResetButton />
          ):null}
        </div>

        </Form>
      )}
      </Formik>
        
  );
};

export default MyForm;