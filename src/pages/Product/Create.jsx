import Breadcrumb from '../../components/Breadcrumb';
import { post } from '../../helpers/api';
import { toast } from 'react-hot-toast';
import BackButton from '../../components/common/BackButton';
import MyForm from './Form';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import CONFIG from './const';

const Create = () => {
  const navigate = useNavigate();
  const initialValues = {
    gallery_images: [],
    featured_images: '',
    categories: [],
    tags: [],
    name: '',
    slug: '',
    price: '',
    short_description: '',
    long_description: '',
    status: 'Active',
    excerpt: '',
    body: '',
    notes: '',
    product_type: '',
    sale_price: '',
    quantity: '',
    sku: '',
    width: '',
    height: '',
    length: '',
    seo_title: '',
    seo_keywords: '',
    seo_description: '',
  };
  const onSubmit = async (values, { setSubmitting }) => {
    console.log(values);
    // const response = await post(CONFIG.api + 'create', values); // Make a POST request
    // toast.success(response.message);
    // navigate(CONFIG.slug);
    // setSubmitting(false);
  };

  return (
    <>
      <div className="p-5 border-b border-dashed border-border-base border-indigo-100">
        <Breadcrumb
          pageName="Create Product"
          elements={CONFIG.breadcrumbs.create}
        />
      </div>
      <div className="">

        <div className="mt-5">
          wwerwerjlkjlkj
        </div>
      </div>
    </>
  );
};

export default Create;
