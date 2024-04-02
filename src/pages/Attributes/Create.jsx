import Breadcrumb from '../../components/Breadcrumb';
import React from 'react';
import { post } from '../../helpers/api';
import { toast } from 'react-hot-toast';
import BackButton from '../../components/common/BackButton';
import MyForm from './Form';
import { useNavigate } from 'react-router-dom';
import CONFIG from './const';

const Create = () => {
  const navigate = useNavigate();
  const initialValues = {
    name: '',
    image: '',
    imagePreview: '',
    options: [],
    status: 'Active',
  };
  const onSubmit = async (values, { setSubmitting }) => {
    console.log(values);
    const response = await post(CONFIG.api + 'create', values); // Make a POST request
    toast.success(response.message);
    navigate(CONFIG.slug);
    setSubmitting(false);
  };

  return (
    <>
      <Breadcrumb
        pageName={CONFIG.module}
        elements={CONFIG.breadcrumbs.create}
      />
      <div className="h-px  border-b border-dashed border-border-base border-indigo-100" />
      <div className="">
        {/* <div className="border-b border-stroke p-5 dark:border-strokedark flex justify-between">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Create New
          </h4>
          <BackButton to={CONFIG.slug} />
        </div> */}
        <div>
          <MyForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            action={'Create'}
          />
        </div>
      </div>
    </>
  );
};

export default Create;
