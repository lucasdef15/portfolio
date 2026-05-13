import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';

type BtnSliderProps = {
  onSlide: () => void;
  direction: 'next' | 'prev';
};

export default function BtnSlider({ onSlide, direction }: BtnSliderProps) {
  const isNext = direction === 'next';
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onSlide();
      }}
      className={`absolute top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-content-center rounded-full border-0 bg-white/90 text-xl text-[#42446e] shadow-md transition-colors duration-200 hover:bg-[#42446e] hover:text-white ${
        isNext ? 'right-2' : 'left-2'
      }`}
      aria-label={isNext ? 'Próxima imagem' : 'Imagem anterior'}
    >
      {isNext ? <BsFillCaretRightFill /> : <BsFillCaretLeftFill />}
    </button>
  );
}
