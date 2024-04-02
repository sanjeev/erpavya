import { Field } from 'formik';
export default function InputCheckbox({name, label}) {
  return (
    <>
      <label htmlFor={name} className="mb-3 block text-black dark:text-white">
        <Field type="checkbox" name={name} id={name} />
        <span className='ml-3'>{label}</span>
      </label>
    </>
  )
}
