import './Progress.css';

const Progress = () => {
  const circumference = 29 * 2 * Math.PI;
  const offset = circumference - ((100 / 100) * circumference); const progress = {
    strokeDashoffset: offset,
    strokeDasharray: `${circumference} ${circumference}`,
  };
  return (
    <div className="progress-container">
      <svg
        className="progress-bar-container"
        width="68"
        height="68"
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="#307bbe" />
            <stop offset="100%" stopColor="#307bbe" />
            {' '}

          </linearGradient>
        </defs>
        <circle
          className="border"
          strokeWidth="5"
          fill="transparent"
          r="29"
          cx="34"
          cy="34"
        />
        <circle
          className="progress-bar"
          style={progress}
          strokeWidth="5"
          fill="transparent"
          r="29"
          cx="34"
          cy="34"
        />
      </svg>
      <p className="progress-value">
        0%
        <span>completed</span>
      </p>
    </div>
  );
};
export default Progress;
