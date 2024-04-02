import React, { useState } from 'react';
import SubmitButton from '../../components/common/SubmitButton';
import InputText from '../../components/form/InputText';
import InputFile from '../../components/form/InputFile';
import ToggleSwitch from '../../components/form/ToggleSwitch';
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import Editor from '../../components/form/Editor';
const MyForm = ({ initialValues, onSubmit, action }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="bg-[rgba(var(--color-gray-100),var(--tw-bg-opacity) 0.8)]">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="p-5 mt-5 ">
              <h3 className="text-title-md1 font-bold text-black dark:text-white">
                Description
              </h3>
              <p>Edit your tag details and necessary information from here</p>
            </div>
            <div className="bg-white p-5 mt-5 lg:col-span-2 rounded-lg">
              <div className="flex gap-5.5 mb-4">
                <div
                  className="w-full
                "
                >
                  <InputText name="name" label="Name" />
                </div>
              </div>

              <InputFile
                formik={formik}
                label="Brand Image"
                name="image"
                accept="image/*"
                placeholder="image"
              />

              <div>
                <Field name="status" component={ToggleSwitch} />
              </div>
              <div className="flex gap-5.5 mb-4">
                <SubmitButton labelText={action} />
              </div>
            </div>
          </div>

          {/* <div className="flex gap-5.5 mb-4">

            <div className="w-1/2">
              <InputFile
                formik={formik}
                label="Image"
                name="image"
                accept="image/*"
                placeholder="image"
              />
            </div>
          </div> */}
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
