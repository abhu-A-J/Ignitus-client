import React from 'react';
import {Button} from '../../buttons';
import {StyledIcon} from '../styles';
import {BtnProps} from '../types';

export const DefaultButtonWithIconOnRight = ({
  size,
  category,
  name,
  content,
  ...rest
}: BtnProps) => (
  <Button size={size} category={category} {...rest}>
    {content} <StyledIcon name={name} category={category} size={size} />
  </Button>
);

export const DefaultButtonWithIconOnLeft = ({
  size,
  category,
  name,
  content,
  ...rest
}: BtnProps) => (
  <Button size={size} category={category} {...rest}>
    <StyledIcon name={name} category={category} size={size} /> {content}
  </Button>
);
