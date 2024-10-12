import React, { useState, useEffect } from 'react';
import { LeftSide } from '../../assets/Styles/Header';
import slogan from '../../assets/images/slogan.png';

export default function LeftSideHeader() {
    const [isTablet, setIsTablet] = useState(false);

    // Verifica o tamanho da tela
    useEffect(() => {
        const checkScreenSize = () => {
            setIsTablet(window.innerWidth <= 1100); // Define como tablet para larguras de 768px ou menores
        };
        checkScreenSize(); // Checa o tamanho ao carregar

        window.addEventListener('resize', checkScreenSize); // Monitora o redimensionamento da janela
        return () => window.removeEventListener('resize', checkScreenSize); // Remove o listener ao desmontar o componente
    }, []);

    // Condicionalmente renderiza diferentes layouts com base no tamanho da tela
    return (
        <LeftSide>
            {isTablet ? ( // Se for tablet, renderiza o segundo layout
            <img src={slogan} alt="Slogan Imovel Guide" />
            ) : (
                <>
                    <h1>Condomínio</h1>
                    <h1>Fórum</h1>
                    <h1>Guia</h1>
                    <h1>Artigos</h1>
                    <h1>Ferramentas</h1>
                </>
            )}
        </LeftSide>
    );
}
