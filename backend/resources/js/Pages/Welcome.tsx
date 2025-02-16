import Button from '@/Components/UI/Button';
import NavBar from '@/Components/UI/NavBar';
import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Welcome(auth: PageProps) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative w-full max-w-2xl bg-[url('@/assets/Decore.svg')] bg-auto bg-no-repeat lg:max-w-7xl">
                <header>
                    <NavBar />
                </header>
                <main className="ml-[38rem] mt-28 flex h-screen w-max flex-col items-center space-y-8 sm:ml-1 md:ml-[34rem]">
                    <h1 className="lg:text-[40em]/20 font-(--font-roboto) text-center text-[3.5rem] font-bold text-[#3A6D41]">
                        Compre suas{' '}
                        <span className="text-[#FFAB00]">fichas</span> de forma{' '}
                        <br className="hidden lg:block" /> rápida, fácil e
                        segura!
                    </h1>
                    <p className="font-(--font-inter) text-center text-sm leading-relaxed sm:text-base lg:text-lg">
                        Bem-vindo ao nosso aplicativo de fichas do Restaurante
                        Universitário! Com <br className="hidden lg:block" />{' '}
                        você pode comprar e gerenciar suas fichas, garantindo
                        mais <br className="hidden lg:block" /> comodidade para
                        suas suas refeições no dia a dia acadêmico.
                    </p>
                    <Link href={route('login')}>
                        <Button title={'Comprar Agora'} />
                    </Link>
                </main>
                <footer className=""></footer>
            </div>
        </>
    );
}
