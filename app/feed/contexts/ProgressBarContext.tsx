import React from "react";
import ProgressBar from "../components/ProgressBar/ProgressBar";

export interface ProgressBarApi {
  start: () => void;
  stop: () => void;
  restart: () => void;
  progress: number;
}

const ProgressBarContext = React.createContext<ProgressBarApi>({
  start: () => {
    throw new Error("Missing Context Provider");
  },
  stop: () => {
    throw new Error("Missing Context Provider");
  },
  restart: () => {
    throw new Error("Missing Context Provider");
  },
  progress: 0,
});

const ProgressBarContextProvider = ({ children }) => {
  const progressInterval = React.useRef<NodeJS.Timer | null>(null);
  const [progress, setProgress] = React.useState<number>(0);

  React.useEffect(() => {
    if (progress >= 99.9) {
      stop();
      setProgress(100);
    }
  }, [progress]);

  const start = () => {
    if (progress === 100) {
      setProgress(0);
    }

    progressInterval.current = setInterval(() => {
      setProgress((prev) => prev + 0.1);
    }, 10);
  };

  const stop = () => {
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
      progressInterval.current = null;
    }
  };

  const restart = () => {
    stop();
    setProgress(0);
    start();
  };

  return (
    <ProgressBarContext.Provider value={{ progress, start, stop, restart }}>
      {children}
      <ProgressBar progress={progress} />
    </ProgressBarContext.Provider>
  );
};

export const useProgressBarApi = (): ProgressBarApi => React.useContext(ProgressBarContext);

export default ProgressBarContextProvider;
