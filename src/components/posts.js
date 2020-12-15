import React from 'react'
import {  Table } from "semantic-ui-react"; 

const Posts =({posts,loading}) =>{
    if(loading){
return<h2>loading...</h2>
    }
    return (
        <div>
<Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Published GTIN</Table.HeaderCell>
            <Table.HeaderCell>Inner Pack Item ID</Table.HeaderCell>
            <Table.HeaderCell>Sales Variant (SV) Item ID</Table.HeaderCell>
            <Table.HeaderCell>Item Hierarchy Status</Table.HeaderCell>
            <Table.HeaderCell>Role Update Date and Time</Table.HeaderCell>
            <Table.HeaderCell>Venus Reason Code</Table.HeaderCell>
            <Table.HeaderCell>Venus IMF Number</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {posts.map(post => {
            return (
              <Table.Row >
                <Table.Cell>
                  {post.publishedGtin}
                </Table.Cell>
                <Table.Cell>{post.version}</Table.Cell>
                <Table.Cell>{post.innerPackItemId}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
        </div>
    )
}

export default Posts;