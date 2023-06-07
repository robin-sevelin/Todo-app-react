import { IProps } from '../models/IComponentProps';
import { AppTodos } from './AppTodos';

export const AppMain = (props: IProps) => {
  return (
    <main>
      <h2>{props.content}</h2>
      <AppTodos />
    </main>
  );
};
