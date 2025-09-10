function handleSubmit() {
  const requiredFields = document.querySelectorAll("input[required]");
  const emptyField = Array.from(requiredFields).find(
    (field) => !field.value.trim()
  );
  if (emptyField) {
    alert("Preencha todos os campos corretamente.");
  } else {
    const veiculo = {
      id: Date.now(),
      nome: document.getElementById("nome_proprietario").value,
      placa: document.getElementById("placa").value,
      modelo: document.getElementById("modelo").value,
      bloco: document.getElementById("bloco").value,
    };
    const veiculos = JSON.parse(localStorage.getItem("veiculos") || "[]");
    veiculos.push(veiculo);
    localStorage.setItem("veiculos", JSON.stringify(veiculos));
    alert(
      `Obrigado sr(a) ${veiculo.nome}, seu veículo de placa ${veiculo.placa}, modelo ${veiculo.modelo}, foi estacionado no bloco ${veiculo.bloco} com sucesso!`
    );
    document.getElementById("formEstacionar").reset();
    window.location.assign("listar.html");
  }
}
