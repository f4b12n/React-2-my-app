export default function Layout ({children}) {
    return (
        <>
        <nav className="flex items-center justify-around my-5  ">
            <div className="hover:text-yellow-400 hover:font-extrabold hover:transition duration-700 cursor-pointer">Home</div>
            <div className="hover:text-blue-600 hover:font-extrabold hover:transition duration-700 cursor-pointer">Otros blogs</div>
            <div className="hover:text-red-600 hover:font-extrabold hover:transition duration-700 cursor-pointer">Salir</div>
        </nav>
        <main className="ml-14 mr-14" >
            {children}
        </main>
        <footer className="mb-10 mt-10 flex items-center justify-center bg-slate-500" >footer</footer>
        </>
    )
}