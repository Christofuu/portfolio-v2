import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingShapes = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const shapes = [
    {
      id: 1,
      size: "w-20 h-20",
      left: "25%",
      color: "bg-secondary-400/50",
      darkColor: "bg-secondary-500/20",
      duration: 20,
      delay: 0,
    },
    {
      id: 2,
      size: "w-5 h-5",
      left: "10%",
      color: "bg-secondary-300/50",
      darkColor: "bg-secondary-500/20",
      duration: 25,
      delay: 2,
    },
    {
      id: 3,
      size: "w-5 h-5",
      left: "70%",
      color: "bg-secondary-500/50",
      darkColor: "bg-secondary-500/20",
      duration: 20,
      delay: 4,
    },
    {
      id: 4,
      size: "w-16 h-16",
      left: "40%",
      color: "bg-secondary-400/50",
      darkColor: "bg-secondary-500/20",
      duration: 15,
      delay: 1,
    },
    {
      id: 5,
      size: "w-3 h-3",
      left: "65%",
      color: "bg-secondary-300/50",
      darkColor: "bg-secondary-500/20",
      duration: 20,
      delay: 3,
    },
    {
      id: 6,
      size: "w-24 h-24",
      left: "75%",
      color: "bg-secondary-500/50",
      darkColor: "bg-secondary-500/20",
      duration: 25,
      delay: 5,
    },
    {
      id: 7,
      size: "w-12 h-12",
      left: "35%",
      color: "bg-secondary-400/50",
      darkColor: "bg-secondary-500/20",
      duration: 30,
      delay: 2.5,
    },
    {
      id: 8,
      size: "w-6 h-6",
      left: "50%",
      color: "bg-secondary-300/50",
      darkColor: "bg-secondary-500/20",
      duration: 35,
      delay: 4.5,
    },
    {
      id: 9,
      size: "w-4 h-4",
      left: "20%",
      color: "bg-secondary-500/50",
      darkColor: "bg-secondary-500/20",
      duration: 40,
      delay: 1.5,
    },
    {
      id: 10,
      size: "w-14 h-14",
      left: "85%",
      color: "bg-secondary-400/50",
      darkColor: "bg-secondary-500/20",
      duration: 45,
      delay: 3.5,
    },
    {
      id: 11,
      size: "w-8 h-8",
      left: "5%",
      color: "bg-secondary-300/50",
      darkColor: "bg-secondary-500/20",
      duration: 28,
      delay: 6,
    },
    {
      id: 12,
      size: "w-6 h-6",
      left: "90%",
      color: "bg-secondary-500/50",
      darkColor: "bg-secondary-500/20",
      duration: 32,
      delay: 1.8,
    },
  ];

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute rounded-full ${shape.size} ${shape.color} dark:${shape.darkColor}`}
          style={{
            left: shape.left,
            bottom: "-150px",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          initial={{
            y: 0,
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            y: "-120vh",
            rotate: 720,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;