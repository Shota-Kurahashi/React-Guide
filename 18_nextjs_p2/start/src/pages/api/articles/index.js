import axios from "axios";

const API_URL = "http://localhost:4030/articles";

export default async function handler(req, res) {
  try {
    const response = await axios.get(API_URL);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
