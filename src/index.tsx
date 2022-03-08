import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

if (module && (module as any).hot) {
  (module as any).hot.accept();
}

ReactDOM.render(<App name="zhoutao" age={18} />, document.getElementById('root'));
