import fsPromises from "fs/promises";
const jsonPath = "./src/model/fakeData/blog.json";

export default async function CreateBlog(req, res) {
  if (req.method === "POST") {
    // Check if the request method is POST
    try {
      const { title, content } = req.body;
      // Read the existing data from the JSON file
      const jsonData = await fsPromises.readFile(jsonPath, "utf8");
      let existingData = JSON.parse(jsonData);

      // Make sure existingData is an array
      if (!Array.isArray(existingData)) {
          existingData = [];
      }
      
      // Modify the existing data or add new data
      const newData = { title: title, content: content };
      existingData.push(newData);

      // Write the modified data back to the JSON file
      await fsPromises.writeFile(
        jsonPath,
        JSON.stringify(existingData, null, 2)
      );

      res.status(200).json({ message: "Blog post created successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" }); // Return a method not allowed response
  }
}
