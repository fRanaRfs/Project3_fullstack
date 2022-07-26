import { useState } from 'react';
import { addNewProjectService } from '../services/project.services.js';


function AddProject(props) {
	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ image, setImage ] = useState();
	const [fulldescription, setFullDescription] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newProject = { title, description, image, fulldescription };

		// Send the token through the request "Authorization" Headers
		try {
			await addNewProjectService(newProject);
			setTitle('');
			setDescription('');
			setImage('');
			setFullDescription('');
			props.refreshProjects();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="AddProject">
			<h3>Añadir anuncio</h3>

			<form onSubmit={handleSubmit}>
				<label>Titulo:</label>
				<input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />

				<label>Descripción:</label>
				<textarea
					type="text"
					name="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<div style={{border: '3px solid red', alignItems: 'center'}}>
				<label>Imagen:</label>
				<input type="url" name="image" onChange={(e) => setImage(e.target.value)}  />
				
				<label>Descripción detallada:</label>
				<input type="text" name="fulldescription" value={fulldescription} onChange={(e) => setFullDescription(e.target.value)}  />

				<button type="submit">Añadir</button>
				</div>
			</form>
		</div>
	);
}

export default AddProject;
