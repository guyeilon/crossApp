import openai from '../../../service/openaiService';
import { NextResponse } from 'next/server';

export async function GET(res: NextResponse) {
	const chatCompletion = await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		messages: [{ role: 'user', content: 'Hello world' }],
	});
	const textResponse = await chatCompletion.data.choices[0].message;

	return NextResponse.json({ textResponse });
}
