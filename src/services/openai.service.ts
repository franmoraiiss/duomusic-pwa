interface Question {
  question: string;
  options: string[];
  correctIndex: number;
}

export const openaiService = {
  async generateMusicTheoryQuestions(topic: string, count: number): Promise<Question[]> {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/openai/generate-questions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic,
          count
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.questions || !Array.isArray(data.questions)) {
        throw new Error('Invalid response format from backend');
      }

      return data.questions;
    } catch (error) {
      console.error('Error generating questions:', error);
      // Fallback to default questions if API call fails
      return [
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
      ];
    }
  }
}; 
