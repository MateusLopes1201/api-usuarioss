import { Router } from 'express';

const router = Router();

router.get('/', function(request, response) {
	response.send({
        api_name: "api-contatos",
        descricao: "API para gestão de contatos",
        status: 'OK',
    });
});

router.get('/about', function(request, response) {
	response.send({
        name: "Mateus Lopes",
        email: "mateuslopes1201@gmail.com",
        github: "https://github.com/MateusLopes1201",
    });
});

export default router;