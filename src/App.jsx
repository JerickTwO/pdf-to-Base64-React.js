import "./App.css";

function App() {
  const convertirBase64 = (archivos) => {
    Array.from(archivos).forEach((archivo) => {
      const reader = new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload = function () {
        const base64 = reader.result;
        const auxiliar = base64.split(",");
        console.log(auxiliar[1]);
      };
    });
  };
  return (
    <input
      type="file"
      name=""
      id=""
      onChange={(e) => convertirBase64(e.target.files)}
    />
  );
}

export default App;
