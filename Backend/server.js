const app = require('./app');
const port = process.env.PORT || 3000;

// ✅ Start the Express server
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
