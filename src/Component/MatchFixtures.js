import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { Table, Tag, Space, Result } from "antd";
import { getMatchFixtures } from "../redux/FixtureSlice";
import { useSelector, useDispatch } from "react-redux";
import { DatePicker } from "antd";

import moment from 'moment';

const dateFormat = 'YYYY/MM/DD';
const columns = [
  {
    title: "Match Title",
    dataIndex: "title",
    key: "title",
    //   render: text => <a>{text}</a>,
  },
  {
    title: "Subtitle",
    dataIndex: "subtitle",
    key: "subtitle",
  },
  {
    title: "Venue",
    dataIndex: "venue",
    key: "venue",
  },
  {
    title: "Time",
    dataIndex: "time,",
    key: "time,",
  },
  {
    title: "Home team",
    dataIndex: "homeTeam",
    key: "homeTeam",
  },
  {
    title: "Away team",
    dataIndex: "awayTeam",
    key: "awayTeam",
  },
];

// const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//       render: text => <a>{text}</a>,
//     },
//     {
//       title: 'Age',
//       dataIndex: 'age',
//       key: 'age',
//     },
//     {
//       title: 'Address',
//       dataIndex: 'address',
//       key: 'address',
//     },
//     {
//       title: 'Tags',
//       key: 'tags',
//       dataIndex: 'tags',
//       render: tags => (
//         <>
//           {tags.map(tag => {
//             let color = tag.length > 5 ? 'geekblue' : 'green';
//             if (tag === 'loser') {
//               color = 'volcano';
//             }
//             return (
//               <Tag color={color} key={tag}>
//                 {tag.toUpperCase()}
//               </Tag>
//             );
//           })}
//         </>
//       ),
//     },
//     {
//       title: 'Action',
//       key: 'action',
//       render: (text, record) => (
//         <Space size="middle">
//           <a>Invite {record.name}</a>
//           <a>Delete</a>
//         </Space>
//       ),
//     },
//   ];

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];

export const MatchFixtures = () => {
  const matchData = useSelector((state) => state.fixture.value);
  const dispatch = useDispatch();
  useEffect(() => {
    const axios = require("axios");

    const options = {
      method: "GET",
      url: "https://cricket-live-data.p.rapidapi.com/fixtures-by-date/2022-04-26",
      headers: {
        "X-RapidAPI-Host": "cricket-live-data.p.rapidapi.com",
        "X-RapidAPI-Key": "e46e00a62fmsh7d5d606a24041dbp1cd247jsnd22da76a9e98",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data, "checkRes");
        dispatch(getMatchFixtures(response.data));
      })
      .catch(function (error) {
        console.error(error);
      });

    // console.log(matchData, 'MatchData')
  }, []);

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  // const resultData = matchData.payload.results
  return (
    <div>
      <Space direction="vertical">
        <DatePicker onChange={onChange} defaultValue={moment()} format={dateFormat} />
      </Space>
      <Table columns={columns} />
      {/* {console.log(matchData.payload.results,'MatchData')} */}
    </div>
  );
};
