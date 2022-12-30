import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ block = false, ...props }) => {
    return <button className={`${block ? "block w-full" : ""} p-1 text-white rounded-md bg-blue-400 hover:bg-blue-500 active:bg-blue-300 transition-colors outline-none focus:ring-2 ring-offset-2 ring-blue-400`} {...props} />
}

export default Button;