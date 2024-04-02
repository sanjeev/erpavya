const MODULE = 'Order';
const MODULE_VENDOR = 'Order Detail';
const slug = '/order/';
const api = 'order/';


const CONFIG = {
    'vendor' : {
        'module' : MODULE_VENDOR
    },
    'module' : MODULE,
    'slug' : slug,
    'action':{
        'create' : slug + 'create',
        'edit' : slug + 'edit/',
        'deleted' : slug + 'deleted'
    },
    'api' : api,
    
    'breadcrumbs' : {
        'list' : [
            { label: MODULE }
        ],
        'create' : [
            { slug: slug, label: MODULE },
            { label: 'Create' }
        ],
        'edit' : [
            { slug: slug, label: MODULE },
            { label: 'Edit' }
        ],
        'deleted' : [
            { slug: slug, label: MODULE },
            { label: 'Deleted' }
        ]
    }
}
export default CONFIG;