import { ReactNode } from "react";
interface MarqueeProps{
    children:ReactNode
}
export default function Marquee({ children }:MarqueeProps){
    return (
        <div className="marquee">
             {children}
        </div>
    );
}
  