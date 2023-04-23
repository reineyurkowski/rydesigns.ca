import { createBoard } from '@wixc3/react-board';
import Contact from '../../../modules/contact';

export default createBoard({
    name: 'Contact',
    Board: () => <Contact />
});
