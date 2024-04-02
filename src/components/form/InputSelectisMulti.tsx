import { useField } from 'formik';
import Select from 'react-select';

const InputSelectisMulti = ({
  name,
  label,
  options,
  defaultValue,
  onchangeto,
}: any) => {
  const [field, helpers] = useField(name);
  return (
    <div>
      <label htmlFor={name} className="mb-3 block text-black dark:text-white">
        {label}
      </label>

      <Select
        name={name}
        isMulti
        options={options.map((v: any) => ({
          value: v.value,
          label: v.label,
        }))}
        onChange={(selectedOption) => {
          onchangeto(selectedOption);
        }}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default InputSelectisMulti;
