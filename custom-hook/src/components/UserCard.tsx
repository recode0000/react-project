import { VFC } from 'react';

type Props = {
  user:
};

export const UserCard: VFC<Props> = () => {

  return (
    <div>
      <dl>
        <dt>名前</dt>
        <dd></dd>
        <dt>メール</dt>
        <dd></dd>
        <dt>住所</dt>
        <dd></dd>
      </dl>
    </div>
  )
}