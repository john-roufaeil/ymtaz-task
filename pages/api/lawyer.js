// pages/api/lawyer.js

export default async function handler(req, res) {
    const { method, headers, body } = req;

    if (method === 'GET') {
        try {
            const apiRes = await fetch('https://ymtaz.sa/api/client/lawyer/2518', {
                method: 'GET',
                headers: {
                    'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ltdGF6LnNhL2FwaS9jbGllbnQvbG9naW4iLCJpYXQiOjE3MTMxODgxOTAsImV4cCI6MjE2MDE3MTMxODgxOTAsIm5iZiI6MTcxMzE4ODE5MCwianRpIjoiOXVZU0lsOHY2UkkzNGxHciIsInN1YiI6IjE2NTEiLCJwcnYiOiIyYTg0NjYyYzMzMTU3NTQ2YzQzZjQwMzc1NDY0MTViYzcwZDc4YmJjIn0.jn7AwKiHQhN-z4qraZ0udGn_321-6V7JQJX3GyabQU4',
                    ...headers,
                },
            });

            if (!apiRes.ok) throw new Error(`Error from API: ${apiRes.status}`);

            const data = await apiRes.json();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}
