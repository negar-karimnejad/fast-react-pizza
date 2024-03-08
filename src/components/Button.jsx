/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

function Button({
  children,
  disabled,
  onClick,
  varient = 'primary',
  type = 'button',
}) {
  const base =
    'min-w-fit rounded-full bg-yellow-400 px-4 py-2 font-semibold text-gray-800 transition-all hover:bg-yellow-300 focus:ring focus:ring-yellow-400 focus:ring-offset-2';

  const styles = {
    primary: base + '',
    position:
      base +
      ' absolute right-1 top-7 h-10 items-center text-sm sm:right-1 sm:top-1',
    secondary:
      base +
      ' border-2 border-gray-300 bg-gray-300 text-gray-500  hover:bg-gray-200 hover:text-gray-800',
    circle: base + ' h-8 w-8 min-w-px flex items-center justify-center',
  };

  return (
    <button
      className={styles[varient]}
      disabled={disabled}
      type={type}
      varient={varient ? varient : ''}
      onClick={onClick ? onClick : () => {}}
    >
      {children}
    </button>
  );
}

export default Button;
