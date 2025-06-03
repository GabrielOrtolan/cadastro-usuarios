import { useState } from 'react';
import { TextField, Button, Typography, Box, Grid, Paper } from '@mui/material';

export default function FormularioUsuario({ onCadastrar }) {
  const [dados, setDados] = useState({
    nome: '', email: '', telefone: '',
    nascimento: '', endereco: '',
    cidade: '', estado: '', cep: ''
  });

  const handleChange = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const camposPreenchidos = Object.values(dados).every(v => v.trim() !== '');
    if (camposPreenchidos) {
      onCadastrar(dados);
      setDados({
        nome: '', email: '', telefone: '',
        nascimento: '', endereco: '',
        cidade: '', estado: '', cep: ''
      });
    } else {
      alert('Preencha todos os campos!');
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 4, maxWidth: 700, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
        Cadastro de Usuário
      </Typography>
      <Typography variant="body2" sx={{ textAlign: 'center', mb: 2 }}>
        Preencha os dados abaixo para cadastrar um novo usuário no sistema
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="Nome Completo *" fullWidth name="nome" value={dados.nome} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Email *" fullWidth name="email" value={dados.email} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Telefone *" fullWidth name="telefone" value={dados.telefone} onChange={handleChange} placeholder="(11) 99999-9999" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Data de Nascimento *" fullWidth name="nascimento" value={dados.nascimento} onChange={handleChange} placeholder="dd/mm/aaaa" />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Endereço *" fullWidth name="endereco" value={dados.endereco} onChange={handleChange} placeholder="Rua, número, bairro" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="Cidade *" fullWidth name="cidade" value={dados.cidade} onChange={handleChange} />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField label="Estado *" fullWidth name="estado" value={dados.estado} onChange={handleChange} placeholder="UF" />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField label="CEP *" fullWidth name="cep" value={dados.cep} onChange={handleChange} placeholder="00000-000" />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained" onClick={handleSubmit}>Cadastrar Usuário</Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
