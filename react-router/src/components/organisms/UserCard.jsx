import styled from "styled-components";

export const UserCard = () => {
  return (
    <>
      <img
        width={160}
        height={160}
        src="https://source.unsplash.com/N04FIfHhv_k"
        alt="プロフィール"
      />
      <p>名前</p>
      <SDl>
        <dt>メール</dt>
        <dd>1111@aa.com</dd>
        <br />
        <dt>電話番号</dt>
        <dd>000-9999-888</dd>
        <br />
        <dt>会社名</dt>
        <dd>サンプル会社</dd>
        <br />
        <dt>WEB</dt>
        <dd>WEB.com</dd>
      </SDl>
    </>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0;
  dt {
    display: inline-block;
  }
  dd {
    display: inline-block;
    padding-left: 32px;
    margin-left: 0 !important;
  }
`;