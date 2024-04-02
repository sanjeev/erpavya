import React, { useEffect } from 'react';
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import SubmitButtonFormik from '../components/common/SubmitButtonFormik';
import IconClose from '../components/Icons/Close';
import { simplePut } from '../helpers/api';
import { toast } from 'react-hot-toast';

function Sidepanel({ 
  isOpen,
  onClose,
  headerLabel,
  sidepanelData,
  admin_id,
  serviceAreaId,
  serviceAddressParsed,
  onSubmitHook,
  savedDp
}) {


  const initialValues = {
    cost: {
      'standard_delivery': 0,
      'express_delivery': 0,
      'midnight_delivery': 0,
      'morning_delivery': 0,
    },
    status: {
      'standard_delivery': 'InActive',
      'express_delivery': 'InActive',
      'midnight_delivery': 'InActive',
      'morning_delivery': 'InActive',
    },
  };

  // Populate the initialValues object with savedDp data
  savedDp.forEach(savedItem => {
    
    let dpSlug = '';
    if(savedItem.delivery_preference && savedItem.delivery_preference.slug)
    {
      dpSlug = savedItem.delivery_preference.slug
    }
    
    const dpCost = savedItem.cost;
    const dpStatus = savedItem.status;

    initialValues.cost[dpSlug] = dpCost;
    initialValues.status[dpSlug] = dpStatus;
  });

  const validationSchema = Yup.object().shape({
    cost: Yup.object().shape({
      'Standard Delivery': Yup.number()
        .min(0, 'Cost must be a positive number or zero')
        .positive('Cost must be a positive number or zero'),
      'Express Delivery': Yup.number()
        .min(0, 'Cost must be a positive number or zero')
        .positive('Cost must be a positive number or zero'),
      'Midnight Delivery': Yup.number()
        .min(0, 'Cost must be a positive number or zero')
        .positive('Cost must be a positive number or zero'),
      'Morning Delivery': Yup.number()
        .min(0, 'Cost must be a positive number or zero')
        .positive('Cost must be a positive number or zero'),
    })
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    const url = `vendor/delivery_preference/${admin_id}/${serviceAreaId}`;
    
    const response = await simplePut(url, values);
    toast.success(response.message);
    
    setSubmitting(false);
    resetForm();
    onSubmitHook();
  };
  

  return (
    <>
    {/* Overlay backdrop */}
    {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-9999"
          onClick={onClose}
        ></div>
      )}
    <div
    className={`fixed inset-y-0 right-0 h-screen bg-white z-9999 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      
      <div className="flex justify-between items-center px-4 py-2 border-stroke border-b">
      <div className="text-xl font-semibold text-black">{headerLabel}</div>
      <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring focus:ring-red-300"
          >
            <IconClose />
          </button>
        </div>
        <div className="p-4">

          <p className='text-sm mb-3 border-stroke border-b pb-4'>Service Area: {serviceAddressParsed}</p>
          
          {sidepanelData.length == 0 ? (
            <div className='mt-10'><center><div className="spinner-50"></div></center></div>
          ) : (
            <>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
          {(formik, isSubmitting) => (
            <Form>
              <div className='overflow-auto h-[calc(100vh-186px)] mb-2 pr-4 -mr-4'>
              {sidepanelData.map((item, i) => {
                const status_name = `status[${item.slug}]`;
                return (
                <div key={i} className="border-b border-stroke dark:border-strokedark mb-4 pb-3 mt-2">
                  <div className="flex justify-between mb-2">
                    <div>
                    <Field name={status_name}>
                    {({ field }) => (
                      <label htmlFor={status_name} className="mb-3 block text-black dark-text-white">
                        <input
                          {...field}
                          id={status_name}
                          type="checkbox"
                          checked={field.value === 'Active'} // Check the checkbox based on formik field value
                          onChange={e => {
                            formik.setFieldValue(status_name, e.target.checked ? 'Active' : 'InActive');
                          }}
                        />
                        <span className='ml-3'>{item.name}</span>
                      </label>
                    )}
                  </Field>
                   
                    </div>
                    <div>{item.time}</div>
                  </div>
                  <div className="flex justify-between mb-2">
                    <div>Cost</div>
                    <div>

                    <Field 
                    as="select" 
                    name={`cost[${item.slug}]`}
                    id={`cost[${item.slug}]`}
                    disabled={formik.values.status[item.slug] !== 'Active'}
                    className="rounded-lg border-[1.5px] border-stroke bg-transparent py-1 px-2 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary w-32"
                    >
                      {item.cost_range.map((option) => (
                        <option key={option} value={option}>
                          {option==0?'Free':'Rs. '+option}
                        </option>
                      ))}
                    </Field>

                    </div>
                  </div>
                </div>
              )})}
              </div>
              <SubmitButtonFormik 
                isSubmitting={isSubmitting} 
                labelText={'Update'} 
              />
              </Form>
              )}
              </Formik>
            </>
          )}

        </div>
      
    </div>
    </>
  );
}

export default Sidepanel;