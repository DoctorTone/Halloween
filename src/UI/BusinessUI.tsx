import { useEffect, useState } from "react";
import ForwardIcon from "@mui/icons-material/Forward";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import StoryText from "./StoryText";

const BusinessUI = () => {
  const text = [
    "Halloween is big business.",
    "Last year the UK spent £1.2 billion!",
    "The US spent $12.2 billion!!",
    "That's a lot of candy...",
  ];
  const [step, setStep] = useState(0);
  const [next, setNext] = useState(false);
  const navigate = useNavigate();

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
    }, 3000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <>
      <div id="business" className="panel">
        <StoryText step={step} text={text} />
      </div>
      <div id="businessNext" className="panel">
        {next && (
          <p className="spooky-text red-text text-large">
            Pumpkin facts!
            <IconButton onClick={() => navigate("/pumpkin")}>
              <ForwardIcon fontSize="large" color="error" />
            </IconButton>
          </p>
        )}
      </div>
    </>
  );
};

export default BusinessUI;
