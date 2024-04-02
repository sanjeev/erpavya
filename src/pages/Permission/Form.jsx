import React, { useState, useEffect } from 'react';
import SubmitButton from '../../components/common/SubmitButton';
import InputText from '../../components/form/InputText';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useCookies } from 'react-cookie';

const MyForm = ({ initialValues, onSubmit, action }) => {
  
  const [cookies] = useCookies('token');

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required')
  });

  return (
   
    <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue }) => (
      <Form className='p-6.5'>
        <div className='flex gap-5.5 mb-4'>
          <div className="w-1/2">
            <InputText name="name" label="Name" />
          </div>

        </div>

        <div className='flex gap-5.5 mb-4'>
          <SubmitButton labelText={action} />
        </div>
        

        </Form>
      )}
      </Formik>
        
  );
};

export default MyForm;