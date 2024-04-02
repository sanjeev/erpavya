import React, {useState} from 'react';
import SubmitButton from '../../components/common/SubmitButton';
import InputText from '../../components/form/InputText';
import InputFile from '../../components/form/InputFile';
import ToggleSwitch from '../../components/form/ToggleSwitch';
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';

const MyForm = ({ initialValues, onSubmit, action }) => {
  
  const validationSchema = Yup.object({
    meta_key: Yup.string().required('meta key is required'),
    meta_tag: Yup.string().required('meta tag is required'),
    meta_value: Yup.string().required('meta value is required')
  });
  
  return (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
      <Form className='p-6.5'>
        <div className='flex gap-5.5 mb-4'>
          <div className="w-1/2">
            <InputText name="meta_key" label="Meta key" />
          </div>
          <div className="w-1/2">
            <InputText name="meta_tag" label="Meta tag" />
          </div>
          <div className="w-1/2">
            <InputText name="meta_value" label="Meta value" />
          </div>
        </div>

        {/* <div>
          <Field name="status" component={ToggleSwitch} />
        </div> */}
        
        <div className='flex gap-5.5 mb-4'>
          <SubmitButton labelText={action} />
        </div>
        

        </Form>
      )}
      </Formik>
        
  );
};

export default MyForm;