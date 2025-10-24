import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import ForwardIcon from "@mui/icons-material/Forward";
import IconButton from "@mui/material/IconButton";
import StoryText from "./StoryText";
import { useNavigate } from "react-router-dom";

const PumpkinUI = () => {
  const text = [
    "Pumpkins weigh about 13 pounds,",
    "and have a diameter of 10 inches.",
    "The largest pumpkin weighed 2749 pounds,",
    "and had a diameter of over 6.5 feet!",
    "That's heavier than a Ford Fiesta!",
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
      <div id="pumpkin" className="panel">
        <StoryText step={step} text={text} />
      </div>
      <div id="pumpkinNext" className="panel">
        {next && (
          <p className="spooky-text red-text">
            Halloween horror
            <IconButton onClick={() => navigate("/halloween")}>
              <ForwardIcon fontSize="large" color="error" />
            </IconButton>
          </p>
        )}
      </div>
    </>
  );
};

export default PumpkinUI;
