import React from "react";
import ProgressBar from "../components/ProgressBar/ProgressBar";

export interface ProgressBarApi {
  start: () => void;
  stop: () => void;
  restart: () => void;
  progress: number;
  stopped: boolean;
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
  stopped: true,
});

const ProgressBarContextProvider = ({ children }) => {
  const progressInterval = React.useRef<NodeJS.Timer | null>(null);
  const [progress, setProgress] = React.useState<number>(0);
  const [stopped, setStopped] = React.useState<boolean>(true);

  const updateProgressInterval = (setNull: boolean = false) => {
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
      progressInterval.current = null;
    }

    if (!setNull) {
      progressInterval.current = setInterval(() => {
        setProgress((prev) => prev + 0.1);
      }, 10);
    }
  };

  React.useEffect(() => {
    if (progress >= 99.9) {
      stop();
      setProgress(100);
    }
  }, [progress]);

  const start = () => {
    setStopped(false);

    if (progress === 100) {
      setProgress(0);
    }

    updateProgressInterval();
  };

  const stop = () => {
    setStopped(true);
    updateProgressInterval(true);
  };

  const restart = () => {
    stop();
    setProgress(0);
    start();
  };

  return (
    <ProgressBarContext.Provider value={{ progress, start, stop, restart, stopped }}>
      {children}
      <ProgressBar progress={progress} />
    </ProgressBarContext.Provider>
  );
};

export const useProgressBarApi = (): ProgressBarApi => React.useContext(ProgressBarContext);

export default ProgressBarContextProvider;
