import Breadcrumb from '../../../../components/Breadcrumb';
import React, { useState, useEffect } from 'react';
import { simplePost } from '../../../../helpers/api';
import { replaceStr } from '../../../../helpers/common';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import CONFIG from '../../const';
import Tabs from '../../Tabs';
import MyForm from './Form';
import BackButton from '../../../../components/common/BackButton';

const Create = () => {
  const [cookies] = useCookies('token');
  const navigate = useNavigate();

  const { id } = useParams();

  const initialValues = {
    address: '',
    city: '',
    state: '',
    pincode: '',
    landmark: ''
  };
  const STORE_ADDRESS_URI = replaceStr(CONFIG.store_address.page.list, ":id", id);
  const onSubmit = async (values, { setSubmitting }) => {
  
  const response = await simplePost(CONFIG.store_address.api + id, values);
    toast.success(response.message);
    navigate(STORE_ADDRESS_URI);
    setSubmitting(false);
  };

  return (
    <>
      <Breadcrumb pageName={CONFIG.vendor.module} elements={CONFIG.breadcrumbs.store_address.create} />

      <div className="rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
        <Tabs />
        <div>
          <div className="leading-relaxed block">
            <div className="flex justify-between mb-5">
              <h3 className="font-medium text-black dark:text-white d-flex mb-3">
              Create New Address
              </h3>
              <div className="gap-1 mb-2">
                <BackButton to={STORE_ADDRESS_URI} />
              </div>
            </div>
            
            <MyForm initialValues={initialValues} onSubmit={onSubmit} action={'Create'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;