document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formEndereco");
  const cep = document.getElementById("cep");
  const logradouro = document.getElementById("logradouro");
  const numero = document.getElementById("numero");
  const uf = document.getElementById("uf");

  cep.addEventListener("input", () => {
    let valor = cep.value.replace(/\D/g, "");
    if (valor.length > 5) {
      valor = valor.replace(/^(\d{5})(\d{0,3})/, "$1-$2");
    }
    cep.value = valor;
  });

  uf.addEventListener("input", () => {
    uf.value = uf.value.toUpperCase();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const cepRegex = /^\d{5}-\d{3}$/;
    const numeroRegex = /^\d+$/;
    const ufRegex = /^[A-Z]{2}$/;

    if (!cepRegex.test(cep.value)) {
      alert("CEP inválido. Use o formato 00000-000.");
      return;
    }

    if (logradouro.value.trim().length < 5) {
      alert("Logradouro deve ter no mínimo 5 caracteres.");
      return;
    }

    if (!numeroRegex.test(numero.value)) {
      alert("Número deve conter apenas dígitos.");
      return;
    }

    if (!ufRegex.test(uf.value)) {
      alert("UF inválida.(ex: SP, RJ).");
      return;
    }

    alert("Endereço cadastrado com sucesso!");
    form.reset();
  });
});
