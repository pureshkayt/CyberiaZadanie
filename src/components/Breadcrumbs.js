import React from 'react';
import {Breadcrumbs, Link, Typography} from "@mui/material";
import '../styles/_breadcrumbs.scss';

const Breadcrumb = () => {
    return (
        <Breadcrumbs aria-label="breadcrumb" className='breadcrumbs'>
            <Link
                underline="hover"
                href="#"
            >
                Главная
            </Link>
            <Typography>Кейсы</Typography>
        </Breadcrumbs>
    );
};

export default Breadcrumb;
