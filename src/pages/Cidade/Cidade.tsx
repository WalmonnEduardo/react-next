import { useState,useEffect } from "react";
import Topo from "@/components/Topo";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

export default function Cidade() {
  const [tempn, setTempn] = useState<number | null>(null);
  const [velocn, setVelocn] = useState<number | null>(null);
  const [sensacaon, setSensacaon] = useState<number | null>(null);  
  const [temps, setTemps] = useState<number | null>(null);
  const [velocs, setVelocs] = useState<number | null>(null);
  const [sensacaos, setSensacaos] = useState<number | null>(null);  
  const [tempr, setTempr] = useState<number | null>(null);
  const [velocr, setVelocr] = useState<number | null>(null);
  const [sensacaor, setSensacaor] = useState<number | null>(null);  
  useEffect(() => {
    let cidade1: string = "Natal";
    let cidade3: string = "São_Paulo";
    let cidade2: string = "Rio_de_Janeiro";
    fetch(`https://api.weatherapi.com/v1/current.json?key=ffb45b876e37459fbe1145531250503&q=${cidade1}&aqi=no`)
      .then(response => response.json())
      .then(data => {
        setTempn(data.current.temp_c?data.current.temp_c:0);
        setVelocn(data.current.wind_kph?data.current.wind_kph:0);
        setSensacaon(data.current.feelslike_c?data.current.feelslike_c:0);
      })
      .catch(error => console.error("Erro ao buscar os dados:", error));
      fetch(`https://api.weatherapi.com/v1/current.json?key=ffb45b876e37459fbe1145531250503&q=${cidade2}&aqi=no`)
      .then(response => response.json())
      .then(data => {
        setTemps(data.current.temp_c?data.current.temp_c:0);
        setVelocs(data.current.wind_kph?data.current.wind_kph:0);
        setSensacaos(data.current.feelslike_c?data.current.feelslike_c:0);
      })
      .catch(error => console.error("Erro ao buscar os dados:", error));
      fetch(`https://api.weatherapi.com/v1/current.json?key=ffb45b876e37459fbe1145531250503&q=${cidade3}&aqi=no`)
      .then(response => response.json())
      .then(data => {
        setTempr(data.current.temp_c?data.current.temp_c:0);
        setVelocr(data.current.wind_kph?data.current.wind_kph:0);
        setSensacaor(data.current.feelslike_c?data.current.feelslike_c:0);
      })
      .catch(error => console.error("Erro ao buscar os dados:", error));
  }, []);
  return (
    <div className="h-full w-full flex flex-col min-h-screen">
      <Topo></Topo>
      <main className="flex items-center justify-evenly flex-col flex-grow h-10 w-full main-princ">
        <Card temp={tempn} veloc={velocn} sensacao={sensacaon} nome="Natal-RN" img="/img/nat.jpeg"></Card>
        <Card temp={temps} veloc={velocs} sensacao={sensacaos} nome="São Paulo-SP" img="/img/sao.jpeg"></Card>
        <Card temp={tempr} veloc={velocr} sensacao={sensacaor} nome="Rio de Janeiro-RJ" img="/img/rio.jpeg"></Card>
      </main>
      <Footer></Footer>
    </div>
  );
}
