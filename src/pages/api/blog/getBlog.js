import fsPromises from 'fs/promises';
const jsonPath = '@/src/model/fakeData/blog.json';
export default async function CreateBlog(req, res) {
    if (req.method === 'GET') {
        try {
            // Read the existing data from the JSON file
            const jsonData = await fsPromises.readFile('./src/model/fakeData/blog.json', 'utf8');
            
            res.status(200).json(JSON.parse(jsonData)); // Return the jsonData to the client
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "An error occurred" }); // Return an error response
        }
    }
}