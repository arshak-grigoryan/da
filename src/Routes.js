import { Switch, Route } from 'react-router-dom';
import Button from './components/button';
import { useGDrive } from './gDrive';

const Main = () => <div>hi</div>;

const Code = () => <pre>console.log('aaaaaaaaa')</pre>

const Router = () => {
  console.log('aa')
    useGDrive();

    return (
      <div>
        <Button/>
        <Code/>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/code" component={Code} />
        </Switch>
      </div>
    );
  };
  export default Router;