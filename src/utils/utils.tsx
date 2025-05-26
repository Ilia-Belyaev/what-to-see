import cn from 'classnames';
import { LogoWord } from '../types/models';

export const logoMarkup = (word: LogoWord) => <span className={cn('logo__letter', {'logo__letter--1': word.index === 1}, {'logo__letter--2': word.index === 2}, {'logo__letter--3': word.index === 3},)} key={word.index}>{word.name}</span>;

export const convertDate = (date: string) => date.split('T')[0];

export const convertFullDate = (date: string) => {
  const month = new Date(date).toLocaleString('en-US', { month: 'long' });
  const year = new Date(date).getFullYear();
  const day = new Date(date).getDay();

  return `${month} ${day}, ${year}`;
};

