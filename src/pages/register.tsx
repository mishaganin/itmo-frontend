import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { fetch } from '@shared/utils/fetch';

import styles from '@shared/styles/pages/register.module.scss';

interface IFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  isAuthor: boolean;
}

const Register = () => {
  const router = useRouter();

  const initialValues: IFormValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAuthor: false,
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
        isAuthor: Boolean(formValues.isAuthor),
      }),
    };
    const response = await fetch('/auth/sign-up', options);
    router.push('/');
  };

  const validate = (values) => {
    const errors: IFormValues = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (values.username === '') {
      errors.username = 'Username is required!';
    }
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
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Those passwords didn’t match. Try again.';
    }

    return errors;
  };

  return (
    <div className={styles.login}>
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className={styles['input-box']}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
              required
            />
          </div>
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
          <div className={styles['input-box']}>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formValues.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles['input-box']}>
            <input
              type="checkbox"
              name="isAuthor"
              placeholder="Is author"
              value={formValues.isAuthor}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Register</button>
          <div className={styles['register-link-wrapper']}>
            Already have an account?&nbsp;
            <Link className={styles['register-link']} href="/register">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
