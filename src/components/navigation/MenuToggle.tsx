import { motion, type SVGMotionProps } from 'framer-motion';

function Path(props: SVGMotionProps<SVGPathElement>) {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 100%)"
      strokeLinecap="round"
      {...props}
    />
  );
}

type MenuToggleProps = {
  toggle: () => void;
};

export function MenuToggle({ toggle }: MenuToggleProps) {
  return (
    <button
      type="button"
      onClick={toggle}
      className="absolute right-[45px] top-[19px] h-[50px] w-[50px] cursor-pointer rounded-full border-0 bg-transparent outline-none"
    >
      <svg width="23" height="23" viewBox="0 0 23 23" className="mx-auto">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  );
}
