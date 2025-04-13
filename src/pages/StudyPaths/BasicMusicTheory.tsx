import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const BasicMusicTheory = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate('/study-path')}>Click</Button>
  )
}

export { BasicMusicTheory }
