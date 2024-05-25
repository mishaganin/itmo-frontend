import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { fetch } from '@shared/utils/fetch';

import styles from '@shared/styles/pages/login.module.scss';

interface IFormValues {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();

  const initialValues: IFormValues = {
    email: '',
    password: '',
  };
  const [formValues, setFormValues] = useState<IFormValues>(initialValues);
  const [formErrors, setFormErrors] = useState<IFormValues>({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: formValues.username,
        email: formValues.email,
        password: formValues.password,
      }),
    };
    const response = await fetch('/auth/sign-in', options);
    // document.cookie('token', token, { httpOnly: true });
    if (response.ok) {
      router.push('/posts');
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);
  const validate = (values) => {
    const errors: IFormValues = {
      email: '',
      password: '',
    };
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (values.email === '') {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }
    if (values.password === '') {
      errors.password = 'Password is required';
    } else if (values.password.length < 4) {
      errors.password = 'Password must be more than 4 characters';
    } else if (values.password.length > 10) {
      errors.password = 'Password cannot exceed more than 10 characters';
    }

    return errors;
  };

  return (
    <div className={styles.login}>
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className={styles['input-box']}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles['input-box']}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
          <div className={styles['login-link-wrapper']}>
            Don't have an account?&nbsp;
            <Link className={styles['login-link']} href="/register">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
