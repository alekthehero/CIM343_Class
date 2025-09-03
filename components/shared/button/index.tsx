const Button = ({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button type="button" onClick={onClick} className={`px-2 py-1 rounded bg-gray-300 hover:bg-gray-500 ${className}`}>
      {children}
    </button>
  );
};

export default Button;
