import React, { useState } from 'react';
import SubmitButton from '../../components/common/SubmitButton';
import InputText from '../../components/form/InputText';
import InputFile from '../../components/form/InputFile';
import { TagsInput } from 'react-tag-input-component';
import ToggleSwitch from '../../components/form/ToggleSwitch';
import { Field, Formik, Form, FieldArray } from 'formik';
import * as Yup from 'yup';
const parameters1 = { tname: '', tslug: '' };

const MyForm = ({ initialValues, onSubmit, action }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
  });
  //const [selected, setSelected] = useState(['papaya']);
  const [formValues, setFormValues] = useState([{ tname: '', tslug: '' }]);

  // let handleChange = (i, e) => {
  //   let newFormValues = [formValues];
  //   newFormValues[i][e.target.tname] = e.target.value;
  //   setFormValues(newFormValues);
  // };

  // let addFormFields = () => {
  //   setFormValues([...formValues, { tname: '', tslug: '' }]);
  // };

  // let removeFormFields = (i) => {
  //   let newFormValues = [...formValues];
  //   newFormValues.splice(i, 1);
  //   setFormValues(newFormValues);
  // };

  // let handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(
  //     JSON.stringify(formValues));
  // };

  const [fields, setFields] = useState(['']);
  let handleChange = (i, event) => {
    const values = [...fields];
    values[i] = event.target.value;
    setFields(values);
  };

  let handleAdd = () => {
    const values = [...fields];
    values.push('');
    setFields(values);
  };

  let handleRemove = (i) => {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        values,
        /* and other goodies */
      }) => (
        <Form className="">
          {console.log(values)}
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
                  <InputText name="slug" label="Slug" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                <div className="p-5 mt-5 ">
                  <h3 className="text-title-md1 font-bold text-black dark:text-white">
                    Variations
                  </h3>
                  <p>Add attribute terms here</p>
                </div>
                <div className="bg-white p-5 mt-5 lg:col-span-2 rounded-lg">
                  <FieldArray
                    name="options"
                    render={(arrayHelpers) => (
                      <div>
                        {values.options?.length > 0 &&
                          values.options.map((paramList, index) => (
                            <div key={index} className="flex gap-5.5 mb-3">
                              {Object.keys(paramList).map((param) => (
                                <>
                                  <Field
                                    key={`${param}`}
                                    name={`options.${index}.${param}`}
                                    placeholder={`${index}.${param}`}
                                    className="w-2/5
                          rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                  />
                                </>
                              ))}

                              <button
                                type="button"
                                onClick={() => arrayHelpers.remove(index)}
                              >
                                X
                              </button>
                            </div>
                          ))}

                        <button
                          type="button"
                          className="inline-flex rounded-full bg-primary py-1 px-3 text-sm font-medium text-white hover:bg-opacity-90 mb-2"
                          onClick={() =>
                            arrayHelpers.push({ tname: '', tslug: '' })
                          }
                        >
                          Add Variations
                        </button>
                      </div>
                    )}
                  />
                </div>
                <div>
                  <Field name="status" component={ToggleSwitch} />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                <div className="p-5 mt-5 "></div>
                <div className="mt-5 lg:col-span-2 rounded-lg">
                  <button
                    className=" items-center gap-2 rounded bg-primary py-2 px-4.5 font-medium text-white hover:bg-opacity-80"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const FormikFieldArrayForm = ({ parameters }) => (
  <div>
    <Formik
      initialValues={parameters}
      onSubmit={(values) =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 5000)
      }
    >
      {({ values }) => (
        <>
          <FieldArray
            name="options"
            render={(arrayHelpers) => (
              <div>
                {values.options.length > 0 &&
                  values.options.map((paramList, index) => (
                    <div key={index} className="flex gap-5.5 mb-3">
                      {Object.keys(paramList).map((param) => (
                        <>
                          <Field
                            key={`${param}`}
                            name={`options.${index}.${param}`}
                            placeholder={`${index}.${param}`}
                            className="w-2/5
                          rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        </>
                      ))}

                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        X
                      </button>
                    </div>
                  ))}

                <button
                  type="button"
                  className="inline-flex rounded-full bg-primary py-1 px-3 text-sm font-medium text-white hover:bg-opacity-90 mb-2"
                  onClick={() => arrayHelpers.push({ tname: '', tslug: '' })}
                >
                  Add Variations
                </button>
              </div>
            )}
          />
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </>
      )}
    </Formik>
  </div>
);

export default MyForm;
