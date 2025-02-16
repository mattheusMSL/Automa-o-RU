import NavLink from '@/Components/NavLink';

export default function NavBar() {
    return (
        <nav className="fixed left-0 right-0 top-0 mx-6 mt-16 flex items-center justify-between font-roboto text-[#A75B33]">
            <h1 className="text-2xl font-bold">
                <a href="./">Logo</a>
            </h1>
            <ul className="flex gap-8 sm:gap-6 md:gap-10 lg:gap-16">
                <li>
                    <NavLink href="/" active={true}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink href="/login" active={false}>
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink href="/register" active={false}>
                        Cadastro
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
