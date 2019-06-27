import React, { Component } from 'react';

const FlatList = (props) => {
  return (
    <div className="flat-list">
    {props.flats.map(flat => <Flat />)}
    </div>
  );
};

export default FlatList;
