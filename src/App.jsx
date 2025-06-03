import { useState, useEffect } from 'react';
import Navegacao from './components/Navegacao';
import FormularioUsuario from './components/FormularioUsuario';
import ListaUsuarios from './components/ListaUsuarios';
import { Container, Typography } from '@mui/material';

function App() {
  const [abaAtual, setAbaAtual] = useState(0);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const salvos = JSON.parse(localStorage.getItem('usuarios')) || [];
    setUsuarios(salvos);
  }, []);

  const cadastrarUsuario = (usuario) => {
    const novaLista = [...usuarios, usuario];
    setUsuarios(novaLista);
    localStorage.setItem('usuarios', JSON.stringify(novaLista));
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ textAlign: 'center', mt: 4, fontWeight: 'bold', color: '#1976d2' }}>
        Sistema de Cadastro de Usuários
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', mb: 3 }}>
        Gerencie usuários de forma simples e eficiente. Cadastre novos usuários e visualize todos os dados em um só lugar.
      </Typography>

      <Navegacao abaAtual={abaAtual} setAbaAtual={setAbaAtual} totalUsuarios={usuarios.length} />

      {abaAtual === 0 && <FormularioUsuario onCadastrar={cadastrarUsuario} />}
      {abaAtual === 1 && <ListaUsuarios usuarios={usuarios} />}
    </Container>
  );
}

export default App;
