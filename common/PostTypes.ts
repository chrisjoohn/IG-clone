import React from 'react';

type Author = {
  username: string;
  displayPhoto: string;
};

export type Post = {
  author: Author;
  caption: string;
  url: string;
};

export type PostContainerProps = {
  Component?: React.ReactNode;
  posts?: Post[] | null[];
};
