import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <form className={classNames(cls.loginForm, {}, [className])}>
            <Input
                placeholder={t('Введите логин')}
                className={cls.input}
                type="text"
                autofocus
            />
            <Input
                placeholder={t('Введите пароль')}
                className={cls.input}
                type="text"
            />
            <Button className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </form>
    );
};
