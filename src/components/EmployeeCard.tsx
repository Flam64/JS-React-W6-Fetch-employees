// src/components/EmployeeCard.tsx
interface EmployeeCardProps {
	employee: {
		name: {
			first: string;
			last: string;
		};
		email: string;
		picture: {
			medium: string;
		};
	};
}

function EmployeeCard({ employee }: EmployeeCardProps) {
	const { name, email, picture } = employee;

	return (
		<figure className="DisplayEmployee">
			<img src={picture.medium} alt={name.first} />
			<figcaption>
				<strong>
					<h2>
						{name.first} {name.last}
					</h2>
				</strong>
				<p>email : {email}</p>
			</figcaption>
		</figure>
	);
}

export default EmployeeCard;
