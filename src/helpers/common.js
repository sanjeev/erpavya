import moment from "moment";

export const date_format = (date) => {
  return moment(date).format("D MMM, YYYY")
}

export const extractValuesAndLables = (data) => {
  if (!Array.isArray(data)) {
    return false;
  }

  const extractedData = data.map(doc => {
    return {
      value: doc._id,
      label: doc.name
    };
  });

  return extractedData;
}
export const roleHasVendor = (data) => {
  
  if(data.roles.length > 0) {
    return data.roles.some((item) => item.name === 'Vendor');
  }

}

export const print_address = (item) => {
  
  return `${item.pincode}, ${item.taluk}, ${item.districtName}, ${item.stateName}, PO: ${item.officeName}`
}

/**
 * Format and capitalize the first letter of each word in an address.
 * @param {object} item - The address object containing address components.
 * @param {string} item.Pincode - The pincode of the address.
 * @param {string} item.OfficeName - The office name of the address.
 * @param {string} item.District - The district of the address.
 * @returns {string} - The formatted address string with capitalized first letters.
 */
 export const pars_address = (item) => {
  /**
   * Capitalize the first letter of a string.
   * @param {string} str - The input string.
   * @returns {string} - The string with the first letter capitalized.
   */
  const capitalize = (str) => {
    if (typeof str === 'string' && str.trim() !== '') {
      return str.charAt(0).toUpperCase() + str.slice(1);
    } else {
      return str;
    }
  };

  // Capitalize each address component and format them
  const formattedPincode = capitalize(item.Pincode);
  const formattedOfficeName = capitalize(item.OfficeName);
  const formattedDistrict = capitalize(item.District);
  //const formattedStateName = capitalize(item.StateName);

  // Concatenate the formatted components to create the final address string

  //address, city, state, pincode
  return `${formattedOfficeName}, ${formattedDistrict}, ${formattedPincode}`;
};

export const replaceStr = (string, find, replace) => {
  return string.replace(find, replace);
}

export const deleteRecordByName = (data, nameToDelete) => {
  const updatedData = data.filter(item => item.name !== nameToDelete);
  return updatedData;
};