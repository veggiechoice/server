import { createConnection } from 'typeorm';

createConnection().then(() => {
  console.log('🛰  - POSTGRES && MONGODB STARTED');
});
