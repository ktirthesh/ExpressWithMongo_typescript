import app from "./app";
import env from "./environment";
const port = env.getPort();
app.listen(port, () => {
  console.log(`App Started on ${port}`);
});
