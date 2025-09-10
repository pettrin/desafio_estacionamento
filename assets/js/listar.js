function getLocalItem(key) {
  return localStorage.getItem(key) || "";
}

function listarVeiculos() {
  const lista = document.getElementById("listaVeiculos");
  const veiculos = JSON.parse(localStorage.getItem("veiculos") || "[]");
  lista.innerHTML = "";
  veiculos.forEach((veiculo) => {
    const li = document.createElement("li");
    li.className = "item-veiculo";
    li.innerHTML = `
      <strong>Placa:</strong> ${veiculo.placa} |
      <strong>Modelo:</strong> ${veiculo.modelo} |
      <strong>Bloco:</strong> ${veiculo.bloco} |
      <strong>Proprietário:</strong> ${veiculo.nome}
    `;
    lista.appendChild(li);
  });
}
