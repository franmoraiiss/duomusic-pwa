import { Box, Button, Icon, Progress, Text } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { openaiService } from "@/services/openai.service";

interface Question {
  question: string;
  options: string[];
  correctIndex: number;
}

interface UserAnswer {
  question: Question;
  userAnswer: number;
  isCorrect: boolean;
}

const AITest = () => {
  const navigate = useNavigate();
  const { topicId } = useParams();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState<null | number>(null);
  const [isCorrect, setIsCorrect] = useState<null | boolean>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    const generateQuestions = async () => {
      try {
        const generatedQuestions = await openaiService.generateMusicTheoryQuestions(topicId || 'basic', 10);
        setQuestions(generatedQuestions);
      } catch (error) {
        console.error('Error generating questions:', error);
      } finally {
        setLoading(false);
      }
    };

    generateQuestions();
  }, [topicId]);

  if (loading) {
    return (
      <Box 
        backgroundColor="#F6F5F5"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text>Gerando questões...</Text>
      </Box>
    );
  }

  if (questions.length === 0) {
    return (
      <Box 
        backgroundColor="#F6F5F5"
        height="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Text>Erro ao gerar questões. Tente novamente.</Text>
        <Button marginTop="1rem" onClick={() => navigate(-1)}>Voltar</Button>
      </Box>
    );
  }

  if (showSummary) {
    const incorrectAnswers = userAnswers.filter(answer => !answer.isCorrect);
    const percentage = (score / questions.length) * 100;

    return (
      <Box 
        backgroundColor="#F6F5F5"
        height="100vh"
        overflow="auto"
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
          <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">
            Resultado Final
          </Text>
          <Text fontSize="1.5rem" color="#2D0C57" textAlign="center" marginTop="1rem">
            {score} de {questions.length} acertos ({percentage.toFixed(0)}%)
          </Text>
        </Box>

        {incorrectAnswers.length > 0 && (
          <Box padding="2rem">
            <Text fontSize="1.5rem" fontWeight="bold" marginBottom="1rem">
              Questões incorretas:
            </Text>
            {incorrectAnswers.map((answer, index) => (
              <Box 
                key={index} 
                backgroundColor="white" 
                padding="1rem" 
                marginBottom="1rem"
                borderRadius="md"
                boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
              >
                <Text fontSize="1.2rem" fontWeight="bold" marginBottom="0.5rem">
                  {answer.question.question}
                </Text>
                <Text color="#F44336" marginBottom="0.5rem">
                  Sua resposta: {answer.question.options[answer.userAnswer]}
                </Text>
                <Text color="#4CAF50">
                  Resposta correta: {answer.question.options[answer.question.correctIndex]}
                </Text>
              </Box>
            ))}
          </Box>
        )}

        <Box padding="2rem" textAlign="center">
          <Button 
            onClick={() => navigate(-1)} 
            colorPalette="purple"
            size="lg"
          >
            Voltar para os tópicos
          </Button>
        </Box>
      </Box>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const handleAnswer = (index: number) => {
    setSelectedOption(index);
    const correct = index === currentQuestion.correctIndex;
    setIsCorrect(correct);
    if (correct) {
      setScore(prev => prev + 1);
    }
    setUserAnswers(prev => [...prev, {
      question: currentQuestion,
      userAnswer: index,
      isCorrect: correct
    }]);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setShowSummary(true);
    }
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">
          Questão {currentQuestionIndex + 1} de {totalQuestions}
        </Text>
        <Text fontSize="1rem" color="#2D0C57" textAlign="center" marginTop="1rem">
          Pontuação: {score}/{totalQuestions}
        </Text>
      </Box>

      <Progress.Root value={(100 * (currentQuestionIndex + 1)) / totalQuestions} size="xs" colorPalette="green">
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>

      <Box padding="2rem">
        <Text fontSize="1.5rem" marginBottom="2rem">
          {currentQuestion.question}
        </Text>

        {currentQuestion.options.map((option, index) => (
          <Button
            key={index}
            width="100%"
            marginBottom="1rem"
            padding="1rem"
            backgroundColor={
              selectedOption === index
                ? isCorrect
                  ? "#4CAF50"
                  : "#F44336"
                : "white"
            }
            color={selectedOption === index ? "white" : "#2D0C57"}
            onClick={() => !selectedOption && handleAnswer(index)}
            _hover={{ backgroundColor: selectedOption ? undefined : "#F0E6FF" }}
            disabled={selectedOption !== null}
          >
            {option}
          </Button>
        ))}

        {selectedOption !== null && (
          <Box marginTop="2rem" textAlign="center">
            <Button onClick={nextQuestion} colorPalette="purple">
              {currentQuestionIndex < totalQuestions - 1 ? "Próxima Questão" : "Ver Resultado"}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export { AITest }; 
