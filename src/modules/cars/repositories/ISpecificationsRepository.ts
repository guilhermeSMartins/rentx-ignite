import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';

export interface ICreateSpecificationsDTO {
  name: string;
  description: string;
}

export interface ISpecificationsRepository {
  create({ description, name }: ICreateSpecificationsDTO): Promise<void>;
  findByName(name: string): Promise<Specification | undefined>;
  findByIds(ids: string[]): Promise<Specification[]>;
}
