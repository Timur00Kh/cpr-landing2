import React, { useCallback, useReducer } from 'react';
import { Button } from '@/components/Button/Button';
import { Input } from '@/components/Input/Input';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import cn from 'classnames';
import classes from './CallForm.module.scss';

let tempId = 0;

interface FormData {
  phone?: string;
  agree?: boolean;
}

interface FocusedOnce {
  phone?: boolean;
  agree?: boolean;
}

export const CallForm: React.FC = () => {
  tempId += 1;

  const [data, setData] = useReducer(
    (s: FormData, a: FormData) => ({ ...s, ...a }),
    { phone: '', agree: false }
  );
  const [focusedOnce, setFocusedOnce] = useReducer(
    (s: FocusedOnce, a: FocusedOnce) => ({ ...s, ...a }),
    {}
  );

  const onClick = useCallback(async () => {
    if (data.phone && data.agree) {
      const res = await sendForm(data.phone, 'Заявка на звонок');
      if (res.ok) {
        alert('Заявка отправлена');
        setFocusedOnce({});
        setData({});
      } else {
        setFocusedOnce({ agree: true, phone: true });
        alert(`Ошибка! \n${JSON.stringify(res)}`);
      }
    } else {
      setFocusedOnce({ phone: true, agree: true });
    }
  }, [data]);

  const nextWordDay = getNextWork(new Date());

  return (
    <form className={classes.call_form}>
      <h3 className={classes.header}>Заявка на проект</h3>
      <p className={classes.text}>
        Оставьте свой номер, и мы перезвоним вам и ответим на любые вопросы.
      </p>
      <Input
        value={data.phone}
        onBlur={() => setFocusedOnce({ phone: true })}
        error={!data.phone && focusedOnce.phone}
        onChange={(e) => setData({ phone: e.target.value })}
        style={{ margin: '24px 0' }}
        type="tel"
        placeholder="Ваш номер телефона*"
      />
      <p style={{ marginBottom: '14px' }} className={classes.text}>
        Мы можем позвонить {nextWordDay.getDate()}.
        {pad(nextWordDay.getMonth() + 1, 2)} c 9:00 до 19:55
      </p>
      <div className={classes.hr} />
      <div
        className={cn(classes.checkbox_wrap, {
          [classes.error]: !data.agree && focusedOnce.agree
        })}
      >
        <Checkbox
          checked={data.agree}
          onChange={(e) => {
            setFocusedOnce({ agree: true });
            setData({ agree: e.target.checked });
          }}
          id={`call_form_${tempId}`}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label
          style={{ marginLeft: '16px' }}
          className={classes.agree_text}
          htmlFor={`call_form_${tempId}`}
        >
          Даю согласие на обработку персональных данных
        </label>
      </div>
      <Button onClick={onClick} block>
        жду звонка
      </Button>
    </form>
  );
};

async function sendForm(phone: string, text: string): Promise<Response> {
  const formData = new FormData();

  formData.append('phone', phone);
  formData.append('text', text);

  return fetch('/order_call.php', {
    method: 'POST',
    body: formData
  });
}

function getNextWork(d: Date) {
  d.setDate(d.getDate() + 1); // tomorrow
  if (d.getDay() === 0) d.setDate(d.getDate() + 1);
  else if (d.getDay() === 6) d.setDate(d.getDate() + 2);
  return d;
}

function pad(num, size) {
  const s = `000000000${num}`;
  return s.substr(s.length - size);
}
