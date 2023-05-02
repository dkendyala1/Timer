import * as React from "react"
import { render } from "react-dom"
import * as DataGrid from "react-data-grid"

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
}

const list = [
  { id: 1, junkInfo: "whatever" },
  { id: 2, junkInfo: "whatever" },
  { id: 3, junkInfo: "whatever" },
  { id: 4, junkInfo: "whatever" },
  { id: 5, junkInfo: "whatever" },
  { id: 6, junkInfo: "last drop of horchata" },
  { id: 9823476, junkInfo: "whatever" },
  { id: 32454, junkInfo: "whatever" },
  { id: 345, junkInfo: "whatever" },
]

const App = () => {
  return (
    <div style={styles}>
      <DataGrid columns={[{ key: "id", name: "id" }]} rowGetter={i => list[i]} rowsCount={list.length} />
    </div>
  )
}

render(<App/>, document.getElementById("root"))
