import './module-a';
import { MydataBaseClassic } from './db/mydatabase-classic';

export const moduleBinstance = MydataBaseClassic.getInstance();

moduleBinstance.createUser({
  name: 'lucas',
  email: 'lucas@gmail.com',
});
moduleBinstance.createUser({
  name: 'joao',
  email: 'joao@gmail.com',
});
moduleBinstance.createUser({
  name: 'marcela',
  email: 'marcela@gmail.com',
});

moduleBinstance.findAllUsers();
