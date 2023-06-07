import { IProps } from '../models/IComponentProps';

export const AppHeader = (props: IProps) => {
  return (
    <header>
      <h1>{props.content}</h1>
    </header>
  );
};
