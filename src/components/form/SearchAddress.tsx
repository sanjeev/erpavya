import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { get } from '../../helpers/api';
import debounce from 'lodash.debounce';

const SearchAddress = ({onOptionSelect}) => {
  // State to hold the options fetched from the API
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);

  // Fetch data from the API based on user input
  const fetchData = async (inputValue:any) => {
    try {
      const response = await get(`address/search?key=${inputValue}`);
      
      // Transform the data into the format expected by react-select
      const transformedOptions = response.map(item => ({
        value: item._id,
        label: `${item.pincode}, ${item.taluk}, ${item.districtName}, ${item.stateName}, PO: ${item.officeName}`,
        full_address: item
      }));
      
      setOptions(transformedOptions);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Debounce the fetchData function to start after a delay
  const delayedFetchData = debounce(fetchData, 500);

  // Handle user input changes
  const handleInputChange = (newValue:any) => {
    setInputValue(newValue);
    if (newValue.length >= 3) {
      delayedFetchData(newValue);
    } else {
      setOptions([]);
    }
  };

  // Handle option selection and pass the selected option to the parent
  const handleOptionSelect = (selectedOption:any) => {
    onOptionSelect(selectedOption);
    setInputValue(''); // Clear the search box input value
  };

  return (
    <>
    <Select
      value={options.find(option => option.value === inputValue)}
      options={options}
      onInputChange={handleInputChange}
      onChange={handleOptionSelect} // Call the callback function on option select
      isClearable
      placeholder='Search address'
    />
    </>
  );
};

export default SearchAddress;
