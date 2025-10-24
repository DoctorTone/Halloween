import Typography from "@mui/material/Typography";
import { motion, AnimatePresence } from "framer-motion";

interface StoryProps {
  step: number;
  text: string[];
}

const StoryText = ({ step, text }: StoryProps) => {
  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          style={{ position: "absolute" }}
        >
          <Typography sx={{ fontSize: "1.75rem" }}>{text[step]}</Typography>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default StoryText;
