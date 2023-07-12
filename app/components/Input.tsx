'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

export default function Input() {
	const [input, setInput] = React.useState('');
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setInput('');

		router.push('/wod');
	};
	return (
		<form onSubmit={handleSubmit}>
			<input type='text' value={input} onChange={e => setInput(e.target.value)} />
		</form>
	);
}
