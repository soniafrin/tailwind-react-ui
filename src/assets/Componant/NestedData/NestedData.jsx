import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const NestedData = ({nestedPromise}) => {
   
    const nestedDataRes = use(nestedPromise)
    // console.log(nestedDataRes);
    const nestedData = nestedDataRes.data;
    const {id, name, total} = nestedDataRes;
    const nestedDataProcessing =  nestedData.map(data => {
                    const unNestedData = {
                        id: data.id,
                        name: data.name,
                        math: data.subjects.math,
                        english: data.subjects.english, 
                        science: data.subjects.science, 
                    }
                    const totalMarks = unNestedData.math + unNestedData.english + unNestedData.science;
                    unNestedData.total = totalMarks;
                    return unNestedData;
                })
                
    return (
        <div>
            <BarChart width={600} height={600} data={nestedDataProcessing}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis ></YAxis>
                <Bar dataKey={"total"} fill='cyan'></Bar>
                <Bar dataKey={"english"} fill='blue'></Bar>
                <Bar dataKey={"math"} fill='gold'></Bar>
                <Bar dataKey={"science"} fill='red'></Bar>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default NestedData;