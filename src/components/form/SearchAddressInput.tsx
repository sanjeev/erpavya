import React, { useState, useEffect } from 'react';
import { get, simplePost } from '../../helpers/api';
import IconSearch from '../Icons/Search';
import {pars_address} from '../../helpers/common'
import SubmitButtonFormik from '../../components/common/SubmitButtonFormik';
import CancelButton from '../../components/common/TransButton';
import { Formik, Form } from 'formik';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const SearchAddressInput = ({onSubmitHook}) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTimer, setSearchTimer] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  const { id } = useParams();


  // Function to handle checkbox selection
  const handleCheckboxChange = (_id) => {
    if (selectedItems.includes(_id)) {
      // If the item is already selected, remove it
      setSelectedItems(selectedItems.filter((id) => id !== _id));
      //formik.setFieldValue("address", selectedItems);
    } else {
      // If the item is not selected, add it to the selected items
      setSelectedItems([...selectedItems, _id]);
    }
  };

  useEffect(() => {
    // Clear any existing timer
    if (searchTimer) {
      clearTimeout(searchTimer);
    }

    const timer = setTimeout(() => {
      if (searchValue.length >= 3) {
        // Fetch data from the API when a 6-digit pincode is entered
        fetchDataFromApi(searchValue);
      } else {
        // Clear the search results when the input is not a 6-digit pincode
        setSearchResults([]);
      }
    }, 500);

    // Set the new timer in state
    setSearchTimer(timer);
  }, [searchValue]);

  const fetchDataFromApi = async (key) => {
    setIsLoading(true);

    try {

      const response = await get(`address/search_address?key=${key}`);
      
      setSearchResults(response);

    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const initialValues = {
    address: []
  };

  const onSubmit = async (values) => {
    try {
      //Send data to api
      const response = await simplePost(`vendor/service_area/${id}`, {'addresses':selectedItems});
      toast.success(response.message);
      //navigate(LIST_URI);
      //setSubmitting(false);

      //console.log(selectedItems);
      setSearchValue('');
      setSelectedItems([]);
      onSubmitHook();
      
    } catch (error) {
      console.error('Error:', error);
    } finally {
      //setSubmitting(false);
    }
  };

  const onClickReset = () => {
    setSearchValue(''); // Reset the searchValue state to an empty string
    //setSelectedItems([]); // Optionally, you can also reset the selectedItems state if needed
  };

  return (
    <>
      <div className="w-full sm:w-1/2">

        <label>
          Search by area, city or pincode
        </label>
        <div className="relative">
          <span className="absolute right-4.5 top-4">
          {isLoading ? (
            <div className="spinner"></div>
          ) : (
            <IconSearch />
          )}
          </span>
          <input
            className="w-full rounded border border-stroke bg-gray py-3 pl-4 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            type="text"
            name="key"
            id="key"
            placeholder="Search by area, city or pincode"
            maxLength={6}
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
        </div>
        </div>


        {!isLoading && searchResults.length > 0 && (
          <>
          <Formik
          initialValues={initialValues}
          
          onSubmit={onSubmit}
        >
          {(isSubmitting:any) => (
        <Form>
        <div className="w-full mt-5">
          <div className="mb-3">
            <label>
              <strong>Add new service area: </strong>
            </label>
          </div>
          <div className="max-h-300 overflow-y-scroll border border-stroke p-5">
          <div className="grid grid-cols-3 gap-4">
            {searchResults.map(({ _id, ...item }) => (
              <div key={_id}>
                <label
                  htmlFor={`address-${_id}`}
                  className={`block cursor-pointer transition duration-300 ease-in-out transform rounded border p-2 ${
                    selectedItems.includes(_id) ? 'border-primary' : 'border-stroke'
                  } hover:border-primary`}
                >
                  <div className="flex gap-2 items-start">
                  <input
                    type="checkbox"
                    name="addresses"
                    id={`address-${_id}`}
                    className="mt-1.5"
                    checked={selectedItems.includes(_id)}
                    onChange={() => handleCheckboxChange(_id)}
                  />
                  {pars_address(item)}
                  </div>
                </label>
              </div>
            ))}
          </div>
          </div>
        </div>
        
        <div className="mt-5">
          <div className="flex gap-3">
            <SubmitButtonFormik 
              isSubmitting={false} 
              labelText={'Save'} 
            />
            <CancelButton labelText={'Cancel'} onClick={onClickReset} />
          </div>
        </div>
        </Form>
      )}
      </Formik>
        </>

      )}
  
      
    </>
  );
};

export default SearchAddressInput;
