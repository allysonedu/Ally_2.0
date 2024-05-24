import { useRef, useEffect, useState, useCallback } from 'react'

import { useField } from '@unform/core'

import { TfiAlert } from 'react-icons/tfi' // Icon de error

import { useTheme } from 'styled-components'

import { Container, Error } from './styles'

export const Input = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef(null)

  const theme = useTheme()

  const [isFocused, setIsFocused] = useState(false) // Responsavel por dar cor no Input quando tem Text dentro!

  const [isFilled, setIsFilled] = useState(false) // Responsavel por dar cor no Input quando tem Text dentro!

  const { fieldName, registerField, error, defaultValue } = useField(name)

  const handleOnFocus = useCallback(() => {
    setIsFocused(true)
  }, []) // Responsavel por dar cor no Input quando tem Text dentro!

  const handleOnBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef.current?.value)
  }, []) // Responsavel por dar cor no Input quando tem Text dentro!
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  return (
    <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      <input
        type="text"
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
      />

      {error && (
        <Error title={error}>
          <TfiAlert color={theme.error_title} size={20} />
        </Error>
      )}
    </Container>
  )
}
