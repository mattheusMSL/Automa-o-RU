import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                'flex hover:text-[#6d442d] hover:underline hover:underline-offset-8 ' +
                (active ? 'text-[#A75B33]' : 'text-[#bb7048]') +
                className
            }
        >
            {children}
        </Link>
    );
}
