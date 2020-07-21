import React from "react";
import "./grid.css";
export default function Grid(props) {
  const {
    className,
    gridTemplateRows,
    gridTemplateColumns,
    itemClassName,
    itemWrapper,
    data,
  } = props;

  const styles = {
    girdlayout: {
      gridTemplateRows: gridTemplateRows || "auto",
      gridTemplateColumns: gridTemplateColumns || "auto",
      display: "grid",
    },
    itemClassName: itemClassName || "w-100",
    className: className || "w-100 h-100 border border-primary rounded p-2",
    wrapper: "box-component",
  };

  const renderData = (datas) => {
    if (Array.isArray(datas)) {
      if (datas.length > 0) {
        return (
          <>
            {datas.map((item) => {
              return <>{itemWrapper ? itemWrapper(item) : <p>item</p>}</>;
            })}
          </>
        );
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>Grid</h1>
      <p>
        The Material Design responsive layout grid adapts to screen size and
        orientation, ensuring consistency across layouts.
      </p>
      <h1>API</h1>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Default</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">className</th>
            <td>string</td>
            <td></td>
            <td>css of wrapper component</td>
          </tr>
          <tr>
            <th scope="row">gridTemplateRows</th>
            <td>string</td>
            <td>auto</td>
            <td>width of item on row example: "1fr 1fr"</td>
          </tr>
          <tr>
            <th scope="row">gridTemplateColumns</th>
            <td>string</td>
            <td>auto</td>
            <td>height of item on column example: "1fr 1fr"</td>
          </tr>
          <tr>
            <th scope="row">itemClassName</th>
            <td>string</td>
            <td></td>
            <td>css of once item</td>
          </tr>
          <tr>
            <th scope="row">data</th>
            <td>array</td>
            <td>[]</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">itemWrapper</th>
            <td>node | func</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-5">Result : </h3>

      <div className={styles.className} style={styles.girdlayout}>
        {renderData(data)}
      </div>
    </div>
  );
}
