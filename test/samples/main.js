import template from "./template.vto";

const result = await template({ name: "> Vento" });

document.body.innerHTML = result.content;
