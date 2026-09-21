'use client';

import React, { useState, type FC } from 'react';
import { motion, type Transition } from 'motion/react';
import { cn } from '@/lib/utils';

export interface DockItem {
  id: number;
  label: string;
  href: string;
  Icon: React.ElementType;
}

interface DockProps {
  items: DockItem[];
  activeId?: number | null;
  onSelect?: (id: number) => void;
}

const dockSpring: Transition = {
  stiffness: 300,
  damping: 22,
  mass: 0.7,
};

export const Dock: FC<DockProps> = ({ items, activeId = null, onSelect }) => {
  const [animateSelected, setAnimateSelected] = useState<number | null>(null);

  const handleClick = (item: DockItem) => {
    onSelect?.(item.id);
    setAnimateSelected(item.id);
    setTimeout(() => {
      setAnimateSelected(null);
    }, 200);
    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      layout
      transition={dockSpring}
      className="relative flex items-end gap-2.5 rounded-2xl border border-border bg-card/90 px-3 py-2 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_40px_-10px_rgba(0,0,0,0.6)] backdrop-blur-md"
    >
      {items.map((item) => (
        <motion.button
          key={item.id}
          type="button"
          aria-label={item.label}
          className="group relative"
          onClick={() => handleClick(item)}
          style={{ transformOrigin: 'bottom' }}
          initial={{ scale: 1 }}
          whileHover={{ y: -4 }}
          animate={{
            scale: animateSelected === item.id ? 1.3 : 1,
            y: animateSelected === item.id ? -6 : 0,
          }}
          transition={{ type: 'spring', stiffness: 550, damping: 15, mass: 1.1 }}
        >
          <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md border border-border bg-popover px-2 py-1 font-mono-label text-[10px] whitespace-nowrap text-foreground opacity-0 transition-opacity duration-150 group-hover:opacity-100">
            {item.label}
          </span>

          <span className="block cursor-pointer rounded-md bg-secondary p-2">
            <item.Icon
              className={cn(
                'size-4 text-muted-foreground transition-all duration-200',
                activeId === item.id && 'text-primary',
              )}
            />
          </span>

          <span
            className={cn(
              'absolute inset-x-0 mt-px flex items-center justify-center opacity-0 transition-opacity duration-400',
              activeId === item.id && 'opacity-100',
            )}
          >
            <span className="size-1 rounded-full bg-primary" />
          </span>
        </motion.button>
      ))}
    </motion.div>
  );
};
