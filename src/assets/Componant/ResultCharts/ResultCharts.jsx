import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const resultData = [
  {
    "id": 1,
    "name": "Sonia Khatun",
    "math": 85,
    "english": 78,
    "science": 88
  },
  {
    "id": 2,
    "name": "James Smith",
    "math": 72,
    "english": 80,
    "science": 75
  },
  {
    "id": 3,
    "name": "Aisha Rahman",
    "math": 90,
    "english": 85,
    "science": 92
  },
  {
    "id": 4,
    "name": "Liam Johnson",
    "math": 68,
    "english": 70,
    "science": 65
  },
  {
    "id": 5,
    "name": "Noah Williams",
    "math": 88,
    "english": 82,
    "science": 86
  },
  {
    "id": 6,
    "name": "Olivia Brown",
    "math": 95,
    "english": 90,
    "science": 93
  },
  {
    "id": 7,
    "name": "Ethan Davis",
    "math": 76,
    "english": 74,
    "science": 78
  },
  {
    "id": 8,
    "name": "Sophia Wilson",
    "math": 89,
    "english": 91,
    "science": 87
  },
  {
    "id": 9,
    "name": "Mason Taylor",
    "math": 64,
    "english": 68,
    "science": 70
  },
  {
    "id": 10,
    "name": "Isabella Martinez",
    "math": 92,
    "english": 88,
    "science": 90
  }
]

const ResultCharts = () => {
    return (
        <div>
            <LineChart width={1000} height={500} data={resultData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis dataKey={"math"}></YAxis>
                <Tooltip></Tooltip>
                <Line dataKey={"english"} stroke='red'></Line>
                <Line dataKey={"math"} stroke='green'></Line>
                <Line dataKey={"science"} stroke='blue'></Line>
            </LineChart>
        </div>
    );
};

export default ResultCharts;