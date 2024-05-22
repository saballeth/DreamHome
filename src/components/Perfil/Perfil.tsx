import Tab from '@mui/material/Tab';
import Avatar from './Avatar/Avatar';
import './Perfil.css';
import { useState } from 'react';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import TabContext from '@mui/lab/TabContext';
import InfoPerfil from './InfoPerfil/InfoPerfil';
import InteresesPerfil from './InteresesPerfil/InteresesPerfil';
import EditPerfil from './EditPerfil/EditPerfil';
import { useAuth } from '@/Context/AuthContext';

interface StyledTabsProps {
    children?: React.ReactNode;
    value: string;
    onChange: (event: React.SyntheticEvent, newValue: string) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
    },
    '& .MuiTabs-scroller': {
        display: 'flex',
        justifyContent: 'center',
    },
});

interface StyledTabProps {
    label: string;
    value: string;
}

const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    margin: theme.spacing(3),
    marginTop: '20px',
    marginBottom: '0',
    borderRadius: '8px',
    color: 'var(--black)',
    '&.Mui-selected': {
        color: 'var(--white)',
        background: 'var(--darkOrange)',
    },
}));

const Perfil = () => {
    const [value, setValue] = useState("1");
    const auth = useAuth();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className="contenedor__perfil">
            <div className="avatar__perfil">
                <div className="avatar">
                    <div className="avatar__info-nombres">
                        <h2 className="avatar__nombre">{auth.user.nombre} {auth.user.apellido}</h2>
                        <p className="avatar__usuario">@{auth.user.username}</p>
                    </div> 
                    <Avatar />
                </div>
                <div className="avatar__info">
                    <div className="avatar__info-caja">
                        <h4 className="info-caja email">{auth.user.email}</h4>
                        <p className="titulo email__titulo">Correo Electronico</p>
                    </div>
                </div>
            </div>
            <div className="info__perfil">
                <TabContext value={value}>
                    <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
                        <StyledTab label="Perfil" value="1" />
                        <StyledTab label="Intereses" value="2" />
                        <StyledTab label="Editar Perfil" value="3" />
                    </StyledTabs>
                    <TabPanel value="1">
                        <InfoPerfil/>
                    </TabPanel>
                    <TabPanel value="2">
                        <InteresesPerfil/>
                    </TabPanel> 
                    <TabPanel sx={{overflowY:'auto',height: '80%'}} value="3">
                        <EditPerfil/>
                    </TabPanel>
                </TabContext>
            </div>
        </div>
    );
}

export default Perfil;
