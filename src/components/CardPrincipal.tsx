import Image from "next/image";
interface PropsCard{
    temp:number | null;
    veloc:number | null;
    sensacao:number | null;
}
export default function CardPrincipal(props:PropsCard){
    return(
        <div className="flex flex-col cardprinc w-8/12 h-3/4 overflow-hidden">
            <div className="h-1/12 w-full flex items-center justify-center camp-t">
                <h1 className="font-bold text-white md:text-4xl sm:text-xl">Foz do Iguaçu-PR</h1>
            </div>
            <div className="h-full w-full md:flex md:flex-row sm:flex sm:flex-col justify-between items-center">
                
                <div className="h-full float-left">
                    <Image className="h-full" src="/img/foziguacu.jpeg" alt="foz-iguacu" />
                </div>
                <div className="h-11/12 w-full ">
                    <table>
                        <thead>
                            <tr>
                                <td className="font-bold text-black md:text-5xl md:p-10 text-center sm:text-xl sm:p-1">Tempo atual</td>
                                <td className="font-bold text-black md:text-5xl md:p-10 text-center sm:text-xl sm:p-1">Dados</td>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                                <td className="text-color-gray-700  md:text-3xl md:p-10 sm:p-1">Temperatura</td>
                                <td className="text-color-gray-700  md:text-3xl md:p-10 sm:p-1">{props.temp}°C</td>
                            </tr>
                            <tr>
                                <td className="text-color-gray-700  md:text-3xl md:p-10 sm:p-1">Sensação Térmica</td>
                                <td className="text-color-gray-700  md:text-3xl md:p-10 sm:p-1">{props.sensacao}°C</td>
                            </tr>
                            <tr>
                                <td className="text-color-gray-700  md:text-3xl md:p-10 sm:p-1">Velocidade do vento</td>
                                <td className="text-color-gray-700  md:text-3xl md:p-10 sm:p-1">{props.veloc}km/h</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
