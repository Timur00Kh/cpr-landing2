import React, { useCallback, useContext, useReducer } from 'react';
import { Button } from '@/components/Button/Button';
import { Input, PhoneInput } from '@/components/Input/Input';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import cn from 'classnames';
import { ModalContext } from '@/layouts/PrimaryLayout';
import { Select } from '@/components/Select/Select';
import classes from './CallForm.module.scss';

let tempId = 0;
const hours = generate(11, 9);
const minutes = generate(61);

interface FormData {
  phone?: string;
  agree?: boolean;
  hour?: string;
  minute?: string;
}

interface FocusedOnce {
  phone?: boolean;
  agree?: boolean;
}

const defaultData = { phone: '', agree: true, hour: '09', minute: '00' };

export const CallForm: React.FC = () => {
  tempId += 1;
  const [, setModal] = useContext(ModalContext);

  const [data, setData] = useReducer(
    (s: FormData, a: FormData) => ({ ...s, ...a }),
    defaultData
  );
  const [focusedOnce, setFocusedOnce] = useReducer(
    (s: FocusedOnce, a: FocusedOnce) => ({ ...s, ...a }),
    {}
  );

  const onClick = useCallback(async () => {
    if (data.phone.length === 11 && data.agree) {
      const res = await sendForm(
        data.phone,
        `Предпочтительное время: ${getNextWork(
          new Date()
        ).toLocaleDateString()} в ${data.hour} часов ${data.minute} минут`
      );
      if (res.ok) {
        setFocusedOnce({ phone: false, agree: false });
        setData(defaultData);
        setModal({ success: true, orderCall: false });
      } else {
        setFocusedOnce({ agree: true, phone: true });
        alert(`Ошибка!`);
      }
    } else {
      setFocusedOnce({ phone: true, agree: true });
    }
  }, [data]);

  const nextWordDay = getNextWork(new Date());

  return (
    <form className={classes.call_form}>
      <h3 className={classes.header}>Заявка на звонок</h3>
      <p className={classes.text}>
        Оставьте свой номер, и мы перезвоним вам и ответим на любые вопросы.
      </p>
      <PhoneInput
        error={data.phone.length < 11 && focusedOnce.phone}
        value={data.phone}
        onBlur={() => setFocusedOnce({ phone: true })}
        // onChange={(e) => setData({ phone: e.target.value })}
        onAccept={(e) => setData({ phone: e.unmaskedValue })}
        style={{ margin: '24px 0' }}
        type="tel"
        placeholder="Ваш номер телефона*"
      />
      <div style={{ marginBottom: '22px' }} className={classes.time_pick_wrap}>
        <div
          style={{ display: 'flex', alignItems: 'center', marginRight: 'auto' }}
        >
          <p className={classes.text}>Перезвоним вам в</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Select
            onChange={(v) => setData({ hour: v })}
            options={hours}
            value={data.hour}
          />
          <div
            style={{ margin: '0 16px', display: 'flex', alignItems: 'center' }}
            className={classes.text}
          >
            <svg
              width="4"
              height="15"
              viewBox="0 0 4 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="13" r="2" fill="white" />
              <circle cx="2" cy="2" r="2" fill="white" />
            </svg>
          </div>
          <Select
            onChange={(v) => setData({ minute: v })}
            options={minutes}
            value={data.minute}
          />
        </div>
      </div>
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

function generate(count: number, shift = 0) {
  return new Array(count).fill(null).map((e, i) => pad(i + shift, 2));
}
