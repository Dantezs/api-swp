const express = require('express');
const app = express();


// Conjunto de dados simulado (substitua com seus próprios dados)
const elementos = [
  { id: 1, nome: 'Elemento 1' },
  { id: 2, nome: 'Elemento 2' },
  { id: 3, nome: 'Elemento 3' }
];


// Rota GET para procurar um elemento pelo ID
app.get('/api/elementos/:id', (req, res) => {
  const id = parseInt(req.params.id);

  // Procure o elemento pelo ID
  const elemento = elementos.find(item => item.id === id);

//rota quando o elemento não é definido
  app.use((req, res, next) => {
    res.status(404).json({ suporte: 'https://discord.gg/HZn99juDtK' });
  });

  res.json(elemento);
});

// Inicie o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});

