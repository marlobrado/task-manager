const Button = ({ children, variant }) => {
    return (
        <button
            className={`flex items-center gap-2 rounded-md px-3 py-2 text-xs font-semibold transition hover:opacity-75 ${variant === 'primary' ? 'bg-[#00AD85] text-white' : 'bg-transparent text-[#333333]'} `}
        >
            {children}
        </button>
    );
};

export default Button;
