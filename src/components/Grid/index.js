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
    columnCount,
    columnGap,
  } = props;

  const styles = {
    girdlayout: {
      columnGap: columnGap || "10px",
      columnCount: columnCount || 3,
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
      <div className={styles.className} style={styles.girdlayout}>
        {renderData(data)}
      </div>
    </div>
  );
}
