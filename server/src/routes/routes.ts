import express from 'express';
import UsersController from '../controllers/UsersController';
import ProjectsController from '../controllers/ProjectsController';
const routes = express.Router();

const userController = new UsersController();
const projectController = new ProjectsController();
routes.get('/users', userController.index);
routes.post('/users', userController.create);
routes.put('/users/:id', userController.update);
routes.delete('/users/delete/:id', userController.delete);


routes.get('/projects', projectController.index);
routes.post('/projects', projectController.create);
// routes.put('/projects/:id', projectController.update);
// routes.delete('/projects/delete/:id', projectController.delete);
export default routes;

