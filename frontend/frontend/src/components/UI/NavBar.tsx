
export default function Nav() {
  return (
    <nav className="mt-16 mx-6 flex justify-between items-center text-[#A75B33] gap-[45rem] fixed font-roboto">
      <h1 className="font-bold text-[2em]">
        <a href="./">Logo</a>
      </h1>
      <ul className="flex gap-8 sm:gap-6 md:gap-10 lg:gap-16">
        <li className="hover:underline underline-offset-4 font-bold">
          <a href="">Home</a>
        </li>
        <li className="hover:underline underline-offset-4">
          <a href="">Login</a>
        </li>
        <li className="hover:underline underline-offset-4">
          <a href="">Cadastro</a>
        </li>
      </ul>
    </nav>
  );
}
