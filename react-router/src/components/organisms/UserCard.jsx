import styled from "styled-components";

import { Card } from "../atoms/card/Card";
import { UserIconWithName } from "../molecules/user/UserIconWithName";

export const UserCard = (props) => {
  const { user, isAdmin } = props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} isAdmin={isAdmin} />
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <br />
        <dt>電話番号</dt>
        <dd>{user.phone}</dd>
        <br />
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <br />
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
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
    overflow-wrap: break-word;t
  }
`;