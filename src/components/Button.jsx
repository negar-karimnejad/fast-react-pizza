/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

function Button({ children, disabled, onClick, varient, type = 'button' }) {
  return (
    <button
      className={`min-w-fit rounded-full bg-yellow-400 px-4 py-2 font-semibold text-gray-800 transition-all hover:bg-yellow-300 ${varient === 'position' && 'absolute right-1 top-7 h-10 items-center text-sm sm:right-1 sm:top-1'} ${
        varient === 'secondary' &&
        'border-2 border-gray-300 bg-gray-200  text-gray-500  hover:bg-gray-100 hover:text-gray-800'
      } ${varient === 'circle' && 'flex h-8 w-8 min-w-px items-center justify-center '}`}
      disabled={disabled}
      type={type}
      varient={varient ? varient : ''}
      onClick={onClick ? onClick : ''}
    >
      {children}
    </button>
  );
}

export default Button;
