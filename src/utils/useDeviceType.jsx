import { useEffect } from "react";

const useDeviceType = (setDeviceType) => {
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');  
        setDeviceType(mediaQuery.matches ? 'mobile' : 'desktop');

        const handleResize = (event) => {
            if (event.matches) {
                setDeviceType("mobile");
            }
            else {
                setDeviceType("desktop");
            }
        };
    
        mediaQuery.addEventListener('change', handleResize);
        return () => {
            mediaQuery.removeEventListener('change', handleResize);
        };
    // Ignore es-lint warning that doesn't recognasize well setDeviceType as stable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export default useDeviceType