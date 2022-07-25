import service from './service';

const URL = '/projects';

const getAllProjectsService = () => {
	return service.get(`${URL}/`);
};
const getProjectDetailsService = (id) => {
	return service.get(`${URL}/${id}`);
};

const addNewProjectService = (newProject) => {
	return service.post(`${URL}/`, newProject);
};

const deleteProjectService = (id) => {
	return service.delete(`${URL}/${id}`)
};

const updateProjectService = (id) => {
	return service.put(`${URL}/${id}`)
};





export { getAllProjectsService, addNewProjectService, getProjectDetailsService, deleteProjectService, updateProjectService };
