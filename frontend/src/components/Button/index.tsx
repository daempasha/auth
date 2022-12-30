const Button: React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({ ...props }) => {
    return <button className="p-1 block w-full text-white rounded-md bg-blue-400 hover:bg-blue-500 active:bg-blue-300 transition-colors outline-none focus:ring-2 ring-offset-2 ring-blue-400" {...props} />
}

export default Button;