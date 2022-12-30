
const FormItem: React.FC<React.HTMLProps<HTMLDivElement>> = ({ children, className }) => {
    return <div className={` my-5 ${className}`}>{children}</div>
}

export default FormItem;