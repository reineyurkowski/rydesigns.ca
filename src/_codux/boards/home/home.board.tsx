import { createBoard } from '@wixc3/react-board';
import Home from '../../../modules/home';

export default createBoard({
    name: 'Home',
    Board: () => <Home />
});
