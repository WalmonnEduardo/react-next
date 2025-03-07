import Link from "next/link"
export default function Topo(){
    return(
        <div className="flex flex-col">
            <div className="w-full h-20 topo1 flex flex-row justify-center items-center">
                <h1 className="text-white text-5xl font-bold">Clima Mundi</h1>
            </div>
            <div className="w-full h-10 topo2 flex justify-center items-center">
                <Link href="/" className="p-2 text-white">Home</Link>
                <Link href="/Cidade/Cidade"  className="p-2 text-white">Outros</Link>
            </div>
        </div>
    )
}
