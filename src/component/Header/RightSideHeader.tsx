import { useState } from 'react';
import { Register, RightSide } from '../../assets/Styles/Header';
import { HomeProps } from '../../Interface/Screens';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, List, Box } from '@mui/material';

export default function RightSideHeader({ isTablet }: HomeProps) {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleDrawer = (open: boolean) => () => {
        setOpenMenu(open);
    };

    const sideMenu = (
        <Box
            sx={{
                width: 250,
                backgroundColor: '#112157',
                height: '100%',
                color: '#fff',
                padding: '20px',
            }}
        >
            <List>
                <h1 style={{ fontSize: '18px', marginBottom: '10px', marginTop: '50px' }}>Condomínio</h1>
                <h1 style={{ fontSize: '18px', marginBottom: '10px' }}>Fórum</h1>
                <h1 style={{ fontSize: '18px', marginBottom: '10px' }}>Guia</h1>
                <h1 style={{ fontSize: '18px', marginBottom: '10px' }}>Artigos</h1>
                <h1 style={{ fontSize: '18px', marginBottom: '10px' }}>Ferramentas</h1>
                <h1 style={{ fontSize: '18px', marginBottom: '10px' }}>Cotar Imóvel</h1>
                <h1 style={{ fontSize: '18px', marginBottom: '10px' }}>Planos</h1>
                <h1 style={{ fontSize: '18px', marginBottom: '10px' }}>Entrar</h1>
                <Register style={{ fontSize: '18px', marginTop: '30px' }}>
                    <p>CADASTRA-SE</p>
                </Register>
            </List>
        </Box>
    );

    return (
        <>
            <RightSide>
                {isTablet ? (
                    <>
                        <MenuIcon
                            style={{ fontSize: '40px', color: '#fff', width: '150px', height: '100px' }}
                            onClick={toggleDrawer(true)}
                        />
                        <Drawer anchor="right" open={openMenu} onClose={toggleDrawer(false)}>
                            {sideMenu}
                        </Drawer>
                    </>
                ) : (
                    <>
                        <h1>Cotar Imóvel</h1>
                        <h1>Planos</h1>
                        <h1>Entrar</h1>
                        <Register>
                            <p>CADASTRA-SE</p>
                        </Register>
                    </>
                )}
            </RightSide>
        </>
    );
}
