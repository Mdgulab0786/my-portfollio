// Simple development server for VS Code
const express = require('express');
const path = require('path');
const { createServer } = require('http');
const { WebSocketServer } = require('ws');
const fs = require('fs');
const chokidar = require('chokidar');

const app = express();
const port = 3000;

// Serve static files from dist/public
app.use(express.static(path.join(__dirname, 'dist/public')));

// API routes
app.use('/api', require('./dist/routes'));

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/public/index.html'));
});

const server = createServer(app);

// WebSocket for hot reload
const wss = new WebSocketServer({ server });

// Watch for file changes
const watcher = chokidar.watch(['client/src/**/*', 'server/**/*'], {
  ignored: /node_modules/
});

watcher.on('change', () => {
  console.log('File changed, reloading...');
  wss.clients.forEach(client => {
    if (client.readyState === 1) {
      client.send('reload');
    }
  });
});

server.listen(port, () => {
  console.log(`Development server running at http://localhost:${port}`);
  console.log('Auto-reload enabled - changes will refresh automatically');
});