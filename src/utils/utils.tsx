import cn from 'classnames';
import { LogoWord } from '../types/models';

export const logoMarkup = (word: LogoWord) => <span className={cn('logo__letter', {'logo__letter--1': word.index === 1}, {'logo__letter--2': word.index === 2}, {'logo__letter--3': word.index === 3},)} key={word.index}>{word.name}</span>;

