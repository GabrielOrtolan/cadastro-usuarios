// Componente atualizado

import { Tabs, Tab, Box } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GroupIcon from '@mui/icons-material/Group';

export default function Navegacao({ abaAtual, setAbaAtual, totalUsuarios }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
      <Tabs value={abaAtual} onChange={(_, novaAba) => setAbaAtual(novaAba)}>
        <Tab icon={<PersonAddAltIcon />} label="Cadastrar" />
        <Tab icon={<GroupIcon />} label={`Usuários (${totalUsuarios})`} />
      </Tabs>
    </Box>
  );
}
