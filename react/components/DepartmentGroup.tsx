import React from "react";

import { useCssHandles } from 'vtex.css-handles';

 import './styles.css'

type Props ={
    departments: [Category],
    handleSetSlug: any
}

type Category = {
    id:number,
    name:string,
    slug:string
}

const DepartmentGroup =({departments, handleSetSlug}: Props)=> {
    console.log("departments: ", departments)
    
     const CSS_HANDLES = [
         "departmentGroup__container",
         "departmentGroup__select"   
         ]
    
    const handles = useCssHandles(CSS_HANDLES)

    const onHandleSetSlug = (e: any) => {
        handleSetSlug(`${e.target.value}/$\{term\}&map=ft`)
    }

    const departmentOptions: any = departments.map((department: Category)=> {
        return <option
        value={department.slug}
        key={department.id}
        >
            {department.name}
        </option>
    })
    
    console.log("departments2: ", departmentOptions)
    return <div className={`${handles["departmentGroup__container"]} h-100 pv4`}
    >
    <select
            className={`${handles["departmentGroup__select"]} h-100`}
            onChange={onHandleSetSlug}
            defaultValue="value0"
            >
        <option 
        disabled
        value="value0">Seleccione una opción</option>
        {departmentOptions}
    </select>
        </div>
}

export default DepartmentGroup