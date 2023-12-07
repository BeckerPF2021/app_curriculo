import React from "react";

export default function Navbar(props: any) {
    const navStyle = {
        fontFamily: "Times New Roman, serif",
    };

    const linkStyle = {
        textDecoration: "none",
        fontWeight: "normal",
    };

    const headerStyle = {
        fontFamily: "Times New Roman, serif",
        fontSize: "2rem",
    };

    return (
        <>
            <nav style={navStyle} className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-pink-500 text-gray-900 shadow sm:items-baseline w-full">
                <div className="mb-2 sm:mb-0">
                    <h1 className="text-4xl" style={headerStyle}>
                        Sistema de Currículos
                    </h1>
                </div>
                <div>
                    <a href="/" className="text-xl no-underline hover:text-amber-300 ml-2" style={linkStyle}>
                        Início
                    </a>
                    <a href="/curriculos" className="text-xl no-underline hover:text-amber-300 ml-2" style={linkStyle}>
                        Currículos
                    </a>
                </div>
            </nav>
            <div className="text-center">
                <h2 className="text-3xl mt-4" style={{ fontFamily: "Times New Roman, serif" }}>
                    Bem-Vindos ao Sistema de Currículos
                </h2>
                <img src="/curriculo.jpeg" alt="Imagem Centralizada" className="mx-auto mt-2" width="200" />
            </div>
        </>
    );
}
