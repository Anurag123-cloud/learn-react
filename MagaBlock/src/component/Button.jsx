import React from 'react'

const Button = ({
    children,
    type="button",
    bgcolor="bg-blue-500",
    text="text-white",
    className="",
    ...props
}) => {
  return (
   <button className={`px-4 py-2 rounded-lg ${className} ${text} ${bgcolor}`}  {...props}>
    {children}
   </button>
  )
}

export default Button
