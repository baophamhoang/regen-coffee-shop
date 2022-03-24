import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { useLocation, Link } from "react-router-dom";

export default function BreadcrumbComponent(){
    const location = useLocation();
    const pathArr = location.pathname.split('/');
    const activePath = pathArr[pathArr.length-1];
    pathArr.splice(pathArr.length-1)
    console.log(pathArr);
    return (
        <Breadcrumb>
                {pathArr.map( path => (
                    <BreadcrumbItem>
                        <Link to={'/'+ path}>{path===''?'Home':path}</Link>
                    </BreadcrumbItem>
                ))}
                <BreadcrumbItem active>{activePath}</BreadcrumbItem>
        </Breadcrumb>
    )
}

