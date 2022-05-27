import React from "react";
import styled from "styled-components";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  colors?: 'primary' | 'secondary' | 'error' | 'info' | 'success';
  variant?: 'contain' | 'outline' | 'text';
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { children, startIcon, endIcon, size, colors, variant, ...rest } = props

  return (
    <StyledButton variant={variant} colors={colors} size={size} {...rest}>
      {startIcon && (
        <div className="icon">
          {startIcon}
        </div>
      )}
      <span className="btn-text">
        {children}
      </span>
      {endIcon && (
        <div className="icon">
          {endIcon}
        </div>
      )}
    </StyledButton>
  )
}

export default Button

Button.defaultProps = {
  size: 'medium',
  colors: 'primary',
  variant: 'text',
}

type StyledButtonProps = {
  size?: 'small' | 'medium' | 'large';
  variant?: 'contain' | 'outline' | 'text';
  colors?: 'primary' | 'secondary' | 'error' | 'info' | 'success';
}

const StyledButton = styled('button')<StyledButtonProps>`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: inherit;
  font-weight: ${props => props.theme.typography.weightMd};
  font-size: ${props => props.theme.buttonSize[props.size || 'medium'].fontSize};
  line-height: ${props => props.theme.typography.spaceLg}; 
  padding: ${props => props.theme.buttonSize[props.size || 'medium'].padding};
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: ${props => props.variant === 'outline' ? 'transparent' : props.theme.buttonColors[props.colors || 'primary'].background};
  ${props => 
      props.variant === 'outline' && 
      `border: 2px solid ${props.theme.buttonColors[props.colors || 'primary'].background};`
  }
  color: ${props => props.variant === 'outline' ? props.theme.buttonColors[props.colors || 'primary'].background : props.theme.buttonColors[props.colors || 'primary'].color};
  letter-spacing: ${props => props.theme.typography.letterSpacing};
  cursor: pointer;
  transition: all 0.25s ease;
  overflow: hidden;

  .btn-text {
    display: block;
    transition: all 0.25s ease-in-out;
  }

  .icon {
    color: inherit;
    font-size: 1.2rem;
  }

  .icon svg {
    display: block;
    transition: all 0.25s ease-in-out;
  }

  &:hover {
    filter: brightness(1.1);
  }

`