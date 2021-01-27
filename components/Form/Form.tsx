import { Input } from '@/components/Input/Input';
import { Button } from '@/components/Button/Button';
import React, {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState
} from 'react';
import cn from 'classnames';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import classes from './Form.module.scss';
import { ModalContext } from '@/layouts/PrimaryLayout';

let tempId = 0;

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

interface FormData {
  name?: string;
  email?: string;
  phone?: string;
  agree?: boolean;
}

interface FormDataFocused {
  name?: boolean;
  email?: boolean;
  phone?: boolean;
  agree?: boolean;
}

export const Form: React.FC<Props> = ({ style, className }) => {
  const [id, setId] = useState(tempId);
  const [formData, setFormData] = useReducer(
    (s: FormData, a: FormData) => ({ ...s, ...a }),
    { name: '', email: '', phone: '', agree: true }
  );
  const [focusedOnce, setFocusedOnce] = useReducer(
    (s: FormDataFocused, a: FormDataFocused) => ({ ...s, ...a }),
    {}
  );

  useEffect(() => {
    tempId += 1;
    setId(tempId);
  }, []);

  const [, setModal] = useContext(ModalContext);

  const onClick = useCallback(async () => {
    if (formData.agree && formData.name && formData.phone && formData.email) {
      const res = await sendForm(formData.name, formData.email, formData.phone);
      if (res.ok) {
        setFocusedOnce({});
        setFormData({});
        setModal({ success: true, orderProj: false });
      } else {
        alert(`Ошибка!`);
      }
    } else {
      setFocusedOnce({ name: true, agree: true, email: true, phone: true });
    }
  }, [formData]);

  return (
    <form style={style} className={cn(className, classes.form_wrap)}>
      <h3 className={classes.form_header}>Заявка на проект</h3>
      <Input
        error={!formData.name && focusedOnce.name}
        onBlur={() => setFocusedOnce({ name: true })}
        value={formData.name}
        onChange={(e) => setFormData({ name: e.currentTarget.value })}
        style={{ marginTop: '30px' }}
        type="text"
        placeholder="Имя*"
      />
      <Input
        error={!formData.phone && focusedOnce.phone}
        onBlur={() => setFocusedOnce({ phone: true })}
        value={formData.phone}
        onChange={(e) => setFormData({ phone: e.currentTarget.value })}
        style={{ marginTop: '30px' }}
        type="tel"
        placeholder="Телефон*"
      />
      <Input
        error={!formData.email && focusedOnce.email}
        onBlur={() => setFocusedOnce({ email: true })}
        value={formData.email}
        onChange={(e) => setFormData({ email: e.currentTarget.value })}
        style={{ marginTop: '30px' }}
        type="email"
        placeholder="Электронная почта*"
      />
      <div
        className={cn(classes.checkbox_wrap, {
          [classes.error]: focusedOnce.agree && !formData.agree
        })}
      >
        <Checkbox
          checked={formData.agree}
          onChange={(e) => {
            setFormData({ agree: e.target.checked });
            setFocusedOnce({ agree: true });
          }}
          id={`form_checkbox_agreement_${id}`}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label
          htmlFor={`form_checkbox_agreement_${id}`}
          style={{ marginLeft: '16px' }}
          className={classes.agree_text}
        >
          Даю согласие на обработку персональных данных
        </label>
      </div>
      <Button onClick={onClick} block>
        Получить предложение
      </Button>
    </form>
  );
};

async function sendForm(
  name: string,
  email: string,
  phone: string
): Promise<Response> {
  const formData = new FormData();

  formData.append('name', name);
  formData.append('email', email);
  formData.append('phone', phone);

  return fetch('/order_project.php', {
    method: 'POST',
    body: formData
  });
}
