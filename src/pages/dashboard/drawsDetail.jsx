import React from "react";
import { Bracket } from "react-brackets";

const DrawsDetail = () => {

  const rounds = [
    {
      title: 'First Match',
      seeds: [
        {
          id: 8,
          date: new Date().toDateString(),
          teams: [{ name: 'Team A' }, { name: 'Team B' }],
        },
        {
          id: 8,
          teams: [{ name: '' }, { name: '' }],
        },
        {
          id: 8,
          teams: [{ name: '' }, { name: '' }],
        },
        {
          id: 8,
          teams: [{ name: '' }, { name: '' }],
        },
        {
          id: 8,
          teams: [{ name: '' }, { name: '' }],
        },
        {
          id: 8,
          teams: [{ name: '' }, { name: '' }],
        },
        {
          id: 8,
          teams: [{ name: '' }, { name: '' }],
        },
        {
          id: 8,
          teams: [{ name: '' }, { name: '' }],
        },
        {
          id: 8,
          teams: [{ name: '' }, { name: '' }],
        },
        {
          id: 8,
          teams: [{ name: '' }, { name: '' }],
        },
        {
          id: 8,
          teams: [{ name: '' }, { name: '' }],
        },
        {
          id: 8,
          teams: [{ name: '' }, { name: '' }],
        },
        {
          id: 8,
          teams: [{ name: '' }, { name: '' }],
        },
        {
          id: 8,
          teams: [{ name: '' }, { name: '' }],
        },
        {
          id: 8,
          teams: [{ name: '' }, { name: '' }],
        },
        {
          id: 8,
          teams: [{ name: '' }, { name: '' }],
        },
      ],
    },
    {
      title: 'First round',
      seeds: [
        {
          id: 8,
          date: new Date().toDateString(),
          teams: [{ name: 'Team A' }, { name: 'Team B' }],
        },
        {
          id: 9,
          date: new Date().toDateString(),
          teams: [{ name: 'Team C' }, { name: 'Team D' }],
        },
        {
          id: 10,
          date: new Date().toDateString(),
          teams: [{ name: 'Team C' }, { name: 'Team D' }],
        },
        {
          id: 11,
          date: new Date().toDateString(),
          teams: [{ name: 'Team C' }, { name: 'Team D' }],
        },
        {
          id: 12,
          date: new Date().toDateString(),
          teams: [{ name: 'Team A' }, { name: 'Team B' }],
        },
        {
          id: 13,
          date: new Date().toDateString(),
          teams: [{ name: 'Team C' }, { name: 'Team D' }],
        },
        {
          id: 14,
          date: new Date().toDateString(),
          teams: [{ name: 'Team C' }, { name: 'Team D' }],
        },
        {
          id: 15,
          date: new Date().toDateString(),
          teams: [{ name: 'Team C' }, { name: 'Team D' }],
        },
      ],
    },
    {
      title: 'Quarter Final',
      seeds: [
        {
          id: 4,
          date: new Date().toDateString(),
          teams: [{ name: 'Team A' }, { name: 'Team B' }],
        },
        {
          id: 5,
          date: new Date().toDateString(),
          teams: [{ name: 'Team C' }, { name: 'Team D' }],
        },
        {
          id: 6,
          date: new Date().toDateString(),
          teams: [{ name: 'Team C' }, { name: 'Team D' }],
        },
        {
          id: 7,
          date: new Date().toDateString(),
          teams: [{ name: 'Team C' }, { name: 'Team D' }],
        },
      ],
    },
    {
      title: 'Semi Final',
      seeds: [
        {
          id: 1,
          date: new Date().toDateString(),
          teams: [{ name: 'Team A' }, { name: 'Team B' }],
        },
        {
          id: 2,
          date: new Date().toDateString(),
          teams: [{ name: 'Team C' }, { name: 'Team D' }],
        },
      ],
    },
    {
      title: 'Final',
      seeds: [
        {
          id: 3,
          date: new Date().toDateString(),
          teams: [{ name: 'Team A' }, { name: 'Team C' }],
        },
      ],
    },
  ];
  return (
    <div>
      <Bracket rounds={rounds} />
    </div>
  );
};

export default DrawsDetail;
