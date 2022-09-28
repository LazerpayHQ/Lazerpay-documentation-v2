import { useRef, useState, useEffect } from "react";

export const useCloseContext = (initialValue = false) => {
    const ref = useRef<any>(null);
    const [visible, setVisible] = useState<boolean>(initialValue);

    const handleClickOutside = (e: any) => {
        if (ref.current && !ref.current.contains(e.target)) setVisible(false);
    };

    const handleKeyPress = (e: any) => {
        if (e.key === "Escape") setVisible(false);
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        document.addEventListener("keydown", handleKeyPress, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
            document.removeEventListener("keydown", handleKeyPress, true);
        };
    }, [ref]);

    return { visible, setVisible, ref };
};