import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      `${process.env.API_URL}/articles?populate=*`
    );
    console.log("Hola");
    const articles = response.data;
    res.status(200).json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ocurrió un error al cargar los articulos" });
  }
}
