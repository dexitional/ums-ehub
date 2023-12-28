import { useSelector,useDispatch } from 'react-redux';
const { REACT_APP_THEME_TAG: themetag  } = import.meta.env; 
const { setting } = useSelector(state => state.theme );

export const favicon = `./assets/img/logo/${themetag}/favicon/favicon.ico`;
  
export const themeLoader = () => {
    const ui = setting.clients.find( r => r.tag === themetag)
    console.log(ui)
    /* const uccbg = getComputedStyle(document.documentElement).getPropertyValue('--uccbg'); */
    // Set Theme
    document.documentElement.style.setProperty('--uccbg', `${ui && ui.ui.uccbg}`);
    document.documentElement.style.setProperty('--ucctopbar', `${ui && ui.ui.ucctopbar}`);
    document.documentElement.style.setProperty('--uccmain', `${ui && ui.ui.uccmain}`);
    document.documentElement.style.setProperty('--uccmain-dark', `${ui && ui.ui.uccmaindark}`);
    document.documentElement.style.setProperty('--uccsec', `${ui && ui.ui.uccsec}`);
    document.documentElement.style.setProperty('--uccsec-dark', `${ui && ui.ui.uccmaindark}`);
    document.documentElement.style.setProperty('--uccmain-light', `${ui && ui.ui.uccmainlight}`);
    document.documentElement.style.setProperty('--uccaccent', `${ui && ui.ui.uccaccent}`);
    document.documentElement.style.setProperty('--uccaccent-dark', `${ui && ui.ui.uccaccentdark}`);
}