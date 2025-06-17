
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import ModernCard from './ModernCard';

interface BentoGridProps {
  children: ReactNode;
  className?: string;
  columns?: 2 | 3 | 4;
}

interface BentoItemProps {
  children: ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'wide' | 'tall';
  delay?: number;
}

const BentoGrid = ({ children, className = '', columns = 3 }: BentoGridProps) => {
  const gridClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid ${gridClasses[columns]} gap-6 auto-rows-fr ${className}`}>
      {children}
    </div>
  );
};

export const BentoItem = ({ 
  children, 
  className = '', 
  size = 'medium',
  delay = 0
}: BentoItemProps) => {
  const sizeClasses = {
    small: '',
    medium: 'md:col-span-1 md:row-span-1',
    large: 'md:col-span-2 md:row-span-2',
    wide: 'md:col-span-2 md:row-span-1',
    tall: 'md:col-span-1 md:row-span-2'
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: delay * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
      }
    }
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className}`}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <ModernCard 
        variant="bento" 
        className="h-full flex flex-col justify-between min-h-[200px]"
        hover={true}
        glow={true}
      >
        {children}
      </ModernCard>
    </motion.div>
  );
};

export default BentoGrid;
