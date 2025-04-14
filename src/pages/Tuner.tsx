import TunerComponent from "@/components/tuner-component"
import { Box, Icon } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";

const Tuner = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        position="fixed"
        top="0"
        zIndex="1000"
      >
        <Icon margin="1rem" onClick={() => navigate(-1)} color="white">
          <ChevronLeft />
        </Icon>
      </Box>
      <TunerComponent />
    </>
  );
}

export { Tuner };
