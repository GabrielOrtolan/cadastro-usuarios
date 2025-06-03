import { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Paper
} from '@mui/material';

export default function FormularioUsuario({ onCadastrar }) {
  const [dados, setDados] = useState({
    nome: '',
    email: '',
    telefone: '',
    nascimento: '',
    endereco: '',
    cidade: '',
    estado: '',
    cep: ''
  });

  const handleChange = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const camposVazios = Object.values(dados).some(valor => valor.trim() === '');
    if (camposVazios) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    onCadastrar(dados);

    // Limpar o formulário
    setDados({
      nome: '',
      email: '',
      telefone: '',
      nascimento: '',
      endereco: '',
      cidade: '',
      estado: '',
      cep: ''
    });
  };

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 4, maxWidth: 700, mx: 'auto' }}>
      <Typography variant="h5" sx={{ textAlign: 'center', mb: 1, fontWeight: 'bold', color: '#1976d2' }}>
        Cadastro de Usuário
      </Typography>
      <Typography variant="body2" sx={{ textAlign: 'center', mb: 3 }}>
        Preencha os dados abaixo para cadastrar um novo usuário no sistema
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Nome Completo *"
            name="nome"
            value={dados.nome}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email *"
            name="email"
            value={dados.email}
            onChange={handleChange}
            type="email"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Telefone *"
            name="telefone"
            value={dados.telefone}
            onChange={handleChange}
            placeholder="(11) 99999-9999"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Data de Nascimento *"
            name="nascimento"
            value={dados.nascimento}
            onChange={handleChange}
            placeholder="dd/mm/aaaa"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Endereço *"
            name="endereco"
            value={dados.endereco}
            onChange={handleChange}
            placeholder="Rua, número, bairro"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Cidade *"
            name="cidade"
            value={dados.cidade}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Estado *"
            name="estado"
            value={dados.estado}
            onChange={handleChange}
            placeholder="UF"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="CEP *"
            name="cep"
            value={dados.cep}
            onChange={handleChange}
            placeholder="00000-000"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" fullWidth onClick={handleSubmit}>
            Cadastrar Usuário
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
