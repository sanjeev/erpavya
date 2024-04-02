const MODULE = 'General';
const slug = '/general';
const api = 'general/';
const CONFIG = {
    'module' : MODULE,
    'slug' : slug,
    'action':{
        'create' : slug + '/create',
        'edit' : slug + '/edit/',
        'deleted' : slug + '/deleted'
    },
    'api' : api,
    'api_action' : {
        'deleted' : api + 'getdeleted',
        'restore' : api + 'restore/',
    },
    'breadcrumbs' : {
        'list' : [
            { label: MODULE }
        ],
        'create' : [
            { slug: slug, label: MODULE },
            { label: 'Create' }
        ],
        'update' : [
            { slug: slug, label: MODULE },
            { label: 'Update' }
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