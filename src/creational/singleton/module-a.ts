import { MydataBaseClassic } from './db/mydatabase-classic';
import { moduleBinstance } from './module-b';

const moduleAinstance = MydataBaseClassic.getInstance();

moduleAinstance.createUser({
  name: 'luiz',
  email: 'luiz@gmail.com',
});
moduleAinstance.createUser({
  name: 'jose',
  email: 'jose@gmail.com',
});
moduleAinstance.createUser({
  name: 'marcos',
  email: 'marcos@gmail.com',
});

console.log(moduleAinstance === moduleBinstance);
