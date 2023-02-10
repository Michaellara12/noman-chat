// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// icons
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import TagIcon from '@mui/icons-material/Tag';
import EmailIcon from '@mui/icons-material/Email';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GoogleIcon from '@mui/icons-material/Google';

// ----------------------------------------------------------------------

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general',
    items: [
      { title: 'Mis proyectos', path: PATH_DASHBOARD.home, icon: <HistoryEduIcon /> },
      { title: 'Cuenta', path: PATH_DASHBOARD.cuenta, icon: <AccountCircleIcon /> },
      { title: '¿Cómo usar Noman?', path: "https://www.youtube.com/watch?v=F5DXa8RX5vs", icon: <InfoIcon /> },
    ],
  },

  // ----------------------------------------------------------------------
  {
    subheader: 'Plantillas',
    items: [
      {
        title: 'SEO & contenido',
        path: PATH_DASHBOARD.user.root,
        icon: <ContentPasteSearchIcon />,
        children: [
          { title: 'Ejes temáticos', path: 'temp_ejes_tematico' },
          { title: 'Artículo', path: 'temp_ejes_articulo' },
          { title: 'Párrafo', path: 'temp_parrafo' },
          { title: 'Meta título', path: 'temp_titulo' },
          { title: 'Meta descripción', path: 'temp_seo_descripcion' },
          { title: 'Resumen', path: 'temp_resumen' },
          { title: 'Lluvia de ideas', path: 'temp_llu_ideas' },
          { title: 'Texto Personalizado', path: 'temp_custom' },
        ],
      },
      {
        title: 'Redes sociales',
        path: PATH_DASHBOARD.user.root,
        icon: <TagIcon />,
        children: [
          { title: 'Publicación Instagram', path: 'temp_insta' },
          { title: 'Publicación Facebook', path: 'temp_face' },
          { title: 'Publicación Twitter', path: 'temp_twitter' },
          { title: 'Publicación LinkedIn',  path: 'temp_linkedin' },
          { title: 'Respuesta a comentarios', path: 'temp_resp_comentarios' },
          { title: 'Hashtags', path: 'temp_hashtags' },
        ],
      },
      {
        title: 'Email',
        path: PATH_DASHBOARD.user.root,
        icon: <EmailIcon />,
        children: [
          { title: 'Asuntos de correo', path: 'temp_asuntos' },
          { title: 'Correo eléctronico', path: 'temp_email' },
        ],
      },
      {
        title: 'E-commerce',
        path: PATH_DASHBOARD.user.root,
        icon: <ShoppingCartIcon />,
        children: [
          { title: 'Descripción de producto', path: 'temp_des_producto' },
          { title: 'Objeciones', path: 'temp_objeciones' },
          { title: 'Opiniones', path: 'temp_opinion' },
        ],
      },
      {
        title: 'Anuncios',
        path: PATH_DASHBOARD.user.root,
        icon: <GoogleIcon />,
        children: [
          { title: 'Título Anuncio de Google', path: 'temp_titulo_ad' },
          { title: 'Descripción Anuncio Google', path: 'temp_des_ad' },
        ],
      },
    ],
  },
];

export default navConfig;
