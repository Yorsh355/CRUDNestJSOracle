import { Repository } from 'typeorm';

export async function getNextIdFromRepository(repository: Repository<any>): Promise<number> {
  const queryResult = await repository.query(
    `SELECT MAX(COTIID) as maxId FROM PA_COTIZANTE`
  );

  const maxId = queryResult[0].MAXID as number;
  const addmaxId = maxId ? maxId + 1 : 1;
  return addmaxId;
}

/* asi se utilizaría en los servicios: 
import { Repository } from 'typeorm';

export async function getNextIdFromRepository(repository: Repository<any>): Promise<number> {
  const queryResult = await repository.query(
    `SELECT MAX(COTIID) as maxId FROM PA_COTIZANTE`
  );

  const maxId = queryResult[0].MAXID as number;
  const addmaxId = maxId ? maxId + 1 : 1;
  return addmaxId;
}

*/