import React from 'react'

const Analytics = ({ goBack }) => {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Analytics Management</h2>
        <p>This is the Analytics Component.</p>
        <button onClick={goBack} style={styles.button}>
          ← Back to Dashboard
        </button>
      </div>
    );
  };

export default Analytics

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