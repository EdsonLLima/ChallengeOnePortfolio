export function validate(input) {
  // para acessar os datesets dos elementos ou atributos
  const typeInput = input.dataset.tipo;

  if (input.validity.valid) {
    // como a classe é filha do input podemos usar assim
    input.parentElement.classList.remove("input-container--invalido");
    input.parentElement.querySelector(".input-mensagem-erro").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalido");
    input.parentElement.querySelector(".input-mensagem-erro").innerHTML =
      showErrorMessage(typeInput, input);
  }
}

const typeError = ["valueMissing", "typeMismatch"];

const errorMessage = {
  name: {
    valueMissing: "O campo nome não pode estar vazio.",
  },
  email: {
    valueMissing: "O campo de e-mail não pode estar vazio.",
    typeMismatch: "O e-mail digitado não é válido.",
  },
  subject: {
    valueMissing: "O campo assunto não pode estar vazio.",
  },
};

function showErrorMessage(typeInput, input) {
  let message = "";
  typeError.forEach((error) => {
    if (input.validity[error]) {
      message = errorMessage[typeInput][error];
    }
  });

  return message;
}
