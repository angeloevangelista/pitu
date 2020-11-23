import app from './app';

const PORT = process.env.PORT || 3333;

app.listen(PORT, () =>
  console.log(`Server is running at http://127.0.0.1:${PORT}`),
);
