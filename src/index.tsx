import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.less';

if (module && (module as any).hot) {
  (module as any).hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'));
