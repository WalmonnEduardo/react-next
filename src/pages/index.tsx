import { useState,useEffect } from "react";
import Topo from "@/components/Topo";
import Footer from "@/components/Footer";
import CardPrincipal from "@/components/CardPrincipal";

export default function Home() {
  let cidade: string = "Foz_do_Iguaçu";
  const [temp, setTemp] = useState<number | null>(null);
  const [veloc, setVeloc] = useState<number | null>(null);
  const [sensacao, setSensacao] = useState<number | null>(null);  
  useEffect(() => {
    let cidade: string = "Foz_do_Iguaçu";
    fetch(`https://api.weatherapi.com/v1/current.json?key=ffb45b876e37459fbe1145531250503&q=${cidade}&aqi=no`)
      .then(response => response.json())
      .then(data => {
        setTemp(data.current.temp_c?data.current.temp_c:0);
        setVeloc(data.current.wind_kph?data.current.wind_kph:0);
        setSensacao(data.current.feelslike_c?data.current.feelslike_c:0);
      })
      .catch(error => console.error("Erro ao buscar os dados:", error));
  }, []);
  return (
    <div className="h-full w-full flex flex-col min-h-screen">
      <Topo></Topo>
      <main className="flex items-center justify-center flex-grow h-10 w-full main-princ">
        <CardPrincipal temp={temp} veloc={veloc} sensacao={sensacao}></CardPrincipal>
      </main>
      <Footer></Footer>
    </div>
  );
}
