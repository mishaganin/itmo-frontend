import React from 'react';
import { IAuthor } from '@shared/types';
import { GetServerSideProps } from 'next';
import { fetch } from '@shared/utils/fetch';
import { useRouter } from 'next/router';

type TProfileProps = {
  authors: IAuthor[];
}

const Profile = ({ authors }: TProfileProps): React.JSX.Element => {
  const router = useRouter();
  const { id } = router.query;
  const author = authors.find((el) => el.id === id);
  // const handlePostClick = () => {
  //   redirect(`/posts/${id}`);
  // };
  //
  // const handleAuthorClick = (e: MouseEvent<HTMLButtonElement>) => {
  //   e.stopPropagation();
  //   redirect(`/accounts/${id}`);
  // };

  return (
    <div>
      {author && (
        <h1>{author.username}</h1>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<TProfileProps> = async ( ctx ) => {
  const authors = await fetch('/author');

  return { props: { authors } };
}

export default Profile;
