import NavLink from '@/Components/NavLink';

export default function NavBar() {
    return (
        <nav className="font-(--font-roboto) left-0 right-0 top-0 ml-64 mt-16 flex items-center justify-between">
            <h1 className="font-(--font-roboto) text-2xl text-[#A75B33]">
                <a href="./">Logo</a>
            </h1>
            <ul className="flex gap-8 sm:gap-6 md:gap-10 lg:gap-16">
                <li>
                    <NavLink
                        className="text-[#A75B33]"
                        href={route('homepage')}
                        active={false}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink href={route('login')} active={false}>
                        Log in
                    </NavLink>
                </li>
                <li>
                    <NavLink href={route('register')} active={false}>
                        Cadastro
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
