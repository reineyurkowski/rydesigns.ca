import { createBoard } from '@wixc3/react-board';
import Welcome from '../../../modules/welcome';

export default createBoard({
    name: 'Welcome',
    Board: () => <Welcome />
});
