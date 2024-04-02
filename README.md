# Yummy Cake - ERP

** Required Node version > v18 **

**Steps to Install**

```bash
git clone https://bitbucket.org/avyatech/erp-yummycake/src/master/
cd erp-yummycake
npm install
npm run dev
```

When the dev command runs successfully the Dashboard will be open on port: http://localhost:5173/

After that, run this command to generate the build folder. You can upload this build folder to your server, and the dashboard will be live.

**npm run build**

## API Configuration

Create file
src>helpers>api_config.js
and Add below code

```JavaScript
export const BASEAPI_URL_LOCAL = "http://127.0.0.1:4000/";
export const BASEAPI_URL = "https://erp-apis.avyatech.com/";
const APIURL = window.location.host.includes('localhost') ? BASEAPI_URL_LOCAL : BASEAPI_URL;
export const API_BASE_URL = APIURL + 'api/';
export const API_PUBLIC_BASE_URL = APIURL + 'public/uploads/';
```

## Super Admin Login

```
Email: admin@gmail.com
Password: 123456789
```

<div id="package_detail"></div>

### Package Detail

Note: Create package.json manually into your project and install below libraries

| Package Name                 | Version  | URL                                                                | Command                                           | Purpose                                                        |
| ---------------------------- | -------- | ------------------------------------------------------------------ | ------------------------------------------------- | -------------------------------------------------------------- |
| @reduxjs/toolkit             | ^1.9.5   | [Link](https://redux-toolkit.js.org/)                              | `npm install @reduxjs/toolkit@^1.9.5`             | State management library for React and Redux applications      |
| @windmill/react-ui           | ^0.6.0   | [Link](https://windmillui.com/react-ui)                            | `npm install @windmill/react-ui@^0.6.0`           | React UI components for Tailwind CSS                           |
| angular                      | ^1.6.10  | [Link](https://angular.io/)                                        | `npm install angular@^1.6.10`                     | Web application framework                                      |
| apexcharts                   | ^3.41.0  | [Link](https://apexcharts.com/)                                    | `npm install apexcharts@^3.41.0`                  | Interactive JavaScript charts                                  |
| axios                        | ^1.5.0   | [Link](https://axios-http.com/)                                    | `npm install axios@^1.5.0`                        | HTTP client for the browser and Node.js                        |
| bootstrap                    | ^2.0.0   | [Link](https://getbootstrap.com/)                                  | `npm install bootstrap@^2.0.0`                    | Front-end framework for building responsive websites           |
| formik                       | ^2.4.3   | [Link](https://formik.org/)                                        | `npm install formik@^2.4.3`                       | Form library for React                                         |
| headlessui                   | ^0.0.0   | [Link](https://headlessui.dev/)                                    | `npm install headlessui@^0.0.0`                   | Completely unstyled, fully accessible UI components            |
| jsvectormap                  | ^1.5.3   | [Link](http://jvectormap.com/)                                     | `npm install jsvectormap@^1.5.3`                  | Vector map library using SVG for the web                       |
| localforage                  | ^1.10.0  | [Link](https://localforage.github.io/localForage/)                 | `npm install localforage@^1.10.0`                 | Offline storage library for web applications                   |
| lodash.debounce              | ^4.0.8   | [Link](https://lodash.com/)                                        | `npm install lodash.debounce@^4.0.8`              | Debounce utility function for JavaScript                       |
| match-sorter                 | ^6.3.1   | [Link](https://github.com/kentcdodds/match-sorter)                 | `npm install match-sorter@^6.3.1`                 | Simple, expected, and deterministic array sorting utility      |
| moment                       | ^2.29.4  | [Link](https://momentjs.com/)                                      | `npm install moment@^2.29.4`                      | Date and time manipulation library                             |
| nebular                      | ^0.0.1   | [Link](https://akveo.github.io/nebular/)                           | `npm install nebular@^0.0.1`                      | UI library for Angular applications                            |
| react                        | ^18.2.0  | [Link](https://reactjs.org/)                                       | `npm install react@^18.2.0`                       | JavaScript library for building user interfaces                |
| react-apexcharts             | ^1.4.1   | [Link](https://apexcharts.com/docs/react-charts/)                  | `npm install react-apexcharts@^1.4.1`             | React wrapper for ApexCharts                                   |
| react-cookie                 | ^6.1.0   | [Link](https://www.npmjs.com/package/react-cookie)                 | `npm install react-cookie@^6.1.0`                 | Cookie handling for React applications                         |
| react-dom                    | ^18.2.0  | [Link](https://reactjs.org/docs/react-dom.html)                    | `npm install react-dom@^18.2.0`                   | Entry point for working with the DOM in React                  |
| react-hook-form              | ^7.47.0  | [Link](https://react-hook-form.com/)                               | `npm install react-hook-form@^7.47.0`             | Forms management library for React                             |
| react-hot-toast              | ^2.4.1   | [Link](https://react-hot-toast.com/)                               | `npm install react-hot-toast@^2.4.1`              | Toast notifications for React applications                     |
| react-icons                  | ^4.10.1  | [Link](https://react-icons.github.io/react-icons/)                 | `npm install react-icons@^4.10.1`                 | Icon library for React applications                            |
| react-multi-select-component | ^4.3.4   | [Link](https://www.npmjs.com/package/react-multi-select-component) | `npm install react-multi-select-component@^4.3.4` | Multi-select component for React                               |
| react-redux                  | ^8.1.2   | [Link](https://react-redux.js.org/)                                | `npm install react-redux@^8.1.2`                  | Official React bindings for Redux                              |
| react-router-dom             | ^6.14.2  | [Link](https://reactrouter.com/)                                   | `npm install react-router-dom@^6.14.2`            | Declarative routing for React applications                     |
| react-select                 | ^5.7.4   | [Link](https://react-select.com/home)                              | `npm install react-select@^5.7.4`                 | Flexible and customizable select component for React           |
| react-tag-input              | ^6.8.1   | [Link](https://www.npmjs.com/package/react-tag-input)              | `npm install react-tag-input@^6.8.1`              | Tag input component for React                                  |
| react-tag-input-component    | ^2.0.2   | [Link](https://www.npmjs.com/package/react-tag-input-component)    | `npm install react-tag-input-component@^2.0.2`    | Tag input component for React                                  |
| react-tooltip                | ^5.21.4  | [Link](https://www.npmjs.com/package/react-tooltip)                | `npm install react-tooltip@^5.21.4`               | Tooltip component for React                                    |
| redux                        | ^4.2.1   | [Link](https://redux.js.org/)                                      | `npm install redux@^4.2.1`                        | State management library for JavaScript applications           |
| redux-toolkit                | ^1.1.2   | [Link](https://redux-toolkit.js.org/)                              | `npm install redux-toolkit@^1.1.2`                | Toolkit for efficient Redux development                        |
| sort-by                      | ^0.0.2   | [Link](https://www.npmjs.com/package/sort-by)                      | `npm install sort-by@^0.0.2`                      | Simple utility for sorting arrays of objects                   |
| sweetalert2                  | ^11.7.27 | [Link](https://sweetalert2.github.io/)                             | `npm install sweetalert2@^11.7.27`                | Customizable and easy-to-use alert/popup library               |
| windmill                     | ^0.1.3   | [Link](https://windmillui.com/)                                    | `npm install windmill@^0.1.3`                     | High-quality, accessible, and flexible Tailwind CSS components |
| yup                          | ^1.2.0   | [Link](https://github.com/jquense/yup)                             | `npm install yup@^1.2.0`                          | Schema validation library for JavaScript                       |

| @ckeditor/ckeditor5-build-classic | ^1.9.5 | [Link](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic) | `npm i @ckeditor/ckeditor5-build-classic` | Ckeditor5 classic library for React applications |

| @ckeditor/ckeditor5-react | ^1.9.5 | [Link](https://www.npmjs.com/package/@ckeditor/ckeditor5-react/) | `npm i @ckeditor/ckeditor5-react` | ckeditor5 React library for React applications |
