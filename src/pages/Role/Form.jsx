import React, { useState, useEffect } from 'react';
import InputText from '../../components/form/InputText';
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import ToggleSwitch from '../../components/form/ToggleSwitch';
import SubmitButtonFormik from '../../components/common/SubmitButtonFormik'
import { get } from '../../helpers/api';

const MyForm = ({ initialValues, onSubmit, action }) => {
  const [permissiongroups, setPermissionGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required')
  });

  useEffect(() => {

    async function getData() {
      const d = await get('permission_group/list');
      setPermissionGroups(d);
      setLoading(false);
    };

    getData();
    
  },[]);

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
        </div>

        <div>
          <Field name="status" component={ToggleSwitch} />
        </div>

        <div className='gap-5.5 mb-4'>
          <div>
            <label className='mb-3 block text-black dark:text-white'>Permission Groups</label>
          </div>
          
          <div className="flex flex-wrap w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition dark:border-form-strokedark overflow-y-auto h-[300px]">
            {loading === true ? 'Loading...' : null}
            {permissiongroups.length === 0 ? (
              <span>No Permission Groups</span>
            ) : (
              permissiongroups.map((permissiongroup) => (
                <div key={permissiongroup._id} className="w-1/3 mb-4">
                  <label htmlFor={permissiongroup._id} className="mb-3 block text-black dark-text-white">
                    <Field type="checkbox" name="permissions" value={permissiongroup._id} id={permissiongroup._id} />
                    <span className="ml-3">{permissiongroup.name}</span>
                  </label>
                </div>
              ))
            )}
          </div>
        </div>

        <div className='flex gap-5.5 mb-4'>
          <SubmitButtonFormik 
              isSubmitting={isSubmitting} 
              labelText={action} 
            />
        </div>
        

        </Form>
      )}
      </Formik>
        
  );
};

export default MyForm;