import knex from '../database/index';
import {Request, Response} from 'express';
class ProjectsController{

  async index(request: Request, response: Response) {

    const { user_id, page = 1} = request.query;
    const query = knex('projects')
    .limit(5).offset((Number(page) - 1) * 5);
    const countObj = knex('projects').count();
    
    if (user_id) {
      query.where({user_id})
      .join('users', 'users.id', '=', 'projects.user_id')
      .select('projects.*', 'users.name')
      .where('users.deleted_at', null);
      countObj.where({user_id});
    }
    const [count] = await countObj;
    response.header('X-Total-Count', String(count["count"]));
    const results = await query
    return response.json(results);
  }

  async create(request: Request, response: Response){
    const trx = await knex.transaction();
    const { title, user_id } = request.body;
    await trx('projects').insert({
      title,
      user_id
    });
    await trx.commit();
    response.json({
      title,
      user_id
    });
  }
}

export default ProjectsController;