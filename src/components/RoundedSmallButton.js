import * as React from "react"

function RoundedSmallButton({ onClick = () => {}, type="primary", children, className="" }) {
    let colors = (type == "secondary") ? "border border-white bg-[transparent] color-white" : "bg-[#2256FF] color-white";

    return <button onClick={onClick} className={`${className} ${colors} text-[11px] min-w-[165px] mr-[18px] outline-none py-[15px] px-[17px] rounded-full`}>
        {children}
    </button>;
}

export default RoundedSmallButton;