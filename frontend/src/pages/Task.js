import React from 'react'

const Task = ({ goBack }) => {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Task Management</h2>
        <p>This is the Task Component.</p>
        <button onClick={goBack} style={styles.button}>
          ← Back to Dashboard
        </button>
      </div>
    );
  };

export default Task

const styles = {
    button: {
      marginTop: "20px",
      padding: "10px 20px",
      fontSize: "16px",
      cursor: "pointer",
      backgroundColor: "#2c3e50",
      color: "white",
      border: "none",
      borderRadius: "5px"
    }
  };