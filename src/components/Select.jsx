import React, {useId} from 'react'

function Select({
    options, //options is an array
    label,
    className,
    ...props
},ref
) {
    const id = useId();
  return (
    <div className='w-full'>
        {label && 
        <label className='' htmlFor={id}>
            {label}
        </label>}
        <select {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white 
            border border-black/10 outline-none 
            duration-150 ${className}`}
        >
            {
                options?.map((option) => {
                    <option key={option} value={option}>
                        {option}
                    </option>
                })
            }
        </select>
    </div>
  )
}

export default React.forwardRef(Select)