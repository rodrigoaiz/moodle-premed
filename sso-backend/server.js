// /home/rodrigo/moodle-premed/sso-backend/server.js
const express = require('express');
const app = express();
const PORT = 3000; // Hardcode el puerto para asegurarnos

app.get('/health', (req, res) => {
  res.status(200).send('OK'); // Mensaje simple
});

app.listen(PORT, () => {
  console.log(`SSO Backend is running on port ${PORT}`);
});

// Esto es para capturar cualquier error no manejado que pueda estar matando la aplicación
process.on('uncaughtException', (err) => {
  console.error('Unhandled Exception:', err);
  process.exit(1); // Cierra el proceso para que Docker pueda reiniciarlo
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
