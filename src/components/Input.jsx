import React, {useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
    
}, ref){//ref could be a state that is passed from parent that gets updated here
    const id = useId();
    return (
        <div className='w-full'>
            {
            label && <label 
            className='inline-block mb-1 pl-1'
            htmlFor={id}
            >
                {label}
            </label>
            }
            <input
            className={`w-full text-black bg-white border
                 border-black/10 rounded-lg px-3 
                 py-1.5 outline-none duration-150 
                 ${className} `}
                 ref={ref}
                 {...props}
                 id={id}
            />
        </div>
    )
} )

export default Input