// Função para rolar horizontalmente um carrossel com base em um ID e direção (1 ou -1)
function scrollCarrossel(id, direcao) {
  const container = document.getElementById(id); // Obtém o elemento pelo ID
  const scrollAmount = 300; // Define a quantidade de rolagem em pixels
  container.scrollBy({
    left: direcao * scrollAmount, // Move para a direita ou esquerda
    behavior: 'smooth' // Com animação suave
  });
}

// Função para obter o valor do parâmetro "destino" na URL
function getDestino() {
  const params = new URLSearchParams(window.location.search); // Pega os parâmetros da URL
  return params.get("destino") || "FILMS.html"; // Retorna o destino ou um valor padrão
}

// Validação do formulário de cadastro
function validateForm() {
  const idade = document.querySelector('input[name="idade"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const emailConfirma = document.querySelector('input[name="confirmarEmail"]').value;
  const senha = document.querySelector('input[name="senha"]').value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar email

  // Verifica se o usuário tem pelo menos 18 anos
  if (idade < 18) {
    alert("Você precisa ter 18 anos ou mais para se cadastrar.");
    return false;
  }

  // Valida o formato do e-mail
  if (!emailRegex.test(email)) {
    alert("E-mail inválido.");
    return false;
  }

  // Verifica se os e-mails coincidem
  if (email !== emailConfirma) {
    alert("Os e-mails não coincidem.");
    return false;
  }

  // Verifica se a senha tem no mínimo 6 caracteres
  if (senha.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres.");
    return false;
  }

  return true; // Tudo ok
}

// Exibe uma mensagem de sucesso animada após cadastro e executa uma função de callback
function showSuccessMessage(callback) {
  const container = document.querySelector(".container");

  const message = document.createElement("div");
  message.textContent = "✅ Cadastro realizado com sucesso!";
  message.style.backgroundColor = "#d4edda";
  message.style.color = "#155724";
  message.style.padding = "10px 20px";
  message.style.marginTop = "15px";
  message.style.borderRadius = "8px";
  message.style.textAlign = "center";
  message.style.fontWeight = "bold";
  message.style.boxShadow = "0 0 8px rgba(0,0,0,0.1)";
  message.style.opacity = "0";
  message.style.transition = "opacity 0.5s ease-in-out";

  container.appendChild(message); // Adiciona a mensagem ao container

  setTimeout(() => {
    message.style.opacity = "1"; // Faz a mensagem aparecer suavemente
  }, 100);

  setTimeout(() => {
    callback(); // Executa o callback após o tempo
  }, 1000);
}

// Controla o envio do formulário: valida, mostra mensagem e redireciona
function handleSubmit(event) {
  event.preventDefault(); // Evita o envio padrão do formulário
  if (validateForm()) {
    showSuccessMessage(() => {
      const destino = getDestino(); // Obtém o destino da URL
      window.location.href = destino; // Redireciona para a página
    });
  }
}
