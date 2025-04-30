import { Progress, Button, Box, Icon, Text } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

const questions = [
  {
    question: "1. Quais são as sete notas musicais naturais usadas na música ocidental?",
    options: ["A) Lá, Si, Dó, Ré, Mi, Fá, Fá#", "B) Dó, Ré, Mi, Fá, Sol, Lá, Si", "C) Sol, Lá, Si, Dó, Ré, Mi, Fá#", "D) Dó, Ré, Mi, Fá, Sol, Lá, Dó"],
    correctIndex: 1,
  },
  {
    question: "2. Qual é a função da clave de sol na pauta musical?",
    options: ["A) Indicar o ritmo da música", "B) Mostrar onde ficam os silêncios", "C) Determinar que as notas serão lidas na região aguda", "D) Marcar o final da música"],
    correctIndex: 2,
  },
  {
    question: "3. O que é uma escala musical?",
    options: ["A) Um conjunto de acordes tocados aleatoriamente", "B) Um tipo de instrumento de percussão", "C) Um padrão rítmico usado em compassos compostos", "D) Uma sequência organizada de notas em ordem de altura"],
    correctIndex: 3,
  },
  {
    question: "4. Quais notas formam o acorde de Dó maior (tríade)?",
    options: ["A) Dó, Fá, Lá", "B) Dó, Ré, Mi", "C) Dó, Mi, Sol", "D) Dó, Sol, Si"],
    correctIndex: 2,
  }
]

const BTest = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const [selectedOption, setSelectedOption] = useState<null | number>(null);
  const [isCorrect, setIsCorrect] = useState<null | boolean>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];

  const totalQuestions = questions.length;

  const handleAnswer = (index: number) => {
    setSelectedOption(index);
    setIsCorrect(index === currentQuestion.correctIndex);
  }

  const nextQuestion = () => {
    setCurrentQuestionIndex(prev => prev + 1);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  return (
    <Box 
      backgroundColor="#F6F5F5"
      height="100vh"
    >
      <Box
        position="fixed"
        top="0"
        zIndex="1000"
      >
        <Icon margin="1rem" onClick={() => navigate(-1)}>
          <ChevronLeft />
        </Icon>
      </Box>
      <Box paddingY="4rem" width="100%" boxShadow="0px 5px 5px -2px rgba(0, 0, 0, .1)">
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Exercício: Teoria Básica</Text>
      </Box>
      <Progress.Root value={(100*(currentQuestionIndex + 1))/totalQuestions} size="xs" colorPalette="green">
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>

      <Box>
        {page === 1 && (
          <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="space-between" height="100%">
            <Box> 
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Exercício: Teoria Básica</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                Agora vamos testar seu conhecimento para você ir para as próximas etapas.
                <br/>
                <br/>
                Está preparado?
              </Text>
              <Text textAlign="center" fontSize="10rem" >📖</Text>
            </Box>
            <Box display="flex" justifyContent="center" padding="3rem">
              <Button backgroundColor="#0BCE83" paddingX="3rem" onClick={() => setPage(page + 1)}>Sim, vamos lá</Button>
            </Box>
          </Box>
        )}

        {page === 2 && (
          <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="space-between" height="100%">
            <Box> 
              <Text textAlign="center" fontSize="1.5rem" padding="1.5rem">{currentQuestion.question}</Text>
                {currentQuestion.options.map((option, index) => (
                  <Box width="100%" paddingX="2rem" paddingY="0.5rem">
                      <Button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        width="100%"                        
                        disabled={selectedOption !== null}
                      >
                        {option}
                      </Button>
                  </Box>
                ))}
            </Box>
            {isCorrect && currentQuestionIndex < questions.length - 1 && (
              <Box display="flex" flexDirection="column" justifyContent="center" padding="3rem">
                <Text fontSize="1.5rem" textAlign="center">Resposta correta!</Text>
                <Text fontSize="8rem" textAlign="center">🥳</Text>
                <Button backgroundColor="#0BCE83" paddingX="3rem" onClick={nextQuestion}>Próxima questão</Button>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export { BTest };
