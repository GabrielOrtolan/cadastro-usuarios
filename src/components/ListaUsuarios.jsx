import { Paper, Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';

export default function ListaUsuarios({ usuarios }) {
  return (
    <Paper elevation={3} sx={{ p: 4, mt: 4, maxWidth: 700, mx: 'auto' }}>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>Usuários Cadastrados</Typography>
      <Typography variant="body2" sx={{ textAlign: 'center', mb: 2 }}>
        Lista de todos os usuários registrados no sistema
      </Typography>

      {usuarios.length === 0 ? (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <GroupIcon sx={{ fontSize: 60, color: '#90a4ae' }} />
          <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 'bold' }}>Nenhum usuário cadastrado</Typography>
          <Typography variant="body2">Comece cadastrando o primeiro usuário na aba de cadastro.</Typography>
        </Box>
      ) : (
        <List>
          {usuarios.map((user, i) => (
            <ListItem key={i} divider>
              <ListItemText
                primary={`${user.nome} - ${user.email}`}
                secondary={`${user.telefone}, ${user.cidade}/${user.estado} - ${user.cep}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
}
