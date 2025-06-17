
import { ReactNode } from 'react';

interface ModernCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'gradient' | 'bento';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  glow?: boolean;
}

const ModernCard = ({ 
  children, 
  className = '', 
  variant = 'default',
  size = 'md',
  hover = true,
  glow = false
}: ModernCardProps) => {
  const baseClasses = 'rounded-xl border transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-gray-800/50 border-gray-700/50',
    glass: 'glass-card border-white/10',
    gradient: 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700/30',
    bento: 'glass-card border-white/5 backdrop-blur-xl'
  };

  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  const hoverClasses = hover 
    ? 'hover:scale-105 hover:shadow-2xl cursor-pointer' 
    : '';

  const glowClasses = glow 
    ? 'hover-glow' 
    : '';

  return (
    <div
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${hoverClasses}
        ${glowClasses}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default ModernCard;
