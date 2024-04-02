import Breadcrumb from '../../components/Breadcrumb';
import Table from './Table';
import React, { useState, useEffect } from 'react';
import { get, remove } from '../../helpers/api';
import { toast } from 'react-hot-toast';
import CreateButton from '../../components/common/CreateButton';
import DeletedButton from '../../components/common/DeletedButton';
import Loader from '../../common/Loader';
import CONFIG from './const';

const List = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function getData() {
      const d = await get(CONFIG.api+'list');
      setData(d);
      setLoading(false);
    };

    getData();
  }, []);

  const deleteRecord = async (recordId) => {
    const response = await remove(CONFIG.api + 'delete/'+recordId);
    const updatedData = data.filter((item) => item._id !== recordId);
    setData(updatedData);

    toast.success(response.message);
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <>
   dsflksdjfklsjdflkjsdflkj

    </>
  );
};

export default List;