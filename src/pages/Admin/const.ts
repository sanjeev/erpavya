const MODULE = 'Admin';
const MODULE_VENDOR = 'Vendor Detail';
const slug = '/admin';
const api = 'admin/';
const CONFIG = {
    'vendor' : {
        'module' : MODULE_VENDOR
    },
    'module' : MODULE,
    'slug' : slug,
    'action':{
        'create' : slug + '/create',
        'edit' : slug + '/edit/',
        'deleted' : slug + '/deleted',
        'vendor' : slug + '/vendor/'
    },
    'api' : api,
    'api_action' : {
        'deleted' : api + 'deleted',
        'restore' : api + 'restore/',
        'vendor' : api + 'vendor/'
    },
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
        ],
        'vendor' : [
            { slug: slug, label: MODULE },
            { label: MODULE_VENDOR }
        ],
    }
}
export default CONFIG;