import Breadcrumb from '../../../../components/Breadcrumb';
import React, { useState, useEffect } from 'react';
import { simplePut, get } from '../../../../helpers/api';
import { replaceStr } from '../../../../helpers/common';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import CONFIG from '../../const';
import Tabs from '../../Tabs';
import MyForm from './Form';
import BackButton from '../../../../components/common/BackButton';
import Loader from '../../../../common/Loader';

const Edit = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { vendor_id, id } = useParams();
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {

    async function getData() {
      const getUrl = replaceStr(CONFIG.store_address.api.find, ":id", id);
      const d = await get(getUrl);
      setInitialValues(d);
      setLoading(false);
    };

    getData();
    
  },[id]);

  const STORE_ADDRESS_URI = replaceStr(CONFIG.store_address.page.list, ":id", vendor_id);

  const onSubmit = async (values, { setSubmitting }) => {
    const response = await simplePut(CONFIG.store_address.api + id, values); // Make a POST request
    toast.success(response.message);
    navigate(STORE_ADDRESS_URI);
    setSubmitting(false);
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Breadcrumb 
        pageName={CONFIG.vendor.module} 
        elements={CONFIG.breadcrumbs.store_address.edit} 
      />

      <div className="rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
        <Tabs />
        <div>
          <div className="leading-relaxed block">
            <div className="flex justify-between mb-5">
              <h3 className="font-medium text-black dark:text-white d-flex mb-3">
              Edit Address
              </h3>
              <div className="gap-1 mb-2">
                <BackButton to={STORE_ADDRESS_URI} />
              </div>
            </div>
            
            <MyForm initialValues={initialValues} onSubmit={onSubmit} action={'Update'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;