import { Link } from 'react-router-dom';
interface BreadcrumbProps {
  pageName: string;
  elements: Array
}
const Breadcrumb = ({ pageName, elements }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li key="k-dashboard" className="text-primary">
            <Link to="/">Dashboard</Link>
          </li>
          {elements.map((value, index) => (
            
            <li key={index}>/
              {value.slug ? (
                <Link className="text-primary" to={value.slug}> {value.label}</Link> ) : 
                (<span key={index}> {value.label}</span>)
              }
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
