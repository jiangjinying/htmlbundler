import { _person } from './common/utils.js';
import { Dialog } from './common/dialog.js';

_person.tools.loading.show();

Dialog.confirm({
    title: '温馨提示',
    content:'想好了吗'
});


console.log('a');
