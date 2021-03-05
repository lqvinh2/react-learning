import React, { Component } from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({ data, onSort, sortColumn, columns }) => {
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
      ></TableHeader>

      <TableBody data={data} columns={columns}></TableBody>
    </table>
  );
};

export default Table;
