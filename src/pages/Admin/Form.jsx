import React, { useState, useEffect } from 'react';
import SubmitButton from '../../components/common/SubmitButton';
import InputSelectMulti from '../../components/form/InputSelectMulti';
import InputText from '../../components/form/InputText';
import InputEmail from '../../components/form/InputEmail';
import InputNumber from '../../components/form/InputNumber';
import InputPassword from '../../components/form/InputPassword';
import ToggleSwitch from '../../components/form/ToggleSwitch';
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { get } from '../../helpers/api';
import { extractValuesAndLables } from '../../helpers/common';

const MyForm = ({ initialValues, onSubmit, action }) => {
  const [roleoptions, setRoleOptions] = useState([]);
  const [roleloading, setRoleloading] = useState(true);
   const admin_assigned_roles = extractValuesAndLables(initialValues.roles);
  //console.log('asif',admin_assigned_roles);
  useEffect(() => {
    async function getRoles() {
      const d = await get('role/list');
      setRoleOptions(d);
      setRoleloading(false);
    };

    getRoles();

  }, []);

  let rules = {
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required'),
    phone: Yup.string().required('Phone is required')
  };

  if(action == 'Create')
  {
    rules = {
      ...rules, 
      password: Yup.string().required('Password is required')
    };
  }
  const validationSchema = Yup.object(rules);

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

          <div className="w-1/2">
            <InputEmail name="email" label="Email" />
          </div>
        </div>

        <div className='flex gap-5.5 mb-4'>
          <div className="w-1/2">
            <InputNumber name="phone" label="Phone" />
          </div>
          
          {action=='Create' ? (
          <div className="w-1/2">
            <div>
              <InputPassword name="password" label="Password" />
            </div>
          </div>
          ):null}

        </div>

        <div className='flex gap-5.5 mb-4'>
          <div className="w-1/2">
          {!roleloading ? (
            <div>
              <InputSelectMulti 
                name="roles"
                label="Roles"
                setFieldValue={setFieldValue} 
                data={roleoptions} 
                defaultValue={admin_assigned_roles}
              />
            </div>
            ):null}
          </div>
        </div>

        <div className='flex gap-5.5 mb-4'>
          <Field name="status" component={ToggleSwitch} />
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