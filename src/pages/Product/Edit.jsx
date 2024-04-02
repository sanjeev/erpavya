import Breadcrumb from '../../components/Breadcrumb';
import React, { useState, useEffect } from 'react';
import { get, put } from '../../helpers/api';
import { toast } from 'react-hot-toast';
import BackButton from '../../components/common/BackButton';
import MyForm from './Form';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../common/Loader';
import CONFIG from './const';

const Edit = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {

    async function getData() {
      const d = await get(CONFIG.api+'detail/'+id);
      
      setInitialValues(d);
      setLoading(false);
    };

    getData();
    
  },[id]);

  const onSubmit = async (values, { setSubmitting }) => {
    const response = await put(CONFIG.api +'update/'+ id, values); // Make a POST request
    toast.success(response.message);
    navigate(CONFIG.slug);
    setSubmitting(false);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Breadcrumb pageName={CONFIG.module} elements={CONFIG.breadcrumbs.edit} />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke p-5 dark:border-strokedark flex justify-between">
          <h3 className="font-medium text-black dark:text-white">
          Edit
          </h3>
          <BackButton to={CONFIG.slug} />
        </div>
        <div>
        <MyForm initialValues={initialValues} onSubmit={onSubmit} action={'Update'} />
        </div>
      </div>

    </>
  );
};

export default Edit;