import React, { useState, useEffect } from 'react';
import SubmitButton from '../../components/common/SubmitButton';
import InputText from '../../components/form/InputText';
import Editor from '../../components/form/Editor';
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
    question: Yup.string().required('Question is required'),
  });

  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState('');

  // useEffect(() => {
  //   async function getParentData() {
  //     const d = await get(CONFIG.api + 'listparents');
  //     setParents(d);
  //     setLoading(false);
  //   }

  //   getParentData();
  // }, []);

  
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
        <Form className="p-6.5">
          <div className="flex gap-5.5 mb-4">
            <div className="w-1/2">
              <InputText name="question" label="Question" />
            </div>
          </div>
          <div className="flex gap-5.5 mb-4">
            <div className="w-1/2">
              <TextArea
                name="answer"
                rows="3"
                label="Answer"
              />
            </div>
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
