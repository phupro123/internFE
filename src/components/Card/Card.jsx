import { twMerge } from 'tailwind-merge';
import nikeIcon from '../../../app/assets/nike.png';

const Card = ({ children, title, className }) => {
    return (
        <div className="relative rounded-default w-80 px-6 shadow-xl h-fit overflow-hidden bg-white z-0">
            <div
                className="absolute -top-10 -left-16 bg-yellow w-40 h-40 -z-10"
                style={{ borderRadius: '74% 26% 65% 35% / 42% 26% 74% 58%' }}
            />
            <img src={nikeIcon} alt="logo" className="w-10 h-6 mt-3" />
            <div className="flex items-center justify-between space-x-4 mb-4 font-bold">{title}</div>
            <div className={twMerge('overflow-y-scroll scrollbar-hide h-[400px]', className)}>{children}</div>
        </div>
    );
};

export default Card;
