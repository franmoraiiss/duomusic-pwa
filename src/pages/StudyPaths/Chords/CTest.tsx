import { Box, Button, Icon, Progress, Text } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useProgress } from "@/hooks/useProgress";

interface Question {
  question: string;
  options: string[];
  correctIndex: number;
}

const questions: Question[] = [
  {
    question: "1. O que é um acorde?",
    options: [
      "A) Uma única nota tocada isoladamente",
      "B) Três ou mais notas tocadas simultaneamente",
      "C) Duas notas tocadas em sequência",
      "D) Um ritmo específico"
    ],
    correctIndex: 1
  },
  {
    question: "2. Qual a diferença entre um acorde maior e menor?",
    options: [
      "A) A quinta é diferente",
      "B) A terça é diferente",
      "C) A fundamental é diferente",
      "D) O ritmo é diferente"
    ],
    correctIndex: 1
  },
  {
    question: "3. Em uma progressão I-IV-V em Dó maior (C), quais são os acordes?",
    options: [
      "A) C - D - E",
      "B) C - F - G",
      "C) C - Em - G",
      "D) C - Dm - Em"
    ],
    correctIndex: 1
  },
  {
    question: "4. Qual progressão é usada em 'Pais e Filhos' da Legião Urbana?",
    options: [
      "A) I-IV-V",
      "B) I-V-IV",
      "C) I-vi-IV-V",
      "D) i-iv-v"
    ],
    correctIndex: 2
  }
];

const CTest = () => {
  const navigate = useNavigate();
  const { markLessonCompleted } = useProgress();
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

  const markAsCompleted = async () => {
    await markLessonCompleted('ctest');
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Teste Final: Acordes</Text>
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Teste Final: Acordes</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                Agora vamos testar seu conhecimento sobre acordes.
                <br/>
                <br/>
                Está preparado?
              </Text>
              <Text textAlign="center" fontSize="10rem" >🎹</Text>
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
                          Parabéns! Você completou o teste de acordes!
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
};

export { CTest }; 
