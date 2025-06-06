import { Box, Button, Icon, Progress, Text } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

interface Question {
  question: string;
  options: string[];
  correctIndex: number;
}

const questions: Question[] = [
  {
    question: "1. Qual é o nome dado ao conjunto de cinco linhas onde escrevemos música?",
    options: [
      "A) Clave",
      "B) Pauta ou pentagrama",
      "C) Compasso",
      "D) Partitura"
    ],
    correctIndex: 1
  },
  {
    question: "2. Na clave de Sol, qual é a sequência correta das notas nas linhas (de baixo para cima)?",
    options: [
      "A) Fá - Lá - Dó - Mi - Sol",
      "B) Mi - Sol - Si - Ré - Fá",
      "C) Dó - Mi - Sol - Si - Ré",
      "D) Sol - Si - Ré - Fá - Lá"
    ],
    correctIndex: 1
  },
  {
    question: "3. Qual figura musical vale 4 tempos?",
    options: [
      "A) Mínima",
      "B) Semínima",
      "C) Semibreve",
      "D) Colcheia"
    ],
    correctIndex: 2
  },
  {
    question: "4. O que indica o ponto de aumento ao lado de uma nota?",
    options: [
      "A) Diminui a duração em 50%",
      "B) Dobra a duração",
      "C) Aumenta a duração em 50%",
      "D) Não altera a duração"
    ],
    correctIndex: 2
  }
];

const STest = () => {
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
    if (!completed.includes('stest')) {
      completed.push('stest');
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Teste Final: Leitura de Partitura</Text>
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Teste Final: Leitura de Partitura</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                Vamos testar seu conhecimento sobre leitura de partitura.
                <br/>
                <br/>
                Está preparado?
              </Text>
              <Text textAlign="center" fontSize="10rem" >🎼</Text>
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
                    <Text fontSize="8rem" textAlign="center">🎵</Text>
                    {currentQuestionIndex < questions.length - 1 ? (
                      <Button backgroundColor="#0BCE83" paddingX="3rem" onClick={nextQuestion}>
                        Próxima questão
                      </Button>
                    ) : (
                      <>
                        <Text fontSize="1.5rem" textAlign="center" marginY="1rem">
                          Parabéns! Você completou o teste de leitura de partitura!
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
                    <Text fontSize="8rem" textAlign="center">🎼</Text>
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
};

export { STest }; 
