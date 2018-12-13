import React from 'react';
import Table from './table';

export default () => {
    const students = [
        {
            name: 'kate',
            course: 'communication',
            grade: 100
        },
        {
            name: 'nicole',
            course: 'law',
            grade: 89
        },
        {
            name: 'shersh',
            course: 'finance',
            grade: 99
        }
    ];
    return (
        <div className='container'>
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}
