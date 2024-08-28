import React, { useState } from 'react';

const App = () => {
    const [selectedAnswers, setSelectedAnswers] = useState({
        css: '',
        html: '',
        js: '',
        'html-correct': '',
        'css-correct': ''
    });

    const [feedback, setFeedback] = useState({
        css: '',
        html: '',
        js: '',
        'html-correct': '',
        'css-correct': ''
    });

    const [correctCount, setCorrectCount] = useState(0);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSelectedAnswers(prevAnswers => ({ ...prevAnswers, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Reset feedback and count
        let count = 0;
        const newFeedback = {};

        // Pergunta 1
        if (selectedAnswers.css === 'C') {
            newFeedback.css = 'Correto!';
            count++;
        } else {
            newFeedback.css = 'Incorreto. A resposta correta é C) Estilizar a aparência da página.';
        }

        // Pergunta 2
        if (selectedAnswers.html === 'A') {
            newFeedback.html = 'Correto!';
            count++;
        } else {
            newFeedback.html = 'Incorreto. A resposta correta é A) Linguagem de marcação para estrutura de documentos.';
        }

        // Pergunta 3
        if (selectedAnswers.js === 'C') {
            newFeedback.js = 'Correto!';
            count++;
        } else {
            newFeedback.js = 'Incorreto. A resposta correta é C) Manipular o DOM e interagir com o usuário.';
        }

        // Pergunta 4
        if (selectedAnswers['html-correct'] === 'false') {
            newFeedback['html-correct'] = 'Correto!';
            count++;
        } else {
            newFeedback['html-correct'] = 'Incorreto. O HTML não é uma linguagem de programação.';
        }

        // Pergunta 5
        if (selectedAnswers['css-correct'] === 'true') {
            newFeedback['css-correct'] = 'Correto!';
            count++;
        } else {
            newFeedback['css-correct'] = 'Incorreto. O CSS pode, sim, ser usado para criar animações.';
        }

        setFeedback(newFeedback);
        setCorrectCount(count);
    };

    return (
        <div className="container">
            <h1>Questionário sobre Desenvolvimento Front End</h1>
            <form id="questionnaire" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="id">Matrícula:</label>
                    <input type="text" id="id" name="id" required />
                </div>

                {/* Pergunta 1 */}
                <div className="question">
                    <p><strong>1. Qual é a principal função do CSS?</strong></p>
                    <label htmlFor="css1">A) <input type="radio" id="css1" name="css" value="A" onChange={handleChange} />Gerenciar dados do servidor</label>
                    <label htmlFor="css2">B) <input type="radio" id="css2" name="css" value="B" onChange={handleChange} />Estruturar o conteúdo da página</label>
                    <label htmlFor="css3">C) <input type="radio" id="css3" name="css" value="C" onChange={handleChange} />Estilizar a aparência da página</label>
                    <label htmlFor="css4">D) <input type="radio" id="css4" name="css" value="D" onChange={handleChange} />Validar formulários</label>
                    <label htmlFor="css5">E) <input type="radio" id="css5" name="css" value="E" onChange={handleChange} />Interagir com o banco de dados</label>
                    <div className={`feedback ${selectedAnswers.css === 'C' ? 'correct' : 'incorrect'}`}>{feedback.css}</div>
                </div>

                {/* Pergunta 2 */}
                <div className="question">
                    <p><strong>2. O que é o HTML?</strong></p>
                    <label htmlFor="html1">A) <input type="radio" id="html1" name="html" value="A" onChange={handleChange} />Linguagem de marcação para estrutura de documentos</label>
                    <label htmlFor="html2">B) <input type="radio" id="html2" name="html" value="B" onChange={handleChange} />Linguagem de programação para lógica de aplicação</label>
                    <label htmlFor="html3">C) <input type="radio" id="html3" name="html" value="C" onChange={handleChange} />Framework para desenvolvimento web</label>
                    <label htmlFor="html4">D) <input type="radio" id="html4" name="html" value="D" onChange={handleChange} />Biblioteca para estilização de páginas</label>
                    <label htmlFor="html5">E) <input type="radio" id="html5" name="html" value="E" onChange={handleChange} />Ferramenta de design gráfico</label>
                    <div className={`feedback ${selectedAnswers.html === 'A' ? 'correct' : 'incorrect'}`}>{feedback.html}</div>
                </div>

                {/* Pergunta 3 */}
                <div className="question">
                    <p><strong>3. Qual é a função do JavaScript no desenvolvimento front end?</strong></p>
                    <label htmlFor="js1">A) <input type="radio" id="js1" name="js" value="A" onChange={handleChange} />Criar e gerenciar banco de dados</label>
                    <label htmlFor="js2">B) <input type="radio" id="js2" name="js" value="B" onChange={handleChange} />Realizar cálculos no servidor</label>
                    <label htmlFor="js3">C) <input type="radio" id="js3" name="js" value="C" onChange={handleChange} />Manipular o DOM e interagir com o usuário</label>
                    <label htmlFor="js4">D) <input type="radio" id="js4" name="js" value="D" onChange={handleChange} />Definir estilos de página</label>
                    <label htmlFor="js5">E) <input type="radio" id="js5" name="js" value="E" onChange={handleChange} />Validar a sintaxe de HTML</label>
                    <div className={`feedback ${selectedAnswers.js === 'C' ? 'correct' : 'incorrect'}`}>{feedback.js}</div>
                </div>

                {/* Pergunta 4 (Certo ou Errado) */}
                <div className="question">
                    <p><strong>4. O HTML é uma linguagem de programação?</strong></p>
                    <label htmlFor="html-true"><input type="radio" id="html-true" name="html-correct" value="true" onChange={handleChange} />Verdadeiro</label>
                    <label htmlFor="html-false"><input type="radio" id="html-false" name="html-correct" value="false" onChange={handleChange} />Falso</label>
                    <div className={`feedback ${selectedAnswers['html-correct'] === 'false' ? 'correct' : 'incorrect'}`}>{feedback['html-correct']}</div>
                </div>

                {/* Pergunta 5 (Certo ou Errado) */}
                <div className="question">
                    <p><strong>5. O CSS pode ser usado para criar animações?</strong></p>
                    <label htmlFor="css-true"><input type="radio" id="css-true" name="css-correct" value="true" onChange={handleChange} />Verdadeiro</label>
                    <label htmlFor="css-false"><input type="radio" id="css-false" name="css-correct" value="false" onChange={handleChange} />Falso</label>
                    <div className={`feedback ${selectedAnswers['css-correct'] === 'true' ? 'correct' : 'incorrect'}`}>{feedback['css-correct']}</div>
                </div>

                <button type="submit">Enviar</button>
                {correctCount > 0 && (
                    <p className="feedback">Você acertou {correctCount} de 5 questões.</p>
                )}
            </form>
        </div>
    );
};

export default App;