import axios from "axios";

export async function fetchMoban() {
  try {
    const response = await axios.get(
      "http://localhost:1988/api/pptx/getTemplates"
    );
    console.log("response", response.data);
    return response.data;
    
  } catch (error) {
    console.error("Error fetching templates:", error);
    return [];
  }
}
