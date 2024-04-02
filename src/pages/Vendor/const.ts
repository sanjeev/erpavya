const MODULE = 'Vendor';
const MODULE_VENDOR = 'Vendor Detail';
const slug = '/vendor/';
const api = 'vendor/';
const STORE_ADDRESS_LABEL = 'Store Address';
const STORE_ADDRESS_SLUG = 'store-address/';
const STORE_ADDRESS_API = 'store_address/';
const SERVICE_AREA_LABEL = 'Service Area';
const SERVICE_AREA_SLUG = 'service-area/';
const SERVICE_AREA_API = 'service_area/';
const DP_LABEL = 'Delivery Preference';
const DP_SLUG = 'delivery_preference';

const CONFIG = {
    'vendor' : {
        'module' : MODULE_VENDOR
    },
    'module' : MODULE,
    'slug' : slug,
    'action':{
        'create' : slug + 'create',
        'edit' : slug + 'edit/',
        'detail' : slug + 'detail/',
        'personal_info' : slug + 'personal-info/',
        'deleted' : slug + 'deleted',
        'vendor' : slug + 'vendor/'
    },
    'api' : api,
    'store_address' : {
        'page' : {
            'list' : slug + STORE_ADDRESS_SLUG + ':id',
            'find' : slug + STORE_ADDRESS_SLUG + 'find',
            'edit' : slug + ':vendor_id/' + STORE_ADDRESS_SLUG + 'edit/:id',
            'restore' : slug + STORE_ADDRESS_SLUG + 'restore/:id',
            'create' : slug + STORE_ADDRESS_SLUG + 'create/:id',
            'deleted' : slug + STORE_ADDRESS_SLUG + 'deleted/:id',
        },
        'api' : {
            'list' : api + ':id/' + STORE_ADDRESS_API,
            'find' : api + STORE_ADDRESS_API + ':id',
            'delete' : api + STORE_ADDRESS_API + ':id',
            'restore' : api + STORE_ADDRESS_API + 'restore/:id',
            'deleted' : api + ':id/' + STORE_ADDRESS_API + 'deleted',
        },
    },
    'service_area' : {
        'page' : {
            'list' : slug + SERVICE_AREA_SLUG + ':id',
            'find' : slug + SERVICE_AREA_SLUG + 'find',
            'edit' : slug + ':vendor_id/' + SERVICE_AREA_SLUG + 'edit/:id',
            'restore' : slug + SERVICE_AREA_SLUG + 'restore/:id',
            'create' : slug + SERVICE_AREA_SLUG + 'create/:id',
            'deleted' : slug + SERVICE_AREA_SLUG + 'deleted/:id',
        },
        'api' : {
            'list' : api + ':id/' + SERVICE_AREA_API,
            'find' : api + SERVICE_AREA_API + ':id',
            'delete' : api + SERVICE_AREA_API + ':id',
            'restore' : api + SERVICE_AREA_API + 'restore/:id',
            'deleted' : api + ':id/' + SERVICE_AREA_API + 'deleted',
        },
    },
    'dp' : {
        'page' : {
            'list' : slug + DP_SLUG + ':id'
        },
        'api' : {
            'list' : api + ':id/' + DP_SLUG
        },
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
        'detail' : [
            { slug: slug, label: MODULE },
            { label: 'Detail' }
        ],
        'personal_info' : [
            { slug: slug, label: MODULE },
            { label: 'Personal Info' }
        ],
        'store_address' : {
            "list" : [
                { slug: slug, label: MODULE },
                { label: STORE_ADDRESS_LABEL }
            ],
            "create" : [
                { slug: slug, label: MODULE },
                { label: STORE_ADDRESS_LABEL },
                { label: 'Create New' }
            ],
            "edit" : [
                { slug: slug, label: MODULE },
                { label: STORE_ADDRESS_LABEL },
                { label: 'Edit' }
            ],
            "deleted" : [
                { slug: slug, label: MODULE },
                { label: STORE_ADDRESS_LABEL },
                { label: 'Deleted' }
            ]
        },
        'service_area' : {
            "list" : [
                { slug: slug, label: MODULE },
                { label: SERVICE_AREA_LABEL }
            ],
            "create" : [
                { slug: slug, label: MODULE },
                { label: SERVICE_AREA_LABEL },
                { label: 'Create New' }
            ],
            "edit" : [
                { slug: slug, label: MODULE },
                { label: SERVICE_AREA_LABEL },
                { label: 'Edit' }
            ],
            "deleted" : [
                { slug: slug, label: MODULE },
                { label: SERVICE_AREA_LABEL },
                { label: 'Deleted' }
            ]
        },
        'dp' : {
            "list" : [
                { slug: slug, label: MODULE },
                { label: DP_LABEL }
            ]
        },
    }
}
export default CONFIG;