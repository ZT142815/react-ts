import * as React from 'react';
import './index.less';

interface IProps {
  name: string;
  age: number;
}

const App = (props: IProps) => {
  const { name, age } = props;
  console.log(123123123);
  return <div className="cls">{name}</div>;
};

export default App;
