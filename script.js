function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText);
    } else if (element.nodeType === Text.TEXT_NODE) {
        // Encontre el texto, tengo que modificarlo
        element.textContent = element.textContent.replace(/Harry Kane/gi, "Harry Piscinita Kane");
    }
}


replaceText(document.body);