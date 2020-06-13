import knex from '../database/index';
import {Request, Response} from 'express';
class UsersController{
  async index(request: Request, response: Response) {
    await knex('users').then((results) => {
      return response.json(results);
    });
  }
  async create(request: Request, response: Response){
    const trx = await knex.transaction();
    const { name } = request.body; 
    await trx('users').insert({
      name
    });
    await trx.commit();
    return response.json({
      name: name
    });
  }

  async update(request: Request, response: Response){
    const {name} = request.body;
    const {id} = request.params;

    await knex('users').update({name}).where({id});
    return response.send();
  }

  async delete(request: Request, response: Response){
    const { id } = request.params;
    await knex('users').where({id}).update('deleted_at', new Date());
    //.del();
    return response.send();
  }
}

export default UsersController;