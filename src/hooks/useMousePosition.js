import React, { useEffect, useState } from 'react';

function useMousePosition() {
 
    const [mousePosition, setMousePosition] = useState({x: null, y: null});

    useEffect(() => {
        const mouseMoveHandler = (e) => {
            const {clientX, clientY} = e;
            setMousePosition({ x: clientX, y: clientY});
        };
        document.addEventListener("mousemove", mouseMoveHandler);

        return () => {
            document.removeEventListener("mousemove", mouseMoveHandler);
        }
    }, []);

  return mousePosition;
}

export default useMousePosition;
