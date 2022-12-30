const Card: React.FC<React.HTMLProps<HTMLDivElement>> = ({ ...props }) => {
    return <div className="p-5 lg:mx-0 md:p-20 md:border-2 rounded-xl border-gray-200" {...props} />
}

export default Card;