type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
export const Todo = props => {
  const { title, userId, completed } = props;
  const completeMark = completed ? "[完了]" : "[未完了]";
  return <p>{`${completeMark} ${title} (ユーザー：${userId})`}</p>;
};