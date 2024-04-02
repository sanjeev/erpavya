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
  const [initialValues, setInitialValues] = useState({
    name: '',
    image: '',
    imagePreview: '',
    options: [],
    status: 'Active',
  });
  /*const initialValues = {
    name: '',
    image: '',
    imagePreview: '',
    options: [],
    status: 'Active',
  };
*/
  useEffect(() => {
    async function getData() {
      const d = await get(CONFIG.api + 'detail/' + id);

      setInitialValues(d);
      setLoading(false);
    }

    getData();
  }, [id]);

  const onSubmit = async (values, { setSubmitting }) => {
    console.log(values);
    const response = await put(CONFIG.api + 'update/' + id, values); // Make a POST request
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
            action={'Update'}
          />
        </div>
      </div>
    </>
  );
};

export default Edit;
