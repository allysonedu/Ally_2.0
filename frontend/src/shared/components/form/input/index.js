import { Container, Error } from './styles';

import { useField } from '@unform/core';

import { TfiAlert } from 'react-icons/tfi'; // Icon de error

import { useCallback, useEffect, useRef, useState } from 'react';

import { useTheme } from 'styled-components';

export const Input = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef(null);

  const theme = useTheme();

  const [isFocused, setIsFocused] = useState(false); // Responsavel por dar cor no Input quando tem Text dentro!
  const [isFilled, setIsFilled] = useState(false); // Responsavel por dar cor no Input quando tem Text dentro!

  const { fieldName, registerField, error, defaultValue } = useField(name);

  const handleOnBlur = useCallback(() => {
    setIsFocused(false); // Responsavel por dar cor no Input quando tem Text dentro!

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleOnFocus = useCallback(() => {
    setIsFocused(true);
  }, []); // Responsavel por dar cor no Input quando tem Text dentro!

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      <input
        defaultValue={defaultValue}
        ref={inputRef}
        type="text"
        {...rest}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      {error && (
        <Error title={error}>
          <TfiAlert color={theme.error_title} size={20} />
        </Error> // IMPORTAÇÃO DO ERROR NO INPUT
      )}
    </Container>
  );
};
