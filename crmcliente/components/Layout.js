import React from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import {useRouter} from 'next/router';



const Layout = ({children}) =>{

    //Hook de router
    const router = useRouter();

    return(
        <>
            <Head>
                <title>CRM - Administración de Clientes</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" crossOrigin="anonymous"></link>
                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
            </Head>

            {router.pathname === '/login' || router.pathname === '/nuevacuenta' ?(
                <div className="bg-gray-800 min-h-screen flex flex-col justify-center">
                    <div>
                        {children}
                    </div>
                    
                </div>

            ):(
                <div className="bg-gray-200 min-h-screen">
                <div className="flex min-h-screen">
                    <Sidebar></Sidebar>

                    <main className="sm:w-2/3 xl:w-4/5 sm:min-h-screen p-5">
                        <Header></Header>
                        {children}
                    </main>
                    
                </div>
                
            </div>

                
            )}

            
            
        </>

    );
}

export default Layout;