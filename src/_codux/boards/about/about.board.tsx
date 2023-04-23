import { createBoard } from '@wixc3/react-board';
import About from '../../../modules/about';

export default createBoard({
    name: 'About',
    Board: () => <About />
});
