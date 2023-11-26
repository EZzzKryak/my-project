import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.mainLink}
                    // eslint-disable-next-line i18next/no-literal-string
                    to="/about"
                >
                    {t('О сайте')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">
                    {t('Главная')}
                </AppLink>
            </div>
        </div>
    );
}
