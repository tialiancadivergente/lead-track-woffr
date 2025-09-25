"use client";

import { useEffect } from "react";
import TagManager from "react-gtm-module";
import useUserIP from "../hooks/useUserIP";


const GoogleTagManager = () => {
    const userIp = useUserIP(); // Captura o IP no carregamento
    console.log('meu ip =>', userIp);
    useEffect(() => {
        const gtmId = 'GTM-WNV8FX9J';
        console.log('gtmId ====> ', gtmId)
        TagManager.initialize({ gtmId });
    }, []);

    return null; // Esse componente não precisa renderizar nada
};

export default GoogleTagManager;