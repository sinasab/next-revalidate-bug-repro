export const revalidate = 1;

const response = await fetch("https://www.randomnumberapi.com/api/v1.0/random");

const randVal = await response.json();

export default async function Page() {
	return (
		<>
			<div>{new Date().toString()}</div>
			<div>{randVal}</div>
		</>
	);
}
