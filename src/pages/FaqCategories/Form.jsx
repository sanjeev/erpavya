import React, { useState, useEffect } from 'react';
import SubmitButton from '../../components/common/SubmitButton';
import InputText from '../../components/form/InputText';
import TextArea from '../../components/form/TextArea';
import SwitcherOne from '../../components/SwitcherOne';
import InputSelect from '../../components/form/InputSelect';
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { get } from '../../helpers/api';
import CONFIG from './const';

const MyForm = ({ initialValues, onSubmit, action }) => {
  const [parents, setParents] = useState([]);
  const [loading, setLoading] = useState(true);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
  });

  useEffect(() => {
    async function getParentData() {
      const d = await get(CONFIG.api + 'listparents');
      setParents(d);
      setLoading(false);
    }

    getParentData();
  }, []);
   return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik, values, setFieldValue) => (
        <Form className="p-6.5">
          <div className="flex gap-5.5 mb-4">
            <div className="w-1/2">
              <InputText name="name" label="Name" />
            </div>
            <div className="w-1/2">
              {!loading ? (
                <div>
                  <InputSelect
                    name="parent"
                    label="Parent"
                    options={parents}
                    defaultValue={{
                      value: initialValues.parent
                        ? initialValues.parent._id
                        : null,
                      label: initialValues.parent
                        ? initialValues.parent.name
                        : null,
                    }}
                  />
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex gap-5.5 mb-4">
            <div className="w-full">
              <TextArea
                name="description"
                rows="3"
                label="Faq Category Description"
              />
            </div>
          </div>
          <div className="bg-white mb-5 mt-5">
            <label
              for="countries"
              className="mb-3 block text-black dark:text-white"
            >
              {' '}
              Faq Category Image
            </label>

            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
          <div className="bg-white mb-5 mt-5">
            <label
              for="countries"
              className="mb-3 block text-black dark:text-white"
            >
              {' '}
              Published
            </label>

            <SwitcherOne />
          </div>

          {/* <div className='flex gap-5.5 mb-4'>
          <div className="w-1/2">
            <InputFile
              formik={formik}
              label="Image"
              name="image"
              accept="image/*"
              placeholder="image"
            />
          </div>
        </div>

        <div>
          <Field name="status" component={ToggleSwitch} />
        </div> */}

          <div className="flex gap-5.5 mb-4">
            <SubmitButton labelText={action} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
