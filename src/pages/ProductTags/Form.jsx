import React, { useState } from 'react';
import SubmitButton from '../../components/common/SubmitButton';
import InputText from '../../components/form/InputText';
import Editor from '../../components/form/Editor';
import InputFile from '../../components/form/InputFile';
import TextArea from '../../components/form/TextArea';
import ToggleSwitch from '../../components/form/ToggleSwitch';
import SwitcherOne from '../../components/SwitcherOne';
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';

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
        <Form className="">
          <div
            className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8"
            id="scrollspy-1"
          >
            <div className="p-5 mt-5" id="first">
              <h3 className="text-title-md1 font-bold text-black dark:text-white">
                Description
              </h3>
              <p>Edit your tag details and necessary information from here</p>
            </div>
            <div className="bg-white p-5 mt-5 lg:col-span-2 rounded-lg">
              <div className="flex gap-5.5 mb-4">
                <div className="w-1/2">
                  <InputText name="name" label="Name" />
                </div>
                <div className="w-1/2">
                  <InputText name="slug" label="Slug" />
                </div>
              </div>
              <div className="flex gap-5.5 mb-4">
                <div className="w-full">
                  {/* <TextArea
                    name="long_description"
                    rows="3"
                    label="Category Description"
                  /> */}
                  <label
                    htmlFor="description"
                    className="mb-3 block text-black dark:text-white"
                  >
                    Product Tags Description
                  </label>
                  <Editor
                    onChange={(e) => {
                      formik.setFieldValue('description', e);
                    }}
                    value={initialValues.description}
                  />
                </div>
              </div>
              {/* <div className="flex gap-5.5 mb-4">
                <TextArea name="description" rows="3" label="Description" />
              </div> */}
              <div>
                <Field name="status" component={ToggleSwitch} />
              </div>

              <div className="flex gap-5.5 mb-4">
                <SubmitButton labelText={action} />
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
