import React, { useState, useEffect } from 'react';
import SubmitButton from '../../components/common/SubmitButton';
import InputText from '../../components/form/InputText';
import Editor from '../../components/form/Editor';
import TextArea from '../../components/form/TextArea';
import SwitcherOne from '../../components/SwitcherOne';
import InputFile from '../../components/form/InputFile';
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

  const [editorLoaded, setEditorLoaded] = useState(false);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik, values, setFieldValue) => (
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
                  {/* <TextArea
                    name="long_description"
                    rows="3"
                    label="Category Description"
                  /> */}
                  <label
                    htmlFor="description"
                    className="mb-3 block text-black dark:text-white"
                  >
                    Category Description
                  </label>
                  <Editor
                    onChange={(e) => {
                      formik.setFieldValue('description', e);
                    }}
                    value={initialValues.description}
                  />
                </div>
              </div>

              <InputFile
                formik={formik}
                label="Category Image"
                name="image"
                accept="image/*"
                placeholder="image"
              />
              <div className="bg-white mb-5 mt-5">
                <label
                  htmlFor="countries"
                  className="mb-3 block text-black dark:text-white"
                >
                  {' '}
                  Published
                </label>

                <SwitcherOne />
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
          {/*
        <div>
          <Field name="status" component={ToggleSwitch} />
        </div> */}
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
