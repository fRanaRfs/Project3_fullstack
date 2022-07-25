import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { addNewTaskService } from '../services/tasks.services';


function AddTask(props) {
	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ isLoading, setIsLoading ] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// We need the project id when creating the new task
		const { projectId } = props;
		// Create an object representing the body of the POST request
		const requestBody = { title, description, projectId };

		setIsLoading(true);
		try {
			await addNewTaskService(requestBody);
			// Reset the state to clear the inputs
			setTitle('');
			setDescription('');
			setIsLoading(false);
			props.refreshProject();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="AddTask">
			<h3>Añade una tarea</h3>

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

				<button type="submit">Añadir tarea</button>
				{isLoading && <Spinner animation="grow" size="sm" />}
			</form>
		</div>
	);
}

export default AddTask;
