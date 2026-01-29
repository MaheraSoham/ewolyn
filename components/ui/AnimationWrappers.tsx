"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
}

export const FadeIn = ({ children, className = "", delay = 0, duration = 0.5 }: Props) => (
    <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration, delay, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);

export const SlideUp = ({ children, className = "", delay = 0, duration = 0.5 }: Props) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration, delay, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);

interface SlideInProps extends Props {
    direction?: "left" | "right" | "up" | "down";
}

export const SlideIn = ({
    children,
    className = "",
    delay = 0,
    duration = 0.5,
    direction = "up"
}: SlideInProps) => {
    const variants = {
        left: { x: -50, opacity: 0 },
        right: { x: 50, opacity: 0 },
        up: { y: 20, opacity: 0 },
        down: { y: -20, opacity: 0 }
    };

    return (
        <motion.div
            className={className}
            initial={variants[direction]}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export const StaggerContainer = ({
    children,
    className = "",
    staggerDelay = 0.1,
    delayChildren = 0
}: Props & { staggerDelay?: number; delayChildren?: number }) => (
    <motion.div
        className={className}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
            hidden: { opacity: 0 },
            show: {
                opacity: 1,
                transition: {
                    staggerChildren: staggerDelay,
                    delayChildren: delayChildren
                }
            }
        }}
    >
        {children}
    </motion.div>
);

export const StaggerItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
    <motion.div
        className={className}
        variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
        }}
    >
        {children}
    </motion.div>
);

export const ScaleOnHover = ({ children, className = "", scale = 1.05 }: Props & { scale?: number }) => (
    <motion.div
        className={className}
        whileHover={{ scale }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
        {children}
    </motion.div>
);

export const ButtonHover = ({ children, className = "" }: Props) => (
    <motion.div
        className={className}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
        {children}
    </motion.div>
);
