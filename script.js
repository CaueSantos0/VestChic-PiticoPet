
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o container onde o formulário será inserido
    const formContainer = document.getElementById("formContainer");

    // Cria o formulário de cadastro
    const form = document.createElement("form");
    form.id = "formCadastro";

    // Cria os campos do formulário
    const fields = [
        { label: "Email:", type: "email", id: "email", required: true },
        { label: "Senha:", type: "password", id: "senha", required: true },
        { label: "Telefone:", type: "text", id: "telefone", required: true, maxLength: 11 },
        { label: "CPF:", type: "text", id: "cpf", required: true, maxLength: 11 },
        { label: "Idade:", type: "number", id: "idade", required: true, max: 99 }
    ];

    fields.forEach(field => {
        const label = document.createElement("label");
        label.setAttribute("for", field.id);
        label.textContent = field.label;

        const input = document.createElement("input");
        input.type = field.type;
        input.id = field.id;
        input.name = field.id;
        input.required = field.required;
        if (field.maxLength) input.maxLength = field.maxLength;
        if (field.max) input.max = field.max;

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(document.createElement("br"));
    });

    // Botão de envio
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Cadastrar";
    form.appendChild(submitButton);

    // Insere o formulário no contêiner
    formContainer.appendChild(form);

    // Função para validar o formulário
    form.addEventListener("submit", function (event) {
        const telefone = document.getElementById("telefone").value;
        const cpf = document.getElementById("cpf").value;

        if (telefone.length !== 11) {
            alert("O telefone deve conter 11 dígitos.");
            event.preventDefault();
        }

        if (cpf.length !== 11) {
            alert("O CPF deve conter 11 dígitos.");
            event.preventDefault();
        }
    });
});


function enviarFeedback() {
    var feedbackText = document.getElementById('feedback-text').value;
    var rating = document.querySelector('input[name="star"]:checked');

    // Verifica se o texto do feedback e a avaliação por estrelas foram preenchidos
    if (feedbackText !== '' && rating !== null) {
        // Mostrar mensagem de confirmação
        document.getElementById('confirmacao').style.display = 'block';

        // Limpar o campo de texto e estrelas
        document.getElementById('feedback-text').value = '';
        document.querySelectorAll('input[name="star"]').forEach(function(star) {
            star.checked = false;
        });

        // Ocultar a mensagem após alguns segundos (opcional)
        setTimeout(function(){
            document.getElementById('confirmacao').style.display = 'none';
        }, 3000);
    } else {
        // Alerta caso o usuário não preencha o campo ou não selecione as estrelas
        alert('Por favor, preencha o feedback e escolha uma avaliação.');
    }
}