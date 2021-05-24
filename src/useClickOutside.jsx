import React, { useEffect, useRef} from "react";

let useClickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
        let ifHandler = (event) => {
            if (!domNode.current.contains(event.target)) {
                handler();
            }

            // if(event.target.id === "userPatch"){
            //    console.log(event.target.id)
            // }
        };
        document.addEventListener("mousedown", ifHandler);

        return () => {
            document.removeEventListener("mousedown", ifHandler);

        }
    });

    return domNode
}

export default useClickOutside;