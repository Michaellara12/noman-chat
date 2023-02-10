import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from '@mui/material';

// Firebase
import { DB } from 'src/auth/FirebaseContext';
import { doc, updateDoc, onSnapshot } from "firebase/firestore"; 
import { useAuthContext } from 'src/auth/useAuthContext';

// 
import { useSnackbar } from "src/components/snackbar"
import { SelectChangeEvent } from '@mui/material';

// <--------------------------------------->//

export default function AccountProfileDetails() {

  const { user } = useAuthContext()

  const docRef = doc(DB, "users", user?.uid)

  const { enqueueSnackbar } = useSnackbar();

  const [values, setValues] = useState({
    nombre: user?.displayName,
    userEmail: user?.email,
    chatbotName: '',
    chatbotPhone: '',
    chatbotJob: '',
    chatbotInfo: ''
  });
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    const unsubscribe = onSnapshot(docRef, (doc) => {
        setValues({
          ...values,
          chatbotName: doc.data()?.chatbotName,
          chatbotPhone: doc.data()?.chatbotPhone,
          chatbotJob: doc.data()?.chatbotJob,
          chatbotInfo: doc.data()?.chatbotInfo
        })
    })

    return unsubscribe
    
  }, [])

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleChangeSelector = (event:SelectChangeEvent<string>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  async function updateChatbotInfo(e:React.MouseEvent<HTMLElement>) {
      e.preventDefault()
      setLoading(true)
      await updateDoc(docRef, {
        chatbotName: values.chatbotName,
        chatbotPhone: values.chatbotPhone,
        chatbotJob: values.chatbotJob,
        chatbotInfo: values.chatbotInfo
      })

      // setOpen(true)
      setLoading(false)
      enqueueSnackbar('Información del chatbot actualizada')
  }

  const handleClose = (event:React.MouseEvent<HTMLElement>, reason:string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
    <form
      autoComplete="off"
      noValidate
    >
      <Card>
        <CardHeader
          subheader="Edita tu información personal"
          title="Perfil"
          sx={{
            mb: '1.6rem'
          }}
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                name="nombre"
                onChange={handleChange}
                required
                value={values.nombre}
                variant="outlined"
                disabled
              />
            </Grid>

          
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                name="userEmail"
                onChange={handleChange}
                required
                value={values.userEmail}
                variant="outlined"
                disabled
                type="email"
              />
            </Grid>
           
          </Grid>
        </CardContent>
        <Divider />

        {/* Chatbot config */}
        <Typography variant='h6' 
          sx={{pt: 2, ml: 3}}
        >
          Ajustes de WhatsApp Noman
        </Typography>

        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Nombre del chatbot"
                name="chatbotName"
                required
                value={values.chatbotName}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Número de celular WhatsApp"
                name="chatbotPhone"
                required
                value={values.chatbotPhone}
                onChange={handleChange}
                variant="outlined"
                type="number"
              />
            </Grid>
          
            <Grid
              item
              lg={12}
              md={12}
              xs={12}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Profesión</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value="Chatbot"
                  label="Profesión"
                  name="chatbotJob"
                  value={values.chatbotJob}
                  onChange={handleChangeSelector}
                >
                  <MenuItem value="Chatbot">Chatbot</MenuItem>
                  <MenuItem value="Abogado">Abogado</MenuItem>
                  <MenuItem value="Alumno">Alumno</MenuItem>
                  <MenuItem value="Amigo">Amigo</MenuItem>
                  <MenuItem value="Artista Gráfico">Artista Gráfico</MenuItem>
                  <MenuItem value="Asistente">Asistente</MenuItem>
                  <MenuItem value="Compañero de trabajo">Compañero de trabajo</MenuItem>
                  <MenuItem value="Consejero">Consejero</MenuItem>
                  <MenuItem value="Contador">Contador</MenuItem>
                  <MenuItem value="Diseñador Web">Diseñador Web</MenuItem>
                  <MenuItem value="Entrenador Físico Personal">Entrenador Físico Personal</MenuItem>
                  <MenuItem value="Entrenador Motivacional Personal">Entrenador Motivacional Personal</MenuItem>
                  <MenuItem value="Financiero">Financiero</MenuItem>
                  <MenuItem value="Inversionista">Inversionista</MenuItem>
                  <MenuItem value="Mercadólogo">Mercadólogo</MenuItem>
                  <MenuItem value="Nutricionista">Nutricionista</MenuItem>
                  <MenuItem value="Periodista">Periodista</MenuItem>
                  <MenuItem value="Poeta">Poeta</MenuItem>
                  <MenuItem value="Político">Político</MenuItem>
                  <MenuItem value="Profesor">Profesor</MenuItem>
                  <MenuItem value="Programador">Programador</MenuItem>
                  <MenuItem value="Publicista">Publicista</MenuItem>
                  <MenuItem value="Redactor">Redactor</MenuItem>

                </Select>
              </FormControl>
            </Grid>

            <Grid
              item
              lg={12}
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="p. ej. Respuestas breves, formales y suele ser muy amable"
                label="Características y cualidades del chatbot"
                name="chatbotInfo"
                value={values.chatbotInfo}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
       
          </Grid>
        </CardContent>
        
        <Divider />
        
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          
          <Button
            color="primary"
            variant="contained"
            disabled={loading}
            onClick={updateChatbotInfo}
          >
            Guardar
          </Button>
        </Box>
      </Card>
      <Typography variant='body2' sx={{mt: 2}}>
            *Recuerda que estas hablando con un bot, el objetivo de este Chat bot es ayudarte a explorar diferentes formas de generar ideas y contenido, siempre verifica la información recibida, el bot esta a tu disposición y las conversaciones son responsabilidad del usuario.
          </Typography>
    </form>
    </>
  );
};
