import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';


export class PaginationMenu extends React.Component<any, any> {
    render() {
        const urlParsed = location.href.includes('/?page=') ? location.href.split('/?page=') : [location.href];
        const page = urlParsed.length === 1 ? parseInt(urlParsed[1], 10) : 1;
        return (
            <Pagination
                page={page}
                count={10}
                renderItem={(item) => (
                    <PaginationItem
                        component={Link}
                        to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
                        {...item}
                    />
                )}
            />
        )
    }
}
