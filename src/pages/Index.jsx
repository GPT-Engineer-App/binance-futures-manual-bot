import { useState } from "react";
import { Container, VStack, Text, Input, Button, HStack, Box, IconButton, useToast } from "@chakra-ui/react";
import { FaPlay, FaStop } from "react-icons/fa";

const Index = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const toast = useToast();

  const handleStart = () => {
    if (!symbol || !quantity || !price) {
      toast({
        title: "Błąd",
        description: "Wszystkie pola muszą być wypełnione.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    setIsRunning(true);
    toast({
      title: "Bot uruchomiony",
      description: `Symbol: ${symbol}, Ilość: ${quantity}, Cena: ${price}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleStop = () => {
    setIsRunning(false);
    toast({
      title: "Bot zatrzymany",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Bot Binance Futures Manual</Text>
        <Input placeholder="Symbol (np. BTCUSDT)" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
        <Input placeholder="Ilość" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <Input placeholder="Cena" value={price} onChange={(e) => setPrice(e.target.value)} />
        <HStack spacing={4}>
          <IconButton aria-label="Start" icon={<FaPlay />} size="lg" colorScheme="green" onClick={handleStart} isDisabled={isRunning} />
          <IconButton aria-label="Stop" icon={<FaStop />} size="lg" colorScheme="red" onClick={handleStop} isDisabled={!isRunning} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
