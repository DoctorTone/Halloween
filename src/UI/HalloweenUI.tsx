import { useEffect, useState } from "react";
import ForwardIcon from "@mui/icons-material/Forward";
import IconButton from "@mui/material/IconButton";
import StoryText from "./StoryText";
import { useNavigate } from "react-router-dom";

const HalloweenUI = () => {
  const text = [
    `Hallowen (1978) was one of the first "slasher" horrors.`,
    "The budget was $300K...",
    "It grossed $47M at US box office!",
    "Not bad for 20 days filming.",
    "That's over $150M today!",
    "Bonus fact - the scary mask you see the killer wear...",
    "is actually William Shatner!",
  ];
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [next, setNext] = useState(false);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setStep((prev) => {
        if (prev < text.length - 1) {
          return prev + 1;
        } else {
          clearInterval(intervalID);
          setNext(true);
          return prev;
        }
      });
    }, 4000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <>
      <div id="halloween" className="panel">
        <StoryText step={step} text={text} />
      </div>
      <div id="halloweenNext" className="panel">
        {next && (
          <p className="spooky-text red-text">
            One more thing
            <IconButton onClick={() => navigate("/end")}>
              <ForwardIcon fontSize="large" color="error" />
            </IconButton>
          </p>
        )}
      </div>
    </>
  );
};

export default HalloweenUI;
