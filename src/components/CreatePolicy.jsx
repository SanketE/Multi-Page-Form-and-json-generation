import React, { useState } from 'react';
import styled from 'styled-components';
import GetPolicyDetails from './GetPolicyDetails';
import StepTwo from './StepTwo';
import Review from './Review';

const Container = styled.div`
  margin: 5% auto;

  width: 70vw;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StepsContainer = styled.div`
  padding: 20px;
`;

const Message = styled.div`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
`;


const ButtonsContainer = styled.div`
margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  background-color: #134f28;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1a8041;
  }
`;

const CreatePolicy = () => {
  const [step, handleStep] = useState(1);
  const [total, setTotal] = useState({
    arraySchedules: [],
    onPremisesSchedules: [],
    cloudStoreSchedules: []
  });

  const messages = ["General", "Schedules", "Review"];

  function handleNext() {
    if (step < 3) handleStep(step + 1);
  }

  function handlePrev() {
    if (step !== 1) handleStep(step - 1);
  }

  return (
    <Container>
      <StepsContainer>
      <div className="numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>
        <Message>
          {step}: {messages[step - 1]}
        </Message>
        {step === 1 ? (
          <GetPolicyDetails />
        ) : step === 2 ? (
          <StepTwo setTotal={setTotal} />
        ) : (
          <Review total={total} />
        )}
        <ButtonsContainer>
          <Button onClick={handlePrev}>Previous</Button>
          <Button onClick={handleNext}>Next</Button>
        </ButtonsContainer>
      </StepsContainer>
    </Container>
  );
};

export default CreatePolicy;
