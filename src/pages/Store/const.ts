const MODULE = 'SiteSetting';
const slug = '/sitesetting';
const api = 'sitesetting/';

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