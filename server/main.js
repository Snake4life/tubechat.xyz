import publications from './publications';
import methods from './methods';
import Chaturbate from './configs/chaturbate.js';
import BongaCash from './configs/bongacash.js';
import AliExpress from './configs/aliexpress.js';

SyncedCron.config({
    log: true,
    collectionName: 'cronHistory'
});

publications();
methods();
Chaturbate();
BongaCash();