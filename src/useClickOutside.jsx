import React from "react";

let useClickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
        let ifHandler = (event) => {
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", ifHandler);

        return () => {
            document.removeEventListener("mousedown", ifHandler);

        }
    });

    return domNode
}

export default useClickOutside;