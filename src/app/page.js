import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col item-center justify-between p-24">
        <h1  className=" text-blue-600 hover:blue cursor-pointer hover:text-red-500 transition duration-500 hover:font-semibold">Bienvenidos al blog</h1>
        <Link className="text-blue-600 hover:blue cursor-pointer hover:text-red-500 hover:font-semibold" href="/blog">Ir al blog</Link>
    </main>
  )
}