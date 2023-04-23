import { createBoard } from '@wixc3/react-board';
import Header from '../../../modules/header';

export default createBoard({
    name: 'Header',
    Board: () => <Header />
});
