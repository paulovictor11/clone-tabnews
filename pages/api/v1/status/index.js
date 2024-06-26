function status(request, response) {
  return response
    .status(200)
    .json({ chave: "minha coisa fofa é uma pessoa muito inteligente" });
}

export default status;
