import React from 'react';
import {
  Blockquote,
  H1,
  H2,
  Li,
  Ol,
  P,
  Ul
  } from './element-styles';

export const Element = ({ attributes, children, element }: any) => {
  switch (element.type) {
    case 'block-quote':
      return <Blockquote {...attributes}>{children}</Blockquote>;
    case 'bulleted-list':
      return <Ul {...attributes}>{children}</Ul>;
    case 'heading-one':
      return <H1 {...attributes}>{children}</H1>;
    case 'heading-two':
      return <H2 {...attributes}>{children}</H2>;
    case 'list-item':
      return <Li {...attributes}>{children}</Li>;
    case 'numbered-list':
      return <Ol {...attributes}>{children}</Ol>;
    default:
      return <P {...attributes}>{children}</P>;
  }
};
