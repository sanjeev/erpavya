import Breadcrumb from '../../components/Breadcrumb';
import React from 'react';
import { simplePost } from '../../helpers/api';
import { toast } from 'react-hot-toast';
import BackButton from '../../components/common/BackButton'
import MyForm from './Form';
import { useNavigate } from 'react-router-dom';
import CONFIG from './const';

const Create = () => {
  const navigate = useNavigate();
  const initialValues = {
    name: '',
    description: '',
    permissions: []
  };
  const onSubmit = async (values, { setSubmitting }) => {
    console.log(values);
    const response = await simplePost(CONFIG.api+'create', values);
    toast.success(response.message);
    navigate(CONFIG.slug);
    setSubmitting(false);
  };
  return (
    <>
      <Breadcrumb pageName={CONFIG.module} elements={CONFIG.breadcrumbs.create} />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke p-5 dark:border-strokedark flex justify-between">
          <h4 className="text-xl font-semibold text-black dark:text-white">
          Create New
          </h4>
          <BackButton to={CONFIG.slug} />
        </div>
        <div>
        <MyForm initialValues={initialValues} onSubmit={onSubmit} action={'Create'} />
        </div>
      </div>

    </>
  );
};

export default Create;