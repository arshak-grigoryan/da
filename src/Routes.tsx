import { Switch, Route } from 'react-router-dom';
import Button from './components/button';
import { useGDrive } from './gDrive';

const Main = () => <div>hi</div>;


const Router = () => {
  console.log('aa')
    useGDrive();
    console.log('bbb')
    return (
      <div>
        <Button/>
        {/* <Code/> */}
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
    );
  };
  export default Router;