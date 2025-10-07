"use client";

import { useEffect } from "react";
import TagManager from "react-gtm-module";
import useUserIP from "../hooks/useUserIP";


const GoogleTagManager = () => {
    const userIp = useUserIP(); // Captura o IP no carregamento
    console.log('meu ip =>', userIp);
    
    useEffect(() => {
        // Verifica o subdomínio
        const hostname = window.location.hostname;
        const subdomain = hostname.split('.')[0];
        
        // Define o GTM ID baseado no subdomínio
        const gtmId = subdomain === 'odpr' ? 'GTM-KQWLTDD' : 'GTM-WNV8FX9J';
        
        console.log('subdomain ====> ', subdomain);
        console.log('gtmId ====> ', gtmId);
        
        TagManager.initialize({ gtmId });
    }, []);

    return null; // Esse componente não precisa renderizar nada
};

export default GoogleTagManager;