
import { motion } from 'framer-motion';
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

  const cardVariants = {
    initial: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: hover ? {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    } : {},
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <motion.div
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${hoverClasses}
        ${glowClasses}
        ${className}
      `}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
    >
      {/* Shimmer Effect */}
      <div className="relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeInOut"
          }}
        />
        {children}
      </div>
    </motion.div>
  );
};

export default ModernCard;
