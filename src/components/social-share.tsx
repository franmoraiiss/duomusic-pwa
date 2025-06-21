import { Box, Button, HStack, Text, VStack, Icon } from "@chakra-ui/react";
import { Share2, Facebook, Twitter, MessageCircle } from "lucide-react";

interface SocialShareProps {
  exerciseProgress: { percentage: number; completed: number; total: number };
  moduleProgress: { percentage: number; completed: number; total: number };
  streak: number;
  userName?: string;
}

export const SocialShare = ({ exerciseProgress, moduleProgress, streak, userName }: SocialShareProps) => {
  const generateShareText = () => {
    const name = userName || "Estudante";
    const exerciseText = `${exerciseProgress.completed}/${exerciseProgress.total} exercícios completados`;
    const moduleText = `${moduleProgress.completed}/${moduleProgress.total} módulos concluídos`;
    const streakText = streak > 0 ? `${streak} dias de streak 🔥` : "Começando minha jornada musical";
    
    return `🎵 ${name} está aprendendo música no DuoMusic!\n\n${exerciseText}\n${moduleText}\n${streakText}\n\nVenha aprender música comigo! 🎼`;
  };

  const shareText = generateShareText();
  const encodedText = encodeURIComponent(shareText);
  const appUrl = window.location.origin;

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(appUrl)}&quote=${encodeURIComponent(shareText)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodeURIComponent(appUrl)}`,
    whatsapp: `https://wa.me/?text=${encodedText}%20${encodeURIComponent(appUrl)}`
  };

  const handleShare = (platform: 'facebook' | 'twitter' | 'whatsapp') => {
    const url = shareUrls[platform];
    window.open(url, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Meu Progresso no DuoMusic',
          text: shareText,
          url: appUrl,
        });
      } catch {
        // Ignore share errors
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareText}\n\n${appUrl}`);
        alert('Texto copiado para a área de transferência!');
      } catch {
        // Ignore clipboard errors
      }
    }
  };

  return (
    <Box paddingY="1rem">
      <Text fontWeight="bold" marginBottom="1rem">Compartilhar Progresso</Text>
      
      <VStack width="100%">
        <Button
          width="full"
          backgroundColor="#0BCE83"
          color="white"
          onClick={handleNativeShare}
        >
          <HStack>
            <Icon><Share2 size={20} /></Icon>
            <Text>Compartilhar</Text>
          </HStack>
        </Button>

        <HStack width="100%">
          <Button
            flex="1"
            backgroundColor="#1877F2"
            color="white"
            onClick={() => handleShare('facebook')}
          >
            <HStack>
              <Icon><Facebook size={20} /></Icon>
              <Text>Facebook</Text>
            </HStack>
          </Button>
          
          <Button
            flex="1"
            backgroundColor="#1DA1F2"
            color="white"
            onClick={() => handleShare('twitter')}
          >
            <HStack>
              <Icon><Twitter size={20} /></Icon>
              <Text>X (Twitter)</Text>
            </HStack>
          </Button>
          
          <Button
            flex="1"
            backgroundColor="#25D366"
            color="white"
            onClick={() => handleShare('whatsapp')}
          >
            <HStack>
              <Icon><MessageCircle size={20} /></Icon>
              <Text>WhatsApp</Text>
            </HStack>
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}; 
