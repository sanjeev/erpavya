import { Field, ErrorMessage } from 'formik';
export default function TextArea({ name, label, rows }) {
  return (
    <>
      <div>
        <label className="mb-3 block text-black dark:text-white">{label}</label>
        <Field
          as="textarea"
          placeholder={label}
          name={name}
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          rows={rows ? rows : '4'}
        />
      </div>
      <ErrorMessage name={name} className="text-danger" component="div" />
    </>
  );
}
