// Preenche as opções do select de versões
const selectVersion = document.getElementById("selectVersion");
for (const version in activationKeys) {
    const option = document.createElement("option");
    option.value = version;
    option.textContent = version;
    selectVersion.appendChild(option);
}

// Atualiza o select de modelos quando a versão é selecionada
selectVersion.addEventListener("change", () => {
    const selectedVersion = selectVersion.value;
    const selectModel = document.getElementById("selectModel");
    selectModel.innerHTML = "";
    for (const model in activationKeys[selectedVersion]) {
        const option = document.createElement("option");
        option.value = model;
        option.textContent = model;
        selectModel.appendChild(option);
    }
});

// Exibe a chave de ativação quando o botão é clicado
document.getElementById("getActivationKey").addEventListener("click", () => {
    const selectedVersion = selectVersion.value;
    const selectedModel = selectModel.value;
    const activationKeyDisplay = document.getElementById("activationKeyDisplay");
    if (activationKeys[selectedVersion] && activationKeys[selectedVersion][selectedModel]) {
        const activationKey = activationKeys[selectedVersion][selectedModel];
        activationKeyDisplay.textContent = activationKey;
        // Exibe o botão de copiar
        document.getElementById("copyActivationKey").style.display = "inline";
    } else {
        activationKeyDisplay.textContent = "Chave não encontrada para a seleção atual.";
    }
});

// Exibe a chave de ativação quando o botão é clicado
document.getElementById("getActivationKey").addEventListener("click", () => {
    const selectedVersion = selectVersion.value;
    const selectedModel = selectModel.value;
    const activationKeyDisplay = document.getElementById("activationKeyDisplay");
    const copyButton = document.getElementById("copyActivationKey"); // Seleciona o botão "Copiar"

    if (activationKeys[selectedVersion] && activationKeys[selectedVersion][selectedModel]) {
        activationKeyDisplay.textContent = activationKeys[selectedVersion][selectedModel];
        copyButton.classList.remove("hidden"); // Remove a classe "hidden" para mostrar o botão "Copiar"
    } else {
        activationKeyDisplay.textContent = "Chave não encontrada para a seleção atual.";
        copyButton.classList.add("hidden"); // Se a chave não for encontrada, oculta o botão "Copiar"
    }
});


// Seleciona o botão "Copiar" e a notificação
const copyActivationKeyButton = document.getElementById("copyActivationKey");
const copyNotification = document.getElementById("copyNotification");

// Copia a chave para a área de transferência quando o botão "Copiar" é clicado
copyActivationKeyButton.addEventListener("click", () => {
    // Código para copiar a chave para a área de transferência (você pode usar um método de seleção e cópia de texto)
    
    // Exibe a notificação "Mensagem copiada"
    copyNotification.style.display = "block";

    // Define um temporizador para ocultar a notificação após alguns segundos
    setTimeout(() => {
        copyNotification.style.display = "none";
    }, 3000); // Exibe a notificação por 3 segundos (ajuste conforme necessário)
});


document.getElementById("copyActivationKey").addEventListener("click", function() {
    const activationKeyText = document.getElementById("activationKeyDisplay");
    const textArea = document.createElement("textarea");
    textArea.value = activationKeyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    // Exiba a notificação de cópia
    const copyNotification = document.getElementById("copyNotification");
    copyNotification.style.display = "block";
});
