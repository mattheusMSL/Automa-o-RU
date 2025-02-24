import NavLink from '@/Components/NavLink';

export default function NavBar() {
    return (
        <div className="relative flex justify-center pb-6 pt-14">
            <nav>
                <ul className="lg:gap-30 flex items-center justify-between align-middle sm:gap-20 md:gap-20 xl:gap-20">
                    <h1 className="sm:pr-30 pr-16 text-2xl text-[#A75B33] md:pr-[10em] lg:pr-[20em] xl:pr-[30em]">
                        <a href="./">Logo</a>
                    </h1>
                    <li>
                        <NavLink href={route('homepage')} active={false}>
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
        </div>
    );
}
