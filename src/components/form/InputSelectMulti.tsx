import Select from 'react-select'

export default function InputSelectMulti({name, label, setFieldValue, data, defaultValue}) {
  return (
    <>
      <label htmlFor={name} className="mb-3 block text-black dark:text-white">
        {label}
      </label>
        <Select
          name={name}
          options={data.map((v:any) => ({
            value: v._id,
            label: v.name,
          }))}
          isMulti
          onChange={(d:Object) =>
            setFieldValue(name, d)
          }
          defaultValue={defaultValue}
        />
    </>
  )
}
