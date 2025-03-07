import Marquee from "./Marquee";
export default function Footer(){
    return(
        <footer className="mt-auto w-full h-10 flex items-center justify-center">
            <div className="w-4xl">
                <Marquee><p className="text-white">Esse site está aqui para te ajudar a saber o clima na sua cidade</p></Marquee>           
            </div>
        </footer>
    );
}