const SidebarButton = ({ children, variant }) => {
    const getVariantClasses = () => {
        if (variant === 'selected') {
            return 'rounded-lg bg-[#E6F7F8] text-[#00AD85]';
        }
        return 'text-[#35383E]';
    };

    return (
        <a
            href=""
            className={`px-6 py-4 ${getVariantClasses()} flex items-center gap-2`}
        >
            {children}
        </a>
    );
};
export default SidebarButton;
