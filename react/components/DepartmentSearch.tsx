import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql'
import DepartmentGroup from './DepartmentGroup'

import { SearchBar } from 'vtex.store-components'

const DepartmentSearch = () => {    
    const { data, loading } = useQuery(QUERY_VALUE)

    const [slug, setSlug] = useState("")

    console.log("slug:", slug)

    console.log("datos de query: ", data?.categories[0].children)

    return loading ? <div>Loading...</div>
    :
    <div className='flex items-center justify-center'>
        <DepartmentGroup 
            departments={data?.categories[0].children}
            handleSetSlug={setSlug}
        />
        <SearchBar 
            customSearchPageUrl={slug}
            placeholder="¿Qué estás buscando?"
            displayMode='search-and-clear-buttons'
        />
    </div>
} 

export default DepartmentSearch
