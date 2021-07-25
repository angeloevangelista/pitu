import app from './app';

import database from './database';

const PORT = process.env.PORT || 3333;

database
  .sync({ force: true })
  .then(() => 'Database connection established')
  .catch((err) =>
    console.log(`An error occurred while connection to database: ${err}`),
  );

app.listen(PORT, () =>
  console.log(`Server is running at http://127.0.0.1:${PORT}`),
);
