import React, {useEffect, useRef, useState} from "react";

export default function useOutsideAlerter () {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false)
    const handleClickOutside = (event) => {
        if(ref.current && !ref.current.contains(event.target)){
             setVisible(false);
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)
        return () => {
            document.removeEventListener("click", handleClickOutside, true)

        }
    },[ref]);


    return {visible, setVisible, ref}
}