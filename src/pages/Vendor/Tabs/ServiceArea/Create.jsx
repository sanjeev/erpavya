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
    locality: '',
    city: '',
    state: '',
    pincode: '',
    delivery_cost: '',
    status: 'Active'
  };
  const LIST_URI = replaceStr(CONFIG.service_area.page.list, ":id", id);
  const onSubmit = async (values, { setSubmitting }) => {
  
  const createUrl = replaceStr(CONFIG.service_area.api.find, ":id", id);
  const response = await simplePost(createUrl, values);
    toast.success(response.message);
    navigate(LIST_URI);
    setSubmitting(false);
  };

  return (
    <>
      <Breadcrumb pageName={CONFIG.vendor.module} elements={CONFIG.breadcrumbs.service_area.create} />

      <div className="rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
        <Tabs />
        <div>
          <div className="leading-relaxed block">
            <div className="flex justify-between mb-5">
              <h3 className="font-medium text-black dark:text-white d-flex mb-3">
              Create New Address
              </h3>
              <div className="gap-1 mb-2">
                <BackButton to={LIST_URI} />
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