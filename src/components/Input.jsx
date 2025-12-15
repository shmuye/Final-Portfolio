
const Input = ({icon: Icon, ...props}) => {
    return (
        <div className="flex w-full items-center gap-2 border border-dark-gray px-3 py-2 rounded-md">
            <Icon size={24} className="text-brand-dark dark:text-brand" />
            <input
                className="w-full text-body outline-none bg-transparent dark:text-light-gray"
                {...props}
            />
        </div>

    )
}
export default Input
