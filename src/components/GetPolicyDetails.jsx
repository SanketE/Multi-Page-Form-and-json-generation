import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .overlaps-form-container {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
  align-items: center;
  }

  .overlaps-form {
 
  }

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
  }

  .form-group {
    margin-bottom: 20px;
  }

  label {
    font-size: 16px;
    color: #333;
  }

  input[type='text'] {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 5px;
    margin-bottom: 10px;
  }

`;
const CheckboxSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CheckboxInput = styled.input`
  margin-right: 8px;
`;


const GetPolicyDetails = () => {
  return (
    <Container>
      <div className="overlaps-form-container">
        <form className="overlaps-form">
          <h2>Add Protection Policy</h2>
          <div className="form-group">
            <label htmlFor="policyName">Protection Policy Name</label>
            <input type="text" id="policyName" placeholder="Enter Policy Name" />
            <label htmlFor="Description">Description</label>
            <input type="text" id="description" />

            <CheckboxSection className="checkbox-section">
              <label>Options:</label>
              <CheckboxItem>
                <label htmlFor="vmware">VMware</label>
                <CheckboxInput type="checkbox" id="vmware" name="vmware" />
              </CheckboxItem>
              <CheckboxItem>
                <label htmlFor="databaseLog">DataBase Log</label>
                <CheckboxInput type="checkbox" id="databaseLog" name="databaseLog" />
              </CheckboxItem>
              <CheckboxItem>
                <label htmlFor="aws">AWS</label>
                <CheckboxInput type="checkbox" id="aws" name="aws" />
              </CheckboxItem>
              <CheckboxItem>
                <label htmlFor="hpeArrayVolumes">HPE Array Volumes</label>
                <CheckboxInput type="checkbox" id="hpeArrayVolumes" name="hpeArrayVolumes" />
              </CheckboxItem>
            </CheckboxSection>

          </div>
        </form>
      </div>
    </Container>
  );
};

export default GetPolicyDetails;
