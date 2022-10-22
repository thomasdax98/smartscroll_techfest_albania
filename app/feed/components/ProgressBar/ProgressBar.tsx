import React from "react";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  const width = React.useRef<number>(0);

  React.useEffect(() => {
    width.current = window.innerWidth;
  });

  return (
    <div className="absolute z-50 top-0 h-1 w-screen">
      <div
        className="h-1 bg-primary"
        style={{ width: width.current > 0 ? (width.current / 100) * progress : 0 }}
      />
    </div>
  );
};

export default ProgressBar;
