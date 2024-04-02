import React from 'react';
import { useField } from 'formik';

const InputSelectSimple = ({ name, label, options, defaultValue }) => {
  const [field, , helpers] = useField(name);
  return (
    <div>
      <label htmlFor={name} className="mb-3 block text-black dark:text-white">
        {label}
      </label>
      
      <Select 
        name={name}
        options={options.map((v:any) => ({
          value: v._id,
          label: v.name
        }))}
        onChange={(selectedOption) => {
          helpers.setValue(selectedOption ? selectedOption.value : '');
        }}
        onBlur={() => helpers.setTouched(true)}
        defaultValue={defaultValue.value==null?'':defaultValue}
      />
    </div>
  );
};

export default InputSelectSimple;