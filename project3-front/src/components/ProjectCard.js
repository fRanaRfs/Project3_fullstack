import {Link} from 'react-router-dom';
import { deleteProjectService } from '../services/project.services';
import {useState} from 'react'



// We are deconstructing props object directly in the parentheses of the function
function ProjectCard({ title, description, _id, image, fulldescription }) {
	const [ isDeleted, setIsDeleted ] = useState(false);
	const idProject= _id;

	
	

	const handleDeleteProject = async (e) => {
		try {
			await deleteProjectService(idProject);
			setIsDeleted(true);
			
		} catch (err) {
			console.log(err);
		}
	};
	 

	return (
	  <div>
		<div className="ProjectCard card">
		{!isDeleted && (
			<>
			<Link to={`/projects/${_id}`}>
				<h3>{title}</h3>
			</Link>
			
			<p>id: {_id}</p>
			
			<p style={{ maxWidth: '400px' }}>{description} </p>

			<div>
				<img src={image} alt="img" className="imagenes" />
			</div>

			<div>
			<h4>Descripción detallada: {fulldescription}</h4>

			</div>

			
            
			
			<button onClick={handleDeleteProject} className="btn-delete">
        	Borrar anuncio🗑
     		 </button>
			  </>
			
			)}		
		</div>
	
	</div>
	);

}

export default ProjectCard;
