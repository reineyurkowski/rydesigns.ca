import { createBoard } from '@wixc3/react-board';
import Pricing from '../../../modules/pricing';

export default createBoard({
    name: 'Pricing',
    Board: () => <Pricing />
});
