import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import uuid from "uuid/v4";
import styled from "styled-components"
// import { generateRandomFontColor, generateRandomHexColor } from "../task/DisplayTask";
import Avatar from "@material-ui/core/Avatar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import Header from "../../components/Header";


const headerlinks = [
  { name: "Tasks", link: "/tasks" },
  { name: "Kanban", link: "/kanban" },
  { name: "Activity", link: "/activity" },
  { name: "Calendar", link: "/calendar" },
  { name: "Files", link: "/file" },
];



const itemsFromBackend = [
  { id: "1", title: 'E-mail after registration so that I can confirm my', avatarUrl: "", tag: 'Development' },
  { id: "2", title: '2 E-mail after registration so that I can confirm my', avatarUrl: "", tag: 'Development' },
  { id: "3", title: '3E-mail after registration so that I can confirm my', avatarUrl: "", tag: 'Development' },
  { id: "4", title: '4E-mail after registration so that I can confirm my', avatarUrl: "https://res.cloudinary.com/projectmanagementgroupb/image/upload/v1634869516/vjjkzu5pxvy3n0sylgua.jpg", tag: 'Development' },

];

const columnsFromBackend = {
  ["5"]: {
    name: "Backlog",
    items: itemsFromBackend
  },
  ["6"]: {
    name: "To Do",
    items: []
  },
  ["7"]: {
    name: "Done",
    items: []
  }
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

function KanbanComp() {

  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <>
      {/* <Header signOut="signOut" header="PROJECT PRIMUS" headerlinks={headerlinks} /> */}
      <KanbanSection >

        <DragDropContext
          onDragEnd={result => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  // backgroundColor:'white'
                }}
                key={columnId}
              >

                <Kanbans >
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <KanbanColumn
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "#F7F6F3"
                              : "white",
                            borderRadius: '10px',
                            width: 350,
                            minHeight: 500
                          }}
                        >
                          <KanbanHeaderContainer>
                            <KanbanHeader>{column.name} </KanbanHeader>
                            <AddTaskDiv>+Add Task</AddTaskDiv>
                          </KanbanHeaderContainer>
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <KanbanCard
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",

                                        backgroundColor: snapshot.isDragging
                                          ? "#CEF9C6"
                                          : "#F7F6F3",
                                        overflowY: 'scroll',

                                        ...provided.draggableProps.style
                                      }}
                                    >
                                      <h3
                                        style={{
                                          display: "inline-block",
                                          marginLeft: "5px",
                                          lineHeight: "24px",
                                          marginBottom: "7px",
                                        }}
                                      >
                                        {item.title}
                                      </h3>
                                      <div
                                        style={{
                                          display: "flex",
                                          marginLeft: "5px",
                                          justifyContent: "flex-start",
                                          alignItems: "center",
                                        }}
                                      >
                                        <div>
                                          {item.avatarUrl ? <Avatar src={item.avatarUrl} /> : <AccountCircleIcon />}
                                          {/* <AccountCircleIcon /> */}
                                        </div>
                                        <TagContainer >
                                          {item.tag}
                                        </TagContainer>
                                      </div>
                                    </KanbanCard>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </KanbanColumn>
                      );
                    }}
                  </Droppable>
                </Kanbans>
              </div>
            );
          })}
        </DragDropContext>
      </KanbanSection>
    </>
  );
}

export default KanbanComp;



const KanbanSection = styled.div`
display: flex;
justify-content:center;
height: 100%;
width: 80vw;
`
const Kanbans = styled.div`
 margin: 10px;
`;

const KanbanHeaderContainer = styled.div`
display: flex;
justify-content:space-between;
align-items: center;
margin-bottom: 15px;
`
const KanbanHeader = styled.div`
font-weight: bold;
font-size: 26px;
line-height: 38px;
color: #131313;
`;
const AddTaskDiv = styled.div`
  background-color: #cef9c6;
  border-radius: 20px;
  font-weight: bold;
font-size: 14px;
line-height: 21px;
  cursor: pointer;
  width:110px;
height:40px;
display: flex;
justify-content:center;
align-items: center;
`;

const KanbanColumn = styled.div`
  background-color: white;
  padding: 30px;
  height: fit-content;
  margin-top: 5px;
  margin-bottom: 10px;
  overflow-y: auto;
 
`;
const KanbanCard = styled.div`
  margin: 20px 0;
  padding: 20px 20px;
  border-radius: 20px;
`;
const TaskCardGroupContainer = styled.div`
  background-color: white;
  margin-bottom: 40px;
`;
const TaskCardGroupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TaskCardGroupBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const TaskCardCheckBox = styled.input`
  display: inline-block;
  border: 1px solid #000000;
  margin-top: 10px;
`;
const TagContainer = styled.div`
  font-weight: bold;
  line-height: 20px;
  font-family: Heebo;
  padding: 4px 10px;
  border-radius: 20px;
  margin-left: 10px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #F5F0FF;
  color:#764CED;
`;
