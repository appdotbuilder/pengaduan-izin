import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { ApiExamples } from '@/components/api-examples';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row">
                        <div className="flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-center shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-br-none lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                            <div className="mb-6 text-6xl">🔐</div>
                            <h1 className="mb-4 text-3xl font-bold">Laravel Sanctum API Authentication</h1>
                            <p className="mb-8 text-lg text-[#706f6c] dark:text-[#A1A09A]">
                                Secure API authentication system with token-based access control
                            </p>
                            
                            <div className="mb-8 grid gap-4 text-left lg:grid-cols-2">
                                <div className="rounded-lg border border-[#19140035] p-4 dark:border-[#3E3E3A]">
                                    <div className="mb-2 text-2xl">🚀</div>
                                    <h3 className="mb-2 font-semibold">API Endpoints</h3>
                                    <ul className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                        <li>• POST /api/register</li>
                                        <li>• POST /api/login</li>
                                        <li>• POST /api/logout</li>
                                        <li>• GET /api/user</li>
                                    </ul>
                                </div>
                                
                                <div className="rounded-lg border border-[#19140035] p-4 dark:border-[#3E3E3A]">
                                    <div className="mb-2 text-2xl">🛡️</div>
                                    <h3 className="mb-2 font-semibold">Security Features</h3>
                                    <ul className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                        <li>• Token-based authentication</li>
                                        <li>• Email validation</li>
                                        <li>• Password encryption</li>
                                        <li>• Form request validation</li>
                                    </ul>
                                </div>
                                
                                <div className="rounded-lg border border-[#19140035] p-4 dark:border-[#3E3E3A]">
                                    <div className="mb-2 text-2xl">📝</div>
                                    <h3 className="mb-2 font-semibold">Registration</h3>
                                    <ul className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                        <li>• Name, email & password required</li>
                                        <li>• Password confirmation</li>
                                        <li>• Unique email validation</li>
                                        <li>• Returns API token</li>
                                    </ul>
                                </div>
                                
                                <div className="rounded-lg border border-[#19140035] p-4 dark:border-[#3E3E3A]">
                                    <div className="mb-2 text-2xl">🔑</div>
                                    <h3 className="mb-2 font-semibold">Login System</h3>
                                    <ul className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                        <li>• Email & password validation</li>
                                        <li>• Credential verification</li>
                                        <li>• Secure token generation</li>
                                        <li>• User profile access</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <ApiExamples />
                            
                            <footer className="mt-12 text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                Built with Laravel Sanctum & ❤️ by{" "}
                                <a 
                                    href="https://app.build" 
                                    target="_blank" 
                                    className="font-medium text-[#f53003] hover:underline dark:text-[#FF4433]"
                                >
                                    app.build
                                </a>
                            </footer>
                        </div>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
