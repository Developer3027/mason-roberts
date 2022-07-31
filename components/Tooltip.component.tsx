import { MutableRefObject, ReactNode, useRef } from "react";

interface ToolObject {
  children: ReactNode;
  tooltipText: string;
}

export default function Tooltip( {children, tooltipText}: ToolObject ) {
    const tipRef = useRef() as MutableRefObject<HTMLDivElement>;
    function handleMouseEnter() {
        tipRef.current.style.opacity = "1";
        tipRef.current.style.marginLeft = "20px";
    }
    function handleMouseLeave() {
        tipRef.current.style.opacity = "0";
        tipRef.current.style.marginLeft = "10px";
    }
    return (
        <div
            className="relative flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="absolute whitespace-no-wrap bg-white text-black px-4 py-2 rounded flex justify-center items-center transition-all duration-150 w-32"
                style={{ top: "-55%", left: "-50px", opacity: 0 }}
                ref={tipRef}
            >
                {/* <div
                    className="bg-black h-3 w-3 absolute"
                    style={{ left: "-6px", transform: "rotate(45deg)" }}
                /> */}
                {tooltipText}
            </div>
            {children}
        </div>
    );
}