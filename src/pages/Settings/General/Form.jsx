import React, {useState} from 'react';
import SubmitButtonFormik from '../../../components/common/SubmitButtonFormik';
import InputText from '../../../components/form/InputText';
import InputFile from '../../../components/form/InputFile';
import ToggleSwitch from '../../../components/form/ToggleSwitch';
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
const MyForm = ({ initialValues, onSubmit, action }) => {
  
  const validationSchema = Yup.object({
    Facebook: Yup.string().required('facebook is required'),
    Facebook_Link: Yup.string().required('facebook Link is required'),
    Instagram: Yup.string().required('instagram is required'),
    Twitter: Yup.string().required('Twitter is required')
  });
  
   return (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
   {({ isSubmitting }) => (
      <Form className='p-6.5'>
        <div className=' mb-4 bg-indigo-500'>
          <div className="max-w-full overflow-x-auto relative mb-5">
            <div className="flex gap-5.5 mb-4">
              <div className="w-1/4">
                 <label className="mb-3 block text-black dark:text-white">
                  Attach file
                </label>
              </div>
                <div className="w-1/2 relative">
               
                <input
                  type="file"
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
                </div>
              </div>
           
          </div>
        
            <div className="max-w-full overflow-x-auto relative mb-5">
            <div className="flex gap-5.5 mb-4">
              <div className="w-1/4">
                <label className="mb-3 block text-black dark:text-white">
                  Facebook Link
                </label>
              </div>
                <div className="w-1/2 relative">
                
                <input
                  type="text"
                  placeholder="Facebook Link"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                </div>
              </div>
               </div>
          
            <div className="max-w-full overflow-x-auto relative mb-5">
              <div className="flex gap-5.5 mb-4">
                <div className="w-1/4">
                <label className="mb-3 block text-black dark:text-white">
                  Instagram
                </label>
              </div>
                <div className="w-1/2 relative">
                  <input
                  type="file"
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
                </div>
              </div>
            </div>

            <div className="max-w-full overflow-x-auto relative mb-5">
              <div className="flex gap-5.5 mb-4">
                <div className="w-1/4">
                <label className="mb-3 block text-black dark:text-white">
                  Instagram Link
                </label>
              </div>
                <div className="w-1/2 relative">
                
                <input
                  type="text"
                  placeholder="Instagram Link"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                  
                 </div>
              </div>
            </div>

            <div className="max-w-full overflow-x-auto relative mb-5">
              <div className="flex gap-5.5 mb-4">
                <div className="w-1/4">
                <label className="mb-3 block text-black dark:text-white">
                  Twitter
                </label>
              </div>
                <div className="w-1/2 relative">
                  <input
                  type="file"
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
                </div>
              </div>
            </div>
            <div className="max-w-full overflow-x-auto relative mb-5">
              <div className="flex gap-5.5 mb-4">
                <div className="w-1/4">
                <label className="mb-3 block text-black dark:text-white">
                  Twitter Link
                </label>
              </div>
                <div className="w-1/2 relative">

                <input
                  type="text"
                  placeholder="Twitter Link"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                 
                </div>
              </div>
            </div>

             <div className="max-w-full overflow-x-auto relative mb-5">
              <div className="flex gap-5.5 mb-4">
                <div className="w-1/4">
                <label className="mb-3 block text-black dark:text-white">
                  Pinterest
                </label>
              </div>
                <div className="w-1/2 relative">
                  <input
                  type="file"
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
                </div>
              </div>
            </div>
            <div className="max-w-full overflow-x-auto relative mb-5">
              <div className="flex gap-5.5 mb-4">
                <div className="w-1/4">
                <label className="mb-3 block text-black dark:text-white">
                  Pinterest Link
                </label>
              </div>
                <div className="w-1/2 relative">
                  
                <input
                  type="text"
                  placeholder="Pinterest Link"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                 </div>
              </div>
            </div>
          </div>

        {/* <div>
          <Field name="status" component={ToggleSwitch} />
        </div> */}
        
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