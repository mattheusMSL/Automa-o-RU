import Button from '@/Components/UI/Button';
import NavBar from '@/Components/UI/NavBar';
import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import Decore from '/resources/js/assets/Decore.svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Welcome(auth: PageProps) {
    return (
        <>
            <Head title="Welcome" />
            <header>
                <NavBar />
            </header>
            <main className="relative flex h-screen w-full flex-col items-center justify-center px-4">
                <section className="-mr-96 -mt-80 flex max-w-[800px] flex-col items-center justify-center space-y-12 text-center">
                    <h1 className="text-4xl font-bold text-[#3A6D41] sm:text-5xl md:text-6xl xl:text-6xl">
                        Compre suas{' '}
                        <span className="text-[#FFAB00]">fichas</span> de forma{' '}
                        <br className="hidden md:block" /> rápida, fácil e
                        segura!
                    </h1>
                    <p className="max-w-2xl text-lg xl:text-xl">
                        Bem-vindo ao nosso aplicativo de fichas do Restaurante
                        Universitário! Com ele, você pode comprar e gerenciar
                        suas fichas, garantindo mais{' '}
                        <br className="hidden md:block" /> comodidade para suas
                        refeições no dia a dia acadêmico.
                    </p>
                    <Link href={route('login')}>
                        <Button
                            title={'Comprar Agora'}
                            className="w-full sm:w-auto"
                        />
                    </Link>
                </section>

                {/* Imagem de fundo ajustada */}
                <figure className="absolute left-0 bg-no-repeat">
                    <img
                        src={Decore}
                        alt="background-img"
                        className="h-auto w-full"
                    />
                </figure>
            </main>
            {/* 
                <section>
                    <figure>
                        <img
                            src={Decore}
                            alt="background-img"
                            className="relative z-0 overflow-hidden bg-auto bg-no-repeat xl:pt-8"
                        />
                    </figure>
                </section> */}
        </>
    );
}
