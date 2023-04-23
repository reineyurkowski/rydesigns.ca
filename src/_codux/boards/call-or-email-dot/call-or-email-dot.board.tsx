import { createBoard } from '@wixc3/react-board';
import CallOrEmailDot from '../../../modules/callOrEmailDot';

export default createBoard({
    name: 'CallOrEmailDot',
    Board: () => <CallOrEmailDot />
});
