import React from 'react'

const Sale = ({ goBack }) => {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Sale Management</h2>
        <p>This is the Sale Component.</p>
        <button onClick={goBack} style={styles.button}>
          ← Back to Dashboard
        </button>
      </div>
    );
  };

export default Sale

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