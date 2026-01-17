export const prerender = false;
import type { APIRoute } from 'astro';
import { databases } from '../../lib/appwrite.server';
import { ID } from 'appwrite';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400 }
      );
    }

    await databases.createDocument(
      import.meta.env.APPWRITE_DATABASE_ID,
      import.meta.env.APPWRITE_COLLECTION_ID,
      ID.unique(),
      { name, email, subject, message }
    );

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);

    return new Response(
      JSON.stringify({ error: 'Server error' }),
      { status: 500 }
    );
  }
};
