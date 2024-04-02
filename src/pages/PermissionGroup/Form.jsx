import React, { useState, useEffect } from 'react';
import InputText from '../../components/form/InputText';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { get } from '../../helpers/api';
import SubmitButtonFormik from '../../components/common/SubmitButtonFormik'

const MyForm = ({ initialValues, onSubmit }) => {
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {

    async function getData() {
      const d = await get('permission/');
      setPermissions(d);
      setLoading(false);
    };

    getData();
    
  },[]);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required')
  });

  return (
   
    <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
      <Form className='p-6.5'>
        <div className='flex gap-5.5 mb-4'>
          <div className="w-1/2">
            <InputText name="name" label="Name" />
          </div>
        
          <div className="w-1/2">
            <InputText name="description" label="Short Description" />
          </div>
        </div>

        <div className='gap-5.5 mb-4'>
          <div>
            <label className='mb-3 block text-black dark:text-white'>Permissions</label>
          </div>
          
          <div className="flex flex-wrap w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition dark:border-form-strokedark overflow-y-auto h-[300px]">
            {loading === true ? 'Loading...' : null}
            {permissions.length === 0 ? (
              <span>No Permissions</span>
            ) : (
              permissions.map((permission) => (
                <div key={permission._id} className="w-1/3 mb-4">
                  <label htmlFor={permission._id} className="mb-3 block text-black dark-text-white">
                    <Field type="checkbox" name="permissions" value={permission._id} id={permission._id} />
                    <span className="ml-3">{permission.name}</span>
                  </label>
                </div>
              ))
            )}
          </div>
        </div>

        <div className='flex gap-5.5 mb-4'>
            <SubmitButtonFormik 
              isSubmitting={isSubmitting} 
              labelText={'Submit'} 
            />
        </div>

        </Form>
      )}
      </Formik>
        
  );
};

export default MyForm;