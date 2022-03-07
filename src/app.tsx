import * as React from 'react';

interface IProps {
  name: string;
  age: number;
}

const App = (props: IProps) => {
  const { name, age } = props;
  return <div>{name}</div>;
};

export default App;
