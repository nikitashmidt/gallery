import useTheme from '../../hooks/useTheme';
import '../../style/style.scss';
import cn from 'classnames';

const Layot = ({ children }) => {
    const { isDark } = useTheme();
    return (
        <div className={cn('layout', {
            dark: isDark,
        })}  >{children}</div>
    );
};

export default Layot;