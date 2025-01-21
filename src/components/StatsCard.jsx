const StatsCard = ({ value, label, color = 'blue' }) => {
  const textColor = color === 'blue' ? 'text-cyber-blue' : 'text-cyber-magenta';
  const hoverGradient = 'hover:bg-gradient-to-br hover:from-cyber-blue/5 hover:to-cyber-magenta/5';
  
  return (
    <div
      className={`cyber-border bg-black/50 backdrop-blur-sm p-8
                 ${hoverGradient} transition-all duration-500`}
    >
      <div className="text-4xl font-bold text-white mb-4 tracking-tight">
        {value}
      </div>
      <div className={`${textColor} text-sm tracking-wider`}>
        {label}
      </div>
    </div>
  );
}

export default StatsCard;