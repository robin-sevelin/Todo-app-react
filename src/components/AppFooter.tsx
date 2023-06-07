import { IProps } from '../models/IComponentProps';

export const AppFooter = (props: IProps) => {
  return (
    <header>
      <h2>{props.content}</h2>
    </header>
  );
};
