import Breadcrumb from '../../components/Breadcrumb';
import React from 'react';
import { simplePost } from '../../helpers/api';
import { toast } from 'react-hot-toast';
import BackButton from '../../components/common/BackButton'
import VendorForm from './VendorForm';
import { useNavigate } from 'react-router-dom';
import CONFIG from './const';

const VendorUpdate = () => {
  const navigate = useNavigate();
  
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    password: '',
    status: 'Active',
    selectedOptions: []
  };
  const onSubmit = async (values, { setSubmitting }) => {
    const response = await simplePost(CONFIG.api, values); // Make a POST request
    toast.success(response.message);
    navigate(CONFIG.slug);
    setSubmitting(false);
  };

  return (
    <>
      <Breadcrumb pageName={CONFIG.vendor.module} elements={CONFIG.breadcrumbs.vendor} />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke p-5 dark:border-strokedark flex justify-between">
          <h4 className="text-xl font-semibold text-black dark:text-white">
          Update
          </h4>
          <BackButton to={CONFIG.slug} />
        </div>
        <div>
        <VendorForm initialValues={initialValues} onSubmit={onSubmit} action={'Create'} />
        </div>
      </div>

    </>
  );
};

export default VendorUpdate;