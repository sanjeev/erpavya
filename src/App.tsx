import { lazy, useEffect, useState, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import ECommerce from './pages/Dashboard/ECommerce';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import PrivateRoute from './components/PrivateRoute';

//Admin
import AdminList from './pages/Admin/List';
import AdminListDeleted from './pages/Admin/ListDeleted';
import AdminEdit from './pages/Admin/Edit';
import AdminCreate from './pages/Admin/Create';
import VendorUpdate from './pages/Admin/VendorUpdate';

//Vendor
import VendorList from './pages/Vendor/List';
import VendorDetail from './pages/Vendor/Detail';

//Vendor Tabs
//import TabsDeliveryPreference from './pages/Vendor/Tabs/DeliveryPreference';
import TabsPersonalInfo from './pages/Vendor/Tabs/PersonalInfo';

//Vendor:: store address
import TabsStoreAddress from './pages/Vendor/Tabs/StoreAddress/List';
import TabsStoreAddressCreate from './pages/Vendor/Tabs/StoreAddress/Create';
import TabsStoreAddressEdit from './pages/Vendor/Tabs/StoreAddress/Edit';
import TabsStoreAddressDeleted from './pages/Vendor/Tabs/StoreAddress/ListDeleted';

//Vendor:: service area
import TabsServiceArea from './pages/Vendor/Tabs/ServiceArea/List';
import TabsServiceAreaCreate from './pages/Vendor/Tabs/ServiceArea/Create';
import TabsServiceAreaEdit from './pages/Vendor/Tabs/ServiceArea/Edit';
import TabsServiceAreaDeleted from './pages/Vendor/Tabs/ServiceArea/ListDeleted';

//Delivery Prefrences
import TabsDeliveryPreference from './pages/Vendor/Tabs/DeliveryPreference/List';

//Role
import RoleList from './pages/Role/List';
import RoleListDeleted from './pages/Role/ListDeleted';
import RoleEdit from './pages/Role/Edit';
import RoleCreate from './pages/Role/Create';

//attributes
import AttributesList from './pages/Attributes/List';
import AttributesCreate from './pages/Attributes/Create';
import AttributesEdit from './pages/Attributes/Edit';
import AttributesListDeleted from './pages/Attributes/ListDeleted';

//Producttags
import ProductTagsList from './pages/ProductTags/List';
import ProductTagsCreate from './pages/ProductTags/Create';
import ProductTagsEdit from './pages/ProductTags/Edit';
import ProductTagsListDeleted from './pages/ProductTags/ListDeleted';

//import AttributesList from './pages/Attributes/List';

//Brand
import BrandList from './pages/Brand/List';
import BrandListDeleted from './pages/Brand/ListDeleted';
import BrandEdit from './pages/Brand/Edit';
import BrandCreate from './pages/Brand/Create';

//Category
import CategoryList from './pages/Category/List';
import CategoryListDeleted from './pages/Category/ListDeleted';
import CategoryEdit from './pages/Category/Edit';
import CategoryCreate from './pages/Category/Create';


//Faq
import FaqList from './pages/Faq/List';
import FaqListDeleted from './pages/Faq/ListDeleted';
import FaqEdit from './pages/Faq/Edit';
import FaqCreate from './pages/Faq/Create';


//FaqCategory
import FaqCategoryList from './pages/FaqCategories/List';
import FaqCategoryListDeleted from './pages/FaqCategories/ListDeleted';
import FaqCategoryEdit from './pages/FaqCategories/Edit';
import FaqCategoryCreate from './pages/FaqCategories/Create';


//Product
import ProductList from './pages/Product/List';
import ProductListDeleted from './pages/Product/ListDeleted';
import ProductEdit from './pages/Product/Edit';
import ProductCreate from './pages/Product/Create';

//Permission
import PermissionList from './pages/Permission/List';
import PermissionListDeleted from './pages/Permission/ListDeleted';
import PermissionEdit from './pages/Permission/Edit';
import PermissionCreate from './pages/Permission/Create';

//PermissionGroup
import PermissionGroupList from './pages/PermissionGroup/List';
import PermissionGroupListDeleted from './pages/PermissionGroup/ListDeleted';
import PermissionGroupEdit from './pages/PermissionGroup/Edit';
import PermissionGroupCreate from './pages/PermissionGroup/Create';

//Order
import OrderList from './pages/Order/List';
import OrderView from './pages/Order/View';

//SiteSetting
import SiteSettingList from './pages/Store/List';
import SiteSettingListDeleted from './pages/Store/ListDeleted';
import SiteSettingEdit from './pages/Store/Edit';
import SiteSettingCreate from './pages/Store/Create';
//General
import GeneralCreate from './pages/Settings/General/Create';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <Router>
        <Fragment>
          <Routes>
            <Route path="/auth/signin" element={<SignIn />} />
            <Route path="/auth/signup" element={<SignUp />} />

            <Route element={<DefaultLayout />}>
              <Route exact path="/" element={<PrivateRoute />}>
                <Route index element={<ECommerce />} />
              </Route>

              <Route exact path="/vendor" element={<PrivateRoute />}>
                <Route index element={<VendorList />} />
                <Route path="detail/:id" element={<VendorDetail />} />
                <Route
                  path="personal-info/:id"
                  element={<TabsPersonalInfo />}
                />

                {/* store address */}
                <Route
                  path="store-address/:id"
                  element={<TabsStoreAddress />}
                />
                <Route
                  path="store-address/create/:id"
                  element={<TabsStoreAddressCreate />}
                />
                <Route
                  path=":vendor_id/store-address/edit/:id"
                  element={<TabsStoreAddressEdit />}
                />
                <Route
                  path="store-address/deleted/:id"
                  element={<TabsStoreAddressDeleted />}
                />

                {/* service area */}
                <Route path="service-area/:id" element={<TabsServiceArea />} />
                <Route
                  path="service-area/create/:id"
                  element={<TabsServiceAreaCreate />}
                />
                <Route
                  path=":vendor_id/service-area/edit/:id"
                  element={<TabsServiceAreaEdit />}
                />
                <Route
                  path="service-area/deleted/:id"
                  element={<TabsServiceAreaDeleted />}
                />

                {/* delivery prefrence */}
                <Route
                  path="delivery-preference/:id"
                  element={<TabsDeliveryPreference />}
                />
              </Route>

              <Route exact path="/admin" element={<PrivateRoute />}>
                <Route index element={<AdminList />} />
                <Route path="create" element={<AdminCreate />} />
                <Route path="deleted" element={<AdminListDeleted />} />
                <Route path="edit/:id" element={<AdminEdit />} />
                <Route path="vendor/:id" element={<VendorUpdate />} />
              </Route>

              <Route exact path="/role" element={<PrivateRoute />}>
                <Route index element={<RoleList />} />
                <Route path="create" element={<RoleCreate />} />
                <Route path="deleted" element={<RoleListDeleted />} />
                <Route path="edit/:id" element={<RoleEdit />} />
              </Route>

              <Route exact path="/permission" element={<PrivateRoute />}>
                <Route index element={<PermissionList />} />
                <Route path="create" element={<PermissionCreate />} />
                <Route path="deleted" element={<PermissionListDeleted />} />
                <Route path="edit/:id" element={<PermissionEdit />} />
              </Route>

              <Route exact path="/permission-group" element={<PrivateRoute />}>
                <Route index element={<PermissionGroupList />} />
                <Route path="create" element={<PermissionGroupCreate />} />
                <Route
                  path="deleted"
                  element={<PermissionGroupListDeleted />}
                />
                <Route path="edit/:id" element={<PermissionGroupEdit />} />
              </Route>

              <Route exact path="/brand" element={<PrivateRoute />}>
                <Route index element={<BrandList />} />
                <Route path="create" element={<BrandCreate />} />
                <Route path="deleted" element={<BrandListDeleted />} />
                <Route path="edit/:id" element={<BrandEdit />} />
              </Route>

              <Route exact path="/attributes" element={<PrivateRoute />}>
                <Route index element={<AttributesList />} />
                <Route path="create" element={<AttributesCreate />} />
                <Route path="deleted" element={<AttributesListDeleted />} />
                <Route path="edit/:id" element={<AttributesEdit />} />
              </Route>

              <Route exact path="/product_tag" element={<PrivateRoute />}>
                <Route index element={<ProductTagsList />} />
                <Route path="create" element={<ProductTagsCreate />} />
                <Route path="deleted" element={<ProductTagsListDeleted />} />
                <Route path="edit/:id" element={<ProductTagsEdit />} />
              </Route>

              <Route exact path="/category" element={<PrivateRoute />}>
                <Route index element={<CategoryList />} />
                <Route path="create" element={<CategoryCreate />} />
                <Route path="deleted" element={<CategoryListDeleted />} />
                <Route path="edit/:id" element={<CategoryEdit />} />
              </Route>

              <Route exact path="/faq" element={<PrivateRoute />}>
                <Route index element={<FaqList />} />
                <Route path="create" element={<FaqCreate />} />
                <Route path="deleted" element={<FaqListDeleted />} />
                <Route path="edit/:id" element={<FaqEdit />} />
              </Route>

              <Route exact path="/faqcategory" element={<PrivateRoute />}>
                <Route index element={<FaqCategoryList />} />
                <Route path="create" element={<FaqCategoryCreate />} />
                <Route path="deleted" element={<FaqCategoryListDeleted />} />
                <Route path="edit/:id" element={<FaqCategoryEdit />} />
              </Route>
              
              <Route exact path="/product" element={<PrivateRoute />}>
                <Route index element={<ProductList />} />
                <Route path="create" element={<ProductCreate />} />
                <Route path="deleted" element={<ProductListDeleted />} />
                <Route path="edit/:id" element={<ProductEdit />} />
              </Route>

              <Route exact path="/sitesetting" element={<PrivateRoute />}>
                <Route index element={<SiteSettingList />} />
                <Route path="create" element={<SiteSettingCreate />} />
                <Route path="deleted" element={<SiteSettingListDeleted />} />
                <Route path="edit/:id" element={<SiteSettingEdit />} />
              </Route>

               <Route exact path="/general" element={<PrivateRoute />}>
                <Route index element={<GeneralCreate />} />
              </Route>
              <Route exact path="/order" element={<PrivateRoute />}>
                <Route index element={<OrderList />} />
                <Route path=":id" element={<OrderView />} />
              </Route>

              {/* {routes.map(({ path, component: Component }) => (
            <Route
              path={path}
              element={
                <Suspense fallback={<Loader />}>
                  <Component />
                </Suspense>
              }
            />
          ))} */}
            </Route>
          </Routes>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
