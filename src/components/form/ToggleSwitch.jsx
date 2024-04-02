import React from 'react';

const ToggleSwitch = ({ field, form }) => {
  const isChecked = field.value === 'Active';

  const handleChange = () => {
    const newValue = isChecked ? 'InActive' : 'Active';
    form.setFieldValue(field.name, newValue);
  };

  return (
    <label htmlFor='status' className="mb-3 block text-black dark:text-white">
      <input
        id="status"
        name="status"
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        onBlur={field.onBlur}
      />
      <span className='ml-3'>Status</span>
    </label>
  );
};

export default ToggleSwitch;