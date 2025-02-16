import { ButtonHTMLAttributes, forwardRef } from 'react';

/* uma interface que declara tipos para titulo e className e que se extende do button do html e pega seus atributos */
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    className?: string;
}

export default forwardRef<HTMLButtonElement, Props>(function Button(
    { title, className = '', ...props },
    ref,
) {
    const defaultClasses =
        'bg-[#3A6D41] border border-[#A75B33] border-2 rounded-full drop-shadow-lg text-white py-6 px-10 shadow-md hover:shadow-2xl transition-all duration-300';

    return (
        <button
            {...props}
            className={`${defaultClasses} ${className}`}
            ref={ref}
        >
            {title}
        </button>
    );
});
