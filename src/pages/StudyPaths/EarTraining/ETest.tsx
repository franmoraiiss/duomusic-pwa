import { Progress, Button, Box, Icon, Text } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

const questions = [
  {
    question: "1. Qual é a principal característica de um intervalo de oitava?",
    options: [
      "A) São duas notas diferentes tocadas simultaneamente",
      "B) É a mesma nota tocada em alturas diferentes",
      "C) São três notas tocadas em sequência",
      "D) É um intervalo que soa dissonante"
    ],
    correctIndex: 1,
  },
  {
    question: "2. Como identificar um acorde maior?",
    options: [
      "A) Soa mais tenso e dissonante",
      "B) Tem quatro notas tocadas juntas",
      "C) Soa mais alegre e brilhante",
      "D) É formado apenas por notas graves"
    ],
    correctIndex: 2,
  },
  {
    question: "3. O que é importante observar ao tentar reconhecer uma melodia?",
    options: [
      "A) Apenas o volume das notas",
      "B) Somente o ritmo",
      "C) Apenas a primeira e última nota",
      "D) A direção e os intervalos entre as notas"
    ],
    correctIndex: 3,
  },
  {
    question: "4. Qual é a melhor maneira de praticar o reconhecimento de notas?",
    options: [
      "A) Tocar todas as notas ao mesmo tempo",
      "B) Começar com intervalos complexos",
      "C) Praticar uma nota por vez e cantar junto",
      "D) Tocar apenas acordes"
    ],
    correctIndex: 2,
  }
];

const ETest = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const [selectedOption, setSelectedOption] = useState<null | number>(null);
  const [isCorrect, setIsCorrect] = useState<null | boolean>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];

  const totalQuestions = questions.length;

  const handleAnswer = (index: number) => {
    setSelectedOption(index);
    const correct = index === currentQuestion.correctIndex;
    setIsCorrect(correct);
  }

  const tryAgain = () => {
    setSelectedOption(null);
    setIsCorrect(null);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex(prev => prev + 1);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  const markAsCompleted = () => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    if (!completed.includes('etest')) {
      completed.push('etest');
      localStorage.setItem('completedLessons', JSON.stringify(completed));
    }
    navigate(-1);
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Exercício: Treinamento Auditivo</Text>
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Exercício: Treinamento Auditivo</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                Agora vamos testar seu conhecimento em reconhecimento auditivo.
                <br/>
                <br/>
                Está preparado?
              </Text>
              <Text textAlign="center" fontSize="10rem" >🎵</Text>
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
                  <Box width="100%" paddingX="2rem" paddingY="0.5rem" key={index}>
                      <Button
                        onClick={() => handleAnswer(index)}
                        width="100%"                        
                        disabled={selectedOption !== null}
                        backgroundColor={
                          selectedOption === index 
                            ? isCorrect 
                              ? "#0BCE83" 
                              : "#FF6B6B"
                            : "white"
                        }
                        color={selectedOption === index ? "white" : "black"}
                      >
                        {option}
                      </Button>
                  </Box>
                ))}
            </Box>
            {isCorrect !== null && (
              <Box display="flex" flexDirection="column" justifyContent="center" padding="3rem">
                {isCorrect ? (
                  <>
                    <Text fontSize="1.5rem" textAlign="center">Resposta correta!</Text>
                    <Text fontSize="8rem" textAlign="center">🎼</Text>
                    {currentQuestionIndex < questions.length - 1 ? (
                      <Button backgroundColor="#0BCE83" paddingX="3rem" onClick={nextQuestion}>
                        Próxima questão
                      </Button>
                    ) : (
                      <>
                        <Text fontSize="1.5rem" textAlign="center" marginY="1rem">
                          Parabéns! Você completou o teste de treinamento auditivo!
                        </Text>
                        <Button 
                          backgroundColor="#0BCE83" 
                          paddingX="3rem" 
                          onClick={markAsCompleted}
                        >
                          Voltar ao início
                        </Button>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <Text fontSize="1.5rem" textAlign="center">
                      Ops! Essa não é a resposta correta.
                    </Text>
                    <Text fontSize="8rem" textAlign="center">🎹</Text>
                    <Button 
                      backgroundColor="#FF6B6B" 
                      color="white"
                      paddingX="3rem" 
                      onClick={tryAgain}
                    >
                      Tentar novamente
                    </Button>
                  </>
                )}
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export { ETest }; 
