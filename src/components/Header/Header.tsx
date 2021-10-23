import { Wrapper } from './styles.header';
import pen from '../../assets/icons/barretr_Pencil.svg';
import lightMode from '../../assets/icons/light_mode.svg';
import darkMode from '../../assets/icons/dark_mode.svg';
import { motion } from 'framer-motion';

const headingText = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.05,
    },
  },
};

const line = 'My Todo List';

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

interface IProps {
  isDarkTheme: Boolean;
  setTheme: React.Dispatch<React.SetStateAction<Boolean>>;
}

const Header: React.FC<IProps> = ({ isDarkTheme, setTheme }) => {
  const toggleTheme: () => void = () => {
    setTheme((prev) => !prev);
  };

  return (
    <Wrapper>
      <img className='logo' src={pen} alt='' width={36} />
      <motion.h1 variants={headingText} initial='hidden' animate='visible'>
        {line.split('').map((char, index) => (
          <motion.span key={index} variants={letter}>
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <img
        className='mode'
        src={isDarkTheme ? lightMode : darkMode}
        alt='light'
        width={36}
        onClick={toggleTheme}
      />
    </Wrapper>
  );
};

export default Header;
